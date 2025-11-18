// ====================================
// 1. CONFIGURACIÓN INICIAL Y DATOS
// ====================================

// Indices DEFINITIVOS para el CSV de 6 columnas:
// 0 (ID), 1 (Nombre), 2 (Precio), 3 (Categoría), 4 (Descripción), 5 (Imagen)
const COLUMN_INDICES = {
    ID: 0,
    NAME: 1,        
    PRICE: 2,       
    CATEGORY: 3,    
    DESCRIPTION: 4, 
    IMAGE: 5        
};

let menuData = [];
let cart = [];

const menuFilePath = 'menu.csv'; 

// Referencias del DOM (Se mantienen)
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

const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(price);
};

// ====================================
// 3. LECTURA Y PARSEO DEL CSV (ULTRA-ROBUSTO)
// ====================================

function parseCSV(csvText) {
    
    // 1. Limpieza de saltos de línea: Une los campos rotos por saltos de línea internos.
    let cleanedText = csvText.replace(/\r?\n(?!\d{1,3},)/g, ' ').trim(); 
    
    // 2. Divide en líneas.
    const lines = cleanedText.split(/\r?\n/).filter(line => line.trim() !== '');
    if (lines.length <= 1) return []; 
    
    const dataLines = lines.slice(1);
    const parsedData = [];

    // Regex robusta para celdas (maneja comillas)
    const cellRegex = /(".*?"|[^,]*)(?=\s*,|\s*$)/g;
    
    dataLines.forEach(line => {
        const cells = line.match(cellRegex);
        
        // Debe tener exactamente 6 campos
        if (!cells || cells.length !== 6) {
             return; 
        }

        const cleanCells = cells.map(cell => cell ? cell.trim().replace(/^"|"$/g, '') : '');
        
        // 💡 ASIGNACIÓN A 6 COLUMNAS
        const id = cleanCells[COLUMN_INDICES.ID];
        const name = cleanCells[COLUMN_INDICES.NAME];
        const priceString = cleanCells[COLUMN_INDICES.PRICE];
        const category = cleanCells[COLUMN_INDICES.CATEGORY];
        let description = cleanCells[COLUMN_INDICES.DESCRIPTION];
        const image = cleanCells[COLUMN_INDICES.IMAGE];

        // Precio es un número puro
        let price = parseFloat(priceString); 
        
        description = description === '(Vacio)' || description === '' ? '' : description;

        // Solo agrega el producto si tiene un precio válido
        if (!isNaN(price) && price > 0) {
            parsedData.push({
                id, name, price, category, description, image
            });
        }
    });

    return parsedData;
}

// ====================================
// 4. CARGA DEL MENÚ (Se mantiene)
// ====================================

async function loadMenu() {
    try {
        const response = await fetch(menuFilePath);
        if (!response.ok) {
            // Este es un error 404/403: El archivo no se encontró o no se pudo acceder.
            throw new Error(`Error ${response.status}: No se pudo acceder al archivo.`);
        }
        const csvText = await response.text();
        menuData = parseCSV(csvText);
        
        if (menuData.length > 0) {
            renderCategories(menuData);
            renderProducts(menuData);
        } else {
            // Este mensaje aparece si el archivo cargó, pero no se leyó nada válido.
            productsList.innerHTML = `
                <div style="text-align: center; padding: 40px; color: #cc0000; background-color: #ffe0e0; border-radius: 8px;">
                    <h3>🚨 Error: Menú Vacío.</h3>
                    <p>El código cargó el CSV, pero ninguna línea fue válida. Esto sucede si la **estructura (6 columnas)** o el **precio (solo números)** sigue siendo incorrecto en alguna fila.</p>
                </div>`;
        }
    } catch (error) {
        console.error('Error Crítico:', error);
        productsList.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #cc0000; background-color: #ffe0e0; border-radius: 8px;">
                <h3>❌ ¡Error Crítico de Carga!</h3>
                <p>No se pudo descargar el archivo <strong>menu.csv</strong>. (${error.message})</p>
            </div>`;
    }
}

// ====================================
// 5. RENDERIZADO (PRODUCTOS Y CATEGORÍAS)
// ====================================
// ... (El resto de las funciones de renderizado, carrito y checkout se mantienen igual) ...

function renderCategories(data) {
    const categories = [...new Set(data.map(item => item.category))].filter(Boolean);
    let html = `<li class="category-item">
        <button class="category-btn active" data-category="all">Todos</button>
    </li>`;
    html += categories.map(category => `
        <li class="category-item">
            <button class="category-btn" data-category="${category}">${category}</button>
        </li>
    `).join('');
    categoriesList.innerHTML = html;
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const selectedCategory = e.target.dataset.category;
            filterProducts(selectedCategory);
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
    
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = e.target.dataset.id;
            addItemToCart(productId);
        });
    });
}

// ====================================
// 6. LÓGICA DEL CARRITO (Se mantiene)
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
    cartCount.classList.remove('animate');
    void cartCount.offsetWidth;
    cartCount.classList.add('animate');
}

function updateItemQuantity(productId, change) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
        cart[itemIndex].quantity += change;
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
        updateCartDisplay();
    }
}

function calculateTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
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

    cartItemsContainer.querySelectorAll('.item-quantity-controls button').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = e.target.dataset.id;
            const change = parseInt(e.target.dataset.change);
            updateItemQuantity(productId, change);
        });
    });
}

// ====================================
// 7. LÓGICA DE CHECKOUT Y WHATSAPP (Se mantiene)
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
    
    return encodeURIComponent(message);
}

checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('client-name').value;
    const phone = document.getElementById('client-phone').value;
    const address = document.getElementById('client-address').value;
    const payment = document.getElementById('payment-method').value;

    const waMessage = buildWhatsAppMessage(name, phone, address, payment);
    
    const whatsappNumber = '573111234567'; // Reemplaza con tu número real
    const waUrl = `https://wa.me/${whatsappNumber}?text=${waMessage}`;

    window.open(waUrl, '_blank');
    checkoutModal.close();
});


// ====================================
// 8. EVENT LISTENERS GENERALES
// ====================================

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
    updateCartDisplay(); 
});