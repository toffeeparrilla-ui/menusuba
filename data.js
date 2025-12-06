// ====================================
// 1. CONFIGURACIÓN
// ====================================

let cart = [];
// Carga datos de data.js
let menuData = typeof MENU_DATA !== 'undefined' ? MENU_DATA : [];

// Elementos DOM
const categoriesList = document.getElementById('categories-list');
const productsList = document.getElementById('products-list');
const searchInput = document.getElementById('search-input'); // 🔍
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
        productsList.innerHTML = `<div style="text-align: center; padding: 40px;"><h3>No se encontraron datos.</h3><p>Verifica data.js</p></div>`;
    }
}

function renderCategories(data) {
    const categories = [...new Set(data.map(item => item.category))].filter(Boolean);
    let html = `<li class="category-item"><button class="category-btn active" data-category="all">Todos</button></li>`;
    html += categories.map(cat => `<li class="category-item"><button class="category-btn" data-category="${cat}">${cat}</button></li>`).join('');
    categoriesList.innerHTML = html;

    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            // Limpiar buscador al cambiar categoría
            searchInput.value = ''; 
            renderProducts(menuData, e.target.dataset.category);
        });
    });
}

function renderProducts(data, category) {
    const filtered = category === 'all' ? data : data.filter(p => p.category === category);
    renderList(filtered);
}

// Función auxiliar para pintar la lista
function renderList(items) {
    if (items.length === 0) {
        productsList.innerHTML = `<div style="text-align: center; padding: 20px; color: #666; width: 100%;"><p>No se encontraron productos.</p></div>`;
        return;
    }

    productsList.innerHTML = items.map(item => {
        const imgHtml = item.image && item.image.trim() !== '' ? 
            `<img src="${item.image}" alt="${item.name}" class="product-image" loading="lazy" onerror="this.src='${PLACEHOLDER_IMAGE}'">` : 
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
// 4. LÓGICA DE BÚSQUEDA 🔍
// ====================================
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase().trim();
    
    // Si borra todo, volvemos a mostrar "Todos"
    if (term === '') {
        document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector('[data-category="all"]').classList.add('active');
        renderProducts(menuData, 'all');
        return;
    }

    // Desactivar botones de categoría visualmente
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));

    // Filtrar por nombre o descripción
    const results = menuData.filter(item => 
        item.name.toLowerCase().includes(term) || 
        (item.description && item.description.toLowerCase().includes(term))
    );

    renderList(results);
});

// ====================================
// 5. CARRITO
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
    cartCount.classList.remove('animate');
    void cartCount.offsetWidth;
    cartCount.classList.add('animate');
}

function updateCart() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartSubtotalSpan.textContent = formatPrice(total);
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

window.changeQty = (id, delta) => {
    const index = cart.findIndex(item => item.id === id);
    if (index > -1) {
        cart[index].quantity += delta;
        if (cart[index].quantity <= 0) cart.splice(index, 1);
        updateCart();
    }
};

// ====================================
// 6. WHATSAPP
// ====================================
checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('client-name').value;
    const phone = document.getElementById('client-phone').value;
    const address = document.getElementById('client-address').value;
    const payment = document.getElementById('payment-method').value;

    let msg = `¡Hola! Pedido de *${name}*:\nTel: ${phone}\nDir: ${address}\nPago: ${payment}\n\n*Pedido:*\n`;
    cart.forEach(item => msg += `- ${item.quantity}x ${item.name} (${formatPrice(item.price * item.quantity)})\n`);
    msg += `\n*TOTAL: ${cartTotalSpan.textContent}*`;

    // 🚨 REEMPLAZA ESTE NÚMERO
    const whatsappNumber = '573219959831'; 
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
