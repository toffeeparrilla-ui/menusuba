// ====================================
// 1. CONFIGURACIÓN
// ====================================

let cart = [];

// Cargamos los datos desde la variable global MENU_DATA (del archivo data.js)
let menuData = typeof MENU_DATA !== 'undefined' ? MENU_DATA : [];

// Elementos del DOM
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

const PLACEHOLDER_IMAGE = 'assets/placeholder.jpg'; 

// ====================================
// 2. UTILIDADES
// ====================================

const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(price);
};

// ====================================
// 3. INICIO Y RENDERIZADO
// ====================================

function initMenu() {
    if (menuData.length > 0) {
        renderCategories(menuData);
        renderProducts(menuData, 'all');
    } else {
        productsList.innerHTML = `<div style="text-align: center; padding: 20px;"><h3>No se encontraron productos.</h3><p>Verifica el archivo data.js</p></div>`;
    }
}

function renderCategories(data) {
    const categories = [...new Set(data.map(item => item.category))].filter(Boolean);
    
    let html = `<li class="category-item"><button class="category-btn active" data-category="all">Todos</button></li>`;
    
    html += categories.map(cat => `
        <li class="category-item">
            <button class="category-btn" data-category="${cat}">${cat}</button>
        </li>
    `).join('');
    
    categoriesList.innerHTML = html;

    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderProducts(menuData, e.target.dataset.category);
        });
    });
}

function renderProducts(data, category) {
    let filtered = category === 'all' ? data : data.filter(p => p.category === category);
    
    productsList.innerHTML = filtered.map(item => {
        let imgHtml = item.image ? 
            `<img src="${item.image}" alt="${item.name}" class="product-image" onerror="this.src='${PLACEHOLDER_IMAGE}'">` : 
            `<div class="product-card-no-image"></div>`;

        return `
        <div class="product-card">
            ${imgHtml}
            <div class="product-info">
                <h3 class="product-name">${item.name}</h3>
                <p class="product-description">${item.description || ''}</p>
                <p class="product-price">${formatPrice(item.price)}</p>
                <button class="add-to-cart-btn" data-id="${item.id}">Añadir al Pedido</button>
            </div>
        </div>`;
    }).join('');

    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => addItemToCart(parseInt(e.target.dataset.id)));
    });
}

// ====================================
// 4. LÓGICA DEL CARRITO
// ====================================

function addItemToCart(id) {
    const product = menuData.find(p => p.id === id);
    if (!product) return;

    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
    
    // Animación
    cartCount.classList.remove('animate');
    void cartCount.offsetWidth;
    cartCount.classList.add('animate');
}

function updateCart() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal; // + envío si aplica

    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartSubtotalSpan.textContent = formatPrice(subtotal);
    cartTotalSpan.textContent = formatPrice(total);
    checkoutBtn.disabled = cart.length === 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align: center; color: #999;">Tu pedido está vacío.</p>';
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="item-details"><strong>${item.name}</strong><br><small>${formatPrice(item.price)} c/u</small></div>
                <div class="item-quantity-controls">
                    <button onclick="changeQty(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQty(${item.id}, 1)">+</button>
                </div>
            </div>
        `).join('');
    }
}

// Función global para ser llamada desde el HTML generado
window.changeQty = (id, delta) => {
    const index = cart.findIndex(item => item.id === id);
    if (index > -1) {
        cart[index].quantity += delta;
        if (cart[index].quantity <= 0) cart.splice(index, 1);
        updateCart();
    }
};

// ====================================
// 5. WHATSAPP
// ====================================

checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('client-name').value;
    const phone = document.getElementById('client-phone').value;
    const address = document.getElementById('client-address').value;
    const payment = document.getElementById('payment-method').value;

    let msg = `¡Hola! Quiero pedir:\n\n*Cliente:* ${name}\n*Tel:* ${phone}\n*Dir:* ${address}\n*Pago:* ${payment}\n\n*Pedido:*\n`;
    cart.forEach(item => msg += `- ${item.quantity}x ${item.name} (${formatPrice(item.price * item.quantity)})\n`);
    msg += `\n*TOTAL: ${cartTotalSpan.textContent}*`;

    const whatsappNumber = '573111234567'; // 🚨 TU NÚMERO AQUÍ
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
    checkoutModal.close();
});

// Eventos UI
openCartBtn.addEventListener('click', () => { cartSidebar.classList.add('open'); cartOverlay.classList.add('open'); });
closeCartBtn.addEventListener('click', () => { cartSidebar.classList.remove('open'); cartOverlay.classList.remove('open'); });
cartOverlay.addEventListener('click', () => { cartSidebar.classList.remove('open'); cartOverlay.classList.remove('open'); });
checkoutBtn.addEventListener('click', () => { if(cart.length > 0) checkoutModal.showModal(); });
cancelCheckoutBtn.addEventListener('click', () => checkoutModal.close());

document.addEventListener('DOMContentLoaded', () => {
    initMenu();
    updateCart();
});