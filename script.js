// ====================================
// 1. CONFIGURACIÓN Y VARIABLES
// ====================================

let cart = [];

// Verificamos si MENU_DATA ya cargó desde el archivo data.js
let menuData = typeof MENU_DATA !== 'undefined' ? MENU_DATA : [];

// Referencias a elementos del HTML (DOM)
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

// Imagen por defecto si alguna falla o no existe
const PLACEHOLDER_IMAGE = 'assets/placeholder.jpg'; 

// ====================================
// 2. UTILIDADES
// ====================================

// Formato de moneda para Colombia (COP)
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
        productsList.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <h3>No se encontraron productos.</h3>
                <p>Asegúrate de que el archivo <strong>data.js</strong> esté enlazado correctamente en el HTML antes que este script.</p>
            </div>`;
    }
}

// Renderizar los botones de las categorías
function renderCategories(data) {
    const categories = [...new Set(data.map(item => item.category))].filter(Boolean);
    
    // Botón "Todos"
    let html = `<li class="category-item"><button class="category-btn active" data-category="all">Todos</button></li>`;
    
    // Botones dinámicos
    html += categories.map(cat => `
        <li class="category-item">
            <button class="category-btn" data-category="${cat}">${cat}</button>
        </li>
    `).join('');
    
    categoriesList.innerHTML = html;

    // Eventos de click para filtrar
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Quitar clase active de todos y ponerla al actual
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            // Filtrar productos
            const category = e.target.dataset.category;
            renderProducts(menuData, category);
        });
    });
}

// Renderizar las tarjetas de productos
function renderProducts(data, category) {
    // Filtrar por categoría seleccionada
    const filtered = category === 'all' ? data : data.filter(p => p.category === category);
    
    productsList.innerHTML = filtered.map(item => {
        // Lógica de imagen: Si hay ruta, usa img tag. Si no, usa div vacío o placeholder.
        // 💡 Agregamos loading="lazy" para optimizar velocidad
        let imgHtml = '';
        
        if (item.image && item.image.trim() !== '' && item.image !== '(Vacio)') {
            imgHtml = `
                <img 
                    src="${item.image}" 
                    alt="${item.name}" 
                    class="product-image" 
                    loading="lazy" 
                    onerror="this.onerror=null; this.src='${PLACEHOLDER_IMAGE}';"
                >
            `;
        } else {
            imgHtml = `<div class="product-card-no-image"></div>`;
        }

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

    // Reactivar eventos de los botones "Añadir"
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            addItemToCart(id);
        });
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
    
    // Pequeña animación en el icono del carrito
    cartCount.classList.remove('animate');
    void cartCount.offsetWidth; // Reinicia la animación
    cartCount.classList.add('animate');
}

// Función para botones + y - dentro del carrito
// Se declara global (window) para que funcione con el onclick del HTML generado
window.changeQty = (id, delta) => {
    const index = cart.findIndex(item => item.id === id);
    if (index > -1) {
        cart[index].quantity += delta;
        
        // Si la cantidad llega a 0, eliminamos el producto
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        updateCart();
    }
};

function updateCart() {
    // Calcular totales
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal; // Aquí podrías sumar envío si quisieras

    // Actualizar textos
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartSubtotalSpan.textContent = formatPrice(subtotal);
    cartTotalSpan.textContent = formatPrice(total);
    
    // Habilitar/Deshabilitar botón de pedir
    checkoutBtn.disabled = cart.length === 0;

    // Renderizar lista del carrito
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align: center; color: #999; margin-top: 20px;">Tu pedido está vacío.</p>';
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="item-details">
                    <strong>${item.name}</strong><br>
                    <small>${formatPrice(item.price)} c/u</small>
                </div>
                <div class="item-quantity-controls">
                    <button onclick="changeQty(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQty(${item.id}, 1)">+</button>
                </div>
            </div>
        `).join('');
    }
}

// ====================================
// 5. FINALIZAR PEDIDO (WHATSAPP)
// ====================================

checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que la página se recargue
    
    const name = document.getElementById('client-name').value;
    const phone = document.getElementById('client-phone').value;
    const address = document.getElementById('client-address').value;
    const payment = document.getElementById('payment-method').value;

    // Construir mensaje de WhatsApp
    let msg = `¡Hola Toffe! 👋 Quiero realizar el siguiente pedido:\n\n`;
    msg += `*Cliente:* ${name}\n`;
    msg += `*Teléfono:* ${phone}\n`;
    msg += `*Dirección:* ${address}\n`;
    msg += `*Método de Pago:* ${payment}\n\n`;
    msg += `*--- DETALLE DEL PEDIDO ---*\n`;

    cart.forEach(item => {
        const totalLine = item.price * item.quantity;
        msg += `- ${item.quantity}x ${item.name} (${formatPrice(totalLine)})\n`;
    });

    msg += `\n*TOTAL A PAGAR: ${cartTotalSpan.textContent}*`;

    // Reemplaza este número con el tuyo (Código país + número)
    const whatsappNumber = '573219959831'; 
    
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;

    window.open(waUrl, '_blank');
    
    checkoutModal.close();
    // Opcional: Limpiar carrito
    // cart = []; updateCart();
});

// ====================================
// 6. EVENTOS DE INTERFAZ (UI)
// ====================================

// Abrir carrito
openCartBtn.addEventListener('click', () => {
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('open');
});

// Cerrar carrito (botón X)
closeCartBtn.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('open');
});

// Cerrar carrito (clic afuera)
cartOverlay.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('open');
});

// Abrir Modal de Checkout
checkoutBtn.addEventListener('click', () => {
    if (cart.length > 0) {
        // Cerramos el sidebar para ver mejor el modal
        cartSidebar.classList.remove('open');
        cartOverlay.classList.remove('open');
        checkoutModal.showModal();
    }
});

// Cancelar/Cerrar Modal
cancelCheckoutBtn.addEventListener('click', () => {
    checkoutModal.close();
});

// ====================================
// 7. INICIALIZACIÓN
// ====================================

document.addEventListener('DOMContentLoaded', () => {
    initMenu();
    updateCart(); 
});