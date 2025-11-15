// ====================================
// 1. CONFIGURACIÓN INICIAL Y DATOS
// ====================================

// Define los índices de las columnas según tu estructura:
// 0 (id), 1 (nombre), 2 (precio), 3 (categoria), 4 (descripcion), 5 (imagen)
const COLUMN_INDICES = {
    id: 0,
    name: 1,
    price: 2,
    category: 3,
    description: 4,
    image: 5
};

let menuData = [];
let cart = [];

const menuFilePath = 'menu.csv'; 

// Referencias del DOM
const categoriesList = document.getElementById('categories-list');
const productsList = document.getElementById('products-list');
const cartCount = document.getElementById('cart-count');
const openCartBtn = document.getElementById('open-cart-btn');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const cartItemsContainer = document.getElementById('cart-items');
const cartSubtotalSpan = document.getElementById('cart-subtotal');
const cartTotalSpan = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const checkoutModal = document.getElementById('checkout-modal');
const checkoutForm = document.getElementById('checkout-form');
const cancelCheckoutBtn = document.getElementById('cancel-checkout-btn');
const checkoutSubmitBtn = document.querySelector('.checkout-submit-btn');

// ====================================
// 2. UTILIDADES DEL SISTEMA
// ====================================

// Función de utilidad para formato de moneda (COP)
const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(price);
};

// ====================================
// 3. LECTURA Y PARSEO DEL CSV
// ====================================

// Función ULTRA-ROBUSTA para parsear CSV 
function parseCSV(csvText) {
    // Maneja saltos de línea de Windows y Unix
    const lines = csvText.trim().split(/\r?\n/).filter(line => line.trim() !== '');
    if (lines.length <= 1) return []; // Retorna vacío si solo hay encabezado o nada
    
    // Ignorar la cabecera (primera línea)
    const dataLines = lines.slice(1);
    const parsedData = [];

    dataLines.forEach(line => {
        // Expresión regular para separar celdas de CSV (maneja celdas con comas o vacías)
        const cells = line.match(/(".*?"|[^,]*)(?=\s*,|\s*$)/g);
        
        // Verifica que la fila tenga al menos 6 columnas
        if (cells && cells.length >= 6) { 
            const item = {};
            
            // Limpiar comillas y espacios de las celdas
            const cleanCells = cells.map(cell => cell ? cell.trim().replace(/^"|"$/g, '') : '');
            
            item.id = cleanCells[COLUMN_INDICES.id];
            item.name = cleanCells[COLUMN_INDICES.name];
            
            // Limpia el formato de precio (quita puntos de miles, ej: 15.000 -> 15000)
            const priceString = cleanCells[COLUMN_INDICES.price];
            item.price = parseFloat(priceString.replace(/\./g, '').replace(/,/g, '')); 
            
            item.category = cleanCells[COLUMN_INDICES.category];
            item.description = cleanCells[COLUMN_INDICES.description] === '(Vacio)' || cleanCells[COLUMN_INDICES.description] === '' ? '' : cleanCells[COLUMN_INDICES.description];
            item.image = cleanCells[COLUMN_INDICES.image];

            // Solo agrega el producto si tiene un precio válido
            if (!isNaN(item.price) && item.price > 0) {
                parsedData.push(item);
            }
        }
    });

    return parsedData;
}

// ====================================
// 4. CARGA DEL MENÚ
// ====================================

