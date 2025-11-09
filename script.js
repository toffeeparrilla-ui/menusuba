// =======================================================
// CONFIGURACIÓN GLOBAL
// =======================================================

// URL Directa (Raw) de tu archivo CSV en GitHub.
const CSV_URL = 'https://raw.githubusercontent.com/toffeeparrilla-ui/menusuba/main/menu.csv'; 

// **NÚMERO DE WHATSAPP ACTUALIZADO**
// Usamos el código de país (57 para Colombia) + el número de 10 dígitos.
const WHATSAPP_NUMBER = '573219959831'; 

let allProducts = [];
let cart = []; // Array para almacenar los productos en el carrito

// Elementos del DOM
const productsListEl = document.getElementById('products-list');
const categoriesListEl = document.getElementById('categories-list');
const cartCountEl = document.getElementById('cart-count');
const cartSidebarEl = document.getElementById('cart-sidebar');
const cartOverlayEl = document.getElementById('cart-overlay');
const cartItemsEl = document.getElementById('cart-items');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const cartShippingEl = document.getElementById('cart-shipping');
const cartTotalEl = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const closeCartBtn = document.getElementById('close-cart-btn');
const openCartBtn = document.getElementById('open-cart-btn');

const PLACEHOLDER_IMAGE = 'assets/placeholder.jpg'; 
const SHIPPING_COST = 5000; // Costo de envío (ejemplo: $ 5.000 COP)

// =======================================================
// 1. UTILIDADES Y PARSEO
// =======================================================

/**
 * Convierte una cadena de precio (ej: "35.900") a un número entero (ej: 35900).
 */
function priceStringToNumber(priceString) {
    if (!priceString) return 0;
    // Remueve separadores de miles y convierte a número
    return parseFloat(priceString.replace(/[$. ]/g, '')) || 0;
}

/**
 * Formatea un número a formato de moneda local (COP).
 */
function formatPrice(number) {
    return new Intl.NumberFormat('es-CO', { 
        style: 'currency', 
        currency: 'COP', 
        minimumFractionDigits: 0 
    }).format(number);
}

/**
 * Función robusta para parsear líneas CSV.
 */
function parseCsv(csvText) {
    const products = [];
    const lines = csvText.trim().split('\r\n').slice(1);
    
    lines.forEach(line => {
        // Regex para manejar campos que contienen comas si están entre comillas dobles
        const rawFields = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        
        if (rawFields.length < 6) return; 

        const fields = rawFields.map(f => f.trim().replace(/^"|"$/g, ''));
        
        // Lógica: Si la columna imagen es (Vacio) o está vacía, es null
        const productImage = (fields[5] === '(Vacio)' || !fields[5]) ? null : fields[5];
        
        const product = {
            id: fields[0],           
            name: fields[1],         
            priceText: fields[2],   
            price: priceStringToNumber(fields[2]), 
            category: fields[3],     
            description: fields[4] === '(Vacio)' ? '' : fields[4], 
            image: productImage 
        };
        
        if (product.name) {
            products.push(product);
        }
    });
    
    return products;
}

// =======================================================
// 2. CARGA DE DATOS Y RENDER INICIAL
// =======================================================