async function loadMenu() {
    try {
        const response = await fetch(menuFilePath);
        if (!response.ok) {
            // Error de red, 404, o CORS (la razón más probable)
            throw new Error(`Error al cargar el archivo: ${response.statusText}`);
        }
        const csvText = await response.text();
        menuData = parseCSV(csvText);
        
        if (menuData.length > 0) {
            renderCategories(menuData);
            renderProducts(menuData);
        } else {
            productsList.innerHTML = `
                <div style="text-align: center; padding: 40px; color: #cc0000; background-color: #ffe0e0; border-radius: 8px;">
                    <h3>🚨 Error: Menú Vacío.</h3>
                    <p>El archivo <strong>menu.csv</strong> se cargó, pero no se pudo leer ningún producto válido.</p>
                    <p><strong>Verifica:</strong> 1. Que tengas al menos 6 columnas en cada fila. 2. Que la columna de Precio (C) solo tenga números.</p>
                </div>`;
        }
    } catch (error) {
        console.error('Error en la carga del menú:', error);
        // Este es el mensaje que indica un problema de servidor o ruta.
        productsList.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #cc0000; background-color: #ffe0e0; border-radius: 8px;">
                <h3>❌ ¡Error Crítico de Carga!</h3>
                <p>No se pudo acceder al archivo <strong>menu.csv</strong>. La razón más común es que el navegador bloquea la lectura.</p>
                <p><strong>Solución:</strong></p>
                <ol style="list-style: decimal inside; padding: 10px; text-align: left; display: inline-block;">
                    <li>Asegúrate de que <strong>menu.csv</strong> esté en la misma carpeta que <strong>index.html</strong>.</li>
                    <li>Si lo abres con <strong>file://</strong> (desde tu disco duro), usa una extensión como <strong>Live Server</strong> en VS Code para simular un servidor web.</li>
                </ol>
            </div>`;
    }
}

// ====================================
// 5. RENDERIZADO (PRODUCTOS Y CATEGORÍAS)
// ====================================

function renderCategories(data) {
    const categories = [...new Set(data.map(item => item.category))].filter(Boolean);
    
    // Botón 'Todos'
    let html = `<li class="category-item">
        <button class="category-btn active" data-category="all">Todos</button>
    </li>`;

    // Botones por categoría
    html += categories.map(category => `
        <li class="category-item">
            <button class="category-btn" data-category="${category}">${category}</button>
        </li>
    `).join('');
    
    categoriesList.innerHTML = html;

    // Asignar eventos de click a los botones de categoría
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const selectedCategory = e.target.dataset.category;
            filterProducts(selectedCategory);
            
            // Toggle de la clase 'active'
            document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
}

function filterProducts(category) {
    let filteredData = menuData;
    if (category !== 'all') {
        filteredData = menuData.filter(item => item.category === category);
    }
    renderProducts(filteredData);
}

function renderProducts(data) {
    productsList.innerHTML = data.map(item => `
        <div class="product-card" data-id="${item.id}">
            <img src="${item.image}" alt="${item.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${item.name}</h3>
                ${item.description ? `<p class="product-description">${item.description}</p>` : '<p class="product-description">Disponible en la carta.</p>'}
                <p class="product-price">${formatPrice(item.price)}</p>
                <button class="add-to-cart-btn" data-id="${item.id}">Añadir al Pedido</button>
            </div>
        </div>
    `).join('');
    
    // Asignar eventos de click a los botones "Añadir al Pedido"
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = e.target.dataset.id;
            addItemToCart(productId);
        });
    });
}

// ====================================
// 6. LÓGICA DEL CARRITO
// ====================================

function addItemToCart(productId) {
    const product = menuData.find(item => item.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartDisplay();
    // Añadir animación al contador
    cartCount.classList.remove('animate');
    void cartCount.offsetWidth; // Trigger reflow
    cartCount.classList.add('animate');
}

function updateItemQuantity(productId, change) {
    const itemIndex = cart.findIndex(item => item.id === productId);

    if (itemIndex > -1) {
        cart[itemIndex].quantity += change;
        
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1); // Eliminar si la cantidad es cero o menos
        }
        updateCartDisplay();
    }
}

function calculateTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    // Asumimos envío gratuito para este ejemplo
    const shipping = 0; 
    const total = subtotal + shipping;
    return { subtotal, shipping, total };
}

function updateCartDisplay() {
    const { subtotal, total } = calculateTotals();
    
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartSubtotalSpan.textContent = formatPrice(subtotal);
    cartTotalSpan.textContent = formatPrice(total);
    checkoutBtn.disabled = cart.length === 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align: center; color: #999;">Tu pedido está vacío. ¡Añade algo delicioso!</p>';
    } else {
        renderCartItems();
    }
}

function renderCartItems() {
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="item-details">
                <strong>${item.name}</strong>
                <small>${formatPrice(item.price)} c/u</small>
            </div>
            <div class="item-quantity-controls">
                <button data-id="${item.id}" data-change="-1">-</button>
                <span>${item.quantity}</span>
                <button data-id="${item.id}" data-change="1">+</button>
            </div>
        </div>
    `).join('');

    // Asignar eventos a los botones de cantidad (+ / -)
    cartItemsContainer.querySelectorAll('.item-quantity-controls button').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = e.target.dataset.id;
            const change = parseInt(e.target.dataset.change);
            updateItemQuantity(productId, change);
        });
    });
}

// ====================================
// 7. LÓGICA DE CHECKOUT Y WHATSAPP
// ====================================

function buildWhatsAppMessage(name, phone, address, payment) {
    const { total } = calculateTotals();
    
    let message = `¡Hola! Me gustaría hacer un pedido:\n\n`;
    message += `*Cliente:* ${name}\n`;
    message += `*Teléfono:* ${phone}\n`;
    message += `*Dirección:* ${address}\n`;
    message += `*Pago:* ${payment}\n\n`;
    message += `*--- Detalle del Pedido ---*\n`;

    cart.forEach(item => {
        const lineTotal = item.price * item.quantity;
        message += `${item.quantity}x ${item.name} (${formatPrice(lineTotal)})\n`;
    });

    message += `\n*TOTAL:* ${formatPrice(total)}`;
    
    // Codificar el mensaje para la URL de WhatsApp
    return encodeURIComponent(message);
}

checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('client-name').value;
    const phone = document.getElementById('client-phone').value;
    const address = document.getElementById('client-address').value;
    const payment = document.getElementById('payment-method').value;

    const waMessage = buildWhatsAppMessage(name, phone, address, payment);
    
    // Reemplaza el número a continuación con tu número de WhatsApp real (con código de país)
    const whatsappNumber = '573111234567'; 
    const waUrl = `https://wa.me/${whatsappNumber}?text=${waMessage}`;

    window.open(waUrl, '_blank');
    
    // Cerrar y resetear
    checkoutModal.close();
    // Opcional: limpiar carrito después de enviar.
    // cart = [];
    // updateCartDisplay();
});


// ====================================
// 8. EVENT LISTENERS GENERALES
// ====================================

// Abrir y cerrar el Sidebar
openCartBtn.addEventListener('click', () => {
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('open');
});

closeCartBtn.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('open');
});

cartOverlay.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('open');
});

// Abrir Modal de Checkout
checkoutBtn.addEventListener('click', () => {
    if (cart.length > 0) {
        checkoutModal.showModal();
    }
});

cancelCheckoutBtn.addEventListener('click', () => {
    checkoutModal.close();
});

// ====================================
// 9. INICIO
// ====================================

document.addEventListener('DOMContentLoaded', () => {
    loadMenu();
    updateCartDisplay(); // Inicializa el contador en 0
});