async function fetchCsvData() {
    productsListEl.innerHTML = '<p class="loading-message">Cargando menú...</p>';
    
    try {
        const response = await fetch(CSV_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}.`);
        }
        const csvText = await response.text();
        allProducts = parseCsv(csvText);
        
        if (allProducts.length > 0) {
            renderCategories(allProducts);
            renderProducts(allProducts, 'all');
            
            const allButton = document.querySelector(`[data-category="all"]`);
            if(allButton) allButton.classList.add('active');
            
            // Listener de evento delegado para añadir al carrito
            productsListEl.addEventListener('click', handleAddToCartClick);
        } else {
            productsListEl.innerHTML = '<p class="error-message">No se encontraron productos.</p>';
        }

    } catch (error) {
        console.error("Error al cargar o parsear el CSV:", error);
        productsListEl.innerHTML = `<p class="error-message">Error al cargar el menú: ${error.message}</p>`;
    }
}

// =======================================================
// 3. RENDERIZADO DE PRODUCTOS Y CATEGORÍAS
// =======================================================

function renderCategories(products) {
    const categories = new Set(products.map(p => p.category));
    categoriesListEl.innerHTML = '';
    
    const allBtn = createCategoryButton('Todos', 'all');
    categoriesListEl.appendChild(allBtn);

    categories.forEach(category => {
        const li = createCategoryButton(category, category);
        categoriesListEl.appendChild(li);
    });

    categoriesListEl.addEventListener('click', handleCategoryFilter);
}

function createCategoryButton(text, dataCategory) {
    const button = document.createElement('button');
    button.className = 'category-btn';
    button.textContent = text;
    button.dataset.category = dataCategory;

    const li = document.createElement('li');
    li.appendChild(button);
    return li;
}

function handleCategoryFilter(event) {
    const button = event.target.closest('.category-btn');
    if (!button) return;

    const selectedCategory = button.dataset.category;

    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    let filteredProducts = (selectedCategory === 'all')
        ? allProducts
        : allProducts.filter(p => p.category === selectedCategory);

    renderProducts(filteredProducts, selectedCategory);
}


function renderProducts(products, currentCategory) {
    productsListEl.innerHTML = ''; 

    if (products.length === 0) {
        productsListEl.innerHTML = `<p class="error-message">No hay productos en la categoría: ${currentCategory}</p>`;
        return;
    }

    products.forEach(product => {
        const card = document.createElement('div');
        
        const formattedPrice = formatPrice(product.price); 
        
        const descriptionHtml = product.description 
            ? `<p class="product-description">${product.description}</p>`
            : ''; 
        
        let imageHtml = '';
        card.className = 'product-card';

        if (product.image) {
            imageHtml = `
                <img 
                    src="${product.image}" 
                    alt="${product.name}" 
                    class="product-image" 
                    onerror="this.onerror=null;this.src='${PLACEHOLDER_IMAGE}';"
                >
            `;
        } else {
            // Aplica la clase especial si no hay imagen
            card.classList.add('product-card-no-image');
        }

        card.innerHTML = `
            ${imageHtml}
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                ${descriptionHtml}
                <span class="product-price">${formattedPrice}</span>
                
                <button 
                    class="add-to-cart-btn" 
                    data-id="${product.id}"
                    data-name="${product.name}"
                    data-price="${product.price}" 
                    data-price-text="${product.priceText}"
                    data-image="${product.image || ''}"
                >
                    🛒 Añadir al Carrito
                </button>
            </div>
        `;
        productsListEl.appendChild(card);
    });
}

// =======================================================
// 4. LÓGICA DEL CARRITO
// =======================================================

function handleAddToCartClick(event) {
    const button = event.target.closest('.add-to-cart-btn');
    if (!button) return;

    const productId = button.dataset.id;
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        const newItem = {
            id: productId,
            name: button.dataset.name,
            price: parseFloat(button.dataset.price),
            priceText: button.dataset.priceText,
            image: button.dataset.image,
            quantity: 1,
            note: '' 
        };
        cart.push(newItem);
    }
    
    updateCart();
    openCart();
}

function renderCartItems() {
    cartItemsEl.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsEl.innerHTML = '<p class="empty-cart-message">Tu carrito está vacío.</p>';
        return;
    }

    cart.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        
        itemEl.innerHTML = `
            <div class="item-details">
                <p class="item-name">${item.name}</p>
                <small>${formatPrice(item.price)} x ${item.quantity}</small>
            </div>
            <div class="item-quantity-controls">
                <button data-id="${item.id}" data-action="decrease">-</button>
                <span>${item.quantity}</span>
                <button data-id="${item.id}" data-action="increase">+</button>
            </div>
        `;
        cartItemsEl.appendChild(itemEl);
    });
}

function handleCartItemAction(event) {
    const button = event.target.closest('button');
    if (!button) return;
    
    const id = button.dataset.id;
    const action = button.dataset.action;
    const itemIndex = cart.findIndex(item => item.id === id);

    if (itemIndex === -1) return;

    if (action === 'increase') {
        cart[itemIndex].quantity++;
    } else if (action === 'decrease') {
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity--;
        } else {
            cart.splice(itemIndex, 1);
        }
    }
    
    updateCart();
}

function updateCart() {
    let subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    let shipping = 0;
    let total = subtotal;

    if (subtotal > 0) {
        shipping = SHIPPING_COST;
        total += SHIPPING_COST;
    }
    

    // Actualizar elementos
    cartCountEl.textContent = totalItems;
    cartSubtotalEl.textContent = formatPrice(subtotal);
    cartShippingEl.textContent = formatPrice(shipping);
    cartTotalEl.textContent = formatPrice(total);
    checkoutBtn.disabled = cart.length === 0;

    renderCartItems();
}

function openCart() {
    cartSidebarEl.classList.add('open');
    cartOverlayEl.classList.add('open');
}

function closeCart() {
    cartSidebarEl.classList.remove('open');
    cartOverlayEl.classList.remove('open');
}

/**
 * FUNCIÓN PRINCIPAL DE ENVÍO POR WHATSAPP
 */
function handleCheckout() {
    if (cart.length === 0) return;

    // 1. Construir el encabezado del mensaje
    let message = `¡Hola Toffe! 👋 Tengo un nuevo pedido desde el Menú Digital.\n\n`;
    message += `*DETALLES DEL PEDIDO*\n`;
    message += `---------------------------------\n`;

    // 2. Listar los productos
    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.quantity}x ${item.name} (${formatPrice(item.price * item.quantity)})\n`;
    });
    
    // 3. Añadir resumen de totales
    message += `---------------------------------\n`;
    // Nota: Leemos los totales formateados directamente de los elementos del DOM
    message += `Subtotal: ${cartSubtotalEl.textContent}\n`;
    message += `Envío: ${cartShippingEl.textContent}\n`;
    message += `*TOTAL A PAGAR: ${cartTotalEl.textContent}*\n\n`;

    // 4. Instrucciones para el cliente (lo que el cliente debe completar)
    message += `*DATOS PARA EL ENVÍO:*\n`;
    message += `Nombre: (Escribe tu nombre aquí)\n`;
    message += `Teléfono: (Escribe tu teléfono aquí)\n`;
    message += `Dirección: (Escribe tu dirección exacta aquí)\n`;
    message += `Método de Pago: (Escribe Efectivo, Datafono o Transferencia)\n`;
    
    // 5. Codificar el mensaje para la URL
    const encodedMessage = encodeURIComponent(message);
    
    // 6. Generar el enlace de WhatsApp
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // 7. Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, '_blank');
}

// =======================================================
// 5. INICIALIZACIÓN Y EVENTOS GLOBALES
// =======================================================

// Eventos para abrir y cerrar el carrito
openCartBtn.addEventListener('click', openCart);
closeCartBtn.addEventListener('click', closeCart);
cartOverlayEl.addEventListener('click', closeCart);

// Listener para modificar items en el carrito (delegación)
cartItemsEl.addEventListener('click', handleCartItemAction);

// Evento para finalizar el pedido: Llama a la función de WhatsApp
checkoutBtn.addEventListener('click', handleCheckout);


document.addEventListener('DOMContentLoaded', () => {
    fetchCsvData();
    updateCart(); 
});