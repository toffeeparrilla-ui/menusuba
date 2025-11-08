// ===============================================
// 1. DATOS DEL MENÚ
// ===============================================
const data = [
    // La estructura de los datos del CSV (id, nombre, precio, categoria, descripcion, imagen)
    // NOTA: Los precios están como strings ("35.900") para mantener los puntos de miles, 
    // y se limpian para los cálculos en la función `calcularTotal()`.

    // A La Marinera
    { id: 1, nombre: "Bagre en Salsa Criolla", precio: "35.900", categoria: "A La Marinera", descripcion: "Acompañado de Arroz, Ensalada de la casa, patacon y yuca frita", imagen: "assets/imagenes/A La Marinera/img13.jpg", formato: "card" },
    { id: 2, nombre: "Filete de Merlusa", precio: "25.900", categoria: "A La Marinera", descripcion: "Pidelo Con ensalada de la casa o Vegetales al Wok", imagen: "assets/imagenes/A La Marinera/img9.jpg", formato: "card" },
    { id: 3, nombre: "Mini Trucha", precio: "25.900", categoria: "A La Marinera", descripcion: "Pidelo Con ensalada de la casa o Vegetales al Wok", imagen: "assets/imagenes/A La Marinera/img8.jpg", formato: "card" },
    { id: 4, nombre: "Salmon", precio: "45.000", categoria: "A La Marinera", descripcion: "Pidelo en salsa de Maracuya o al Ajillo, Acompañado de ensalada de la casa, con pure de papa o papa a la francesa", imagen: "assets/imagenes/A La Marinera/img139.jpg", formato: "card" },
    { id: 5, nombre: "Trucha al ajillo", precio: "35.900", categoria: "A La Marinera", descripcion: "O tambien Pidelo en salsa de champiñones Acompañado de Ensalada de la casa o papa fracesa", imagen: "assets/imagenes/A La Marinera/img12.jpg", formato: "card" },
    
    // Combos Teriyaki
    { id: 6, nombre: "Teriyaki Clásico", precio: "66.900", categoria: "Combos Teriyaki", descripcion: "5 porciones con Lomo de res. trozos de pechuga y cerdo, con vegetales al wok y arroz yakimeshi", imagen: "assets/imagenes/Combos Teriyaki/img223.jpg", formato: "card" },
    { id: 7, nombre: "Teriyaki Familiar", precio: "109.900", categoria: "Combos Teriyaki", descripcion: "10 porciones con lomo de res. trozos de pechuga y cerdo, con vegetales al wok y arroz yakimeshi", imagen: "assets/imagenes/Combos Teriyaki/img223.jpg", formato: "card" },

    // Desayunos (Formato de Lista)
    { id: 8, nombre: "Calentado Campesino", precio: "14.900", categoria: "Desayunos", descripcion: "Con arepa. queso, huevos al gusto y pan", imagen: "assets/imagenes/Desayunos/img203.jpg", formato: "list" },
    { id: 9, nombre: "Desayuno Americano", precio: "15.900", categoria: "Desayunos", descripcion: "Con arepa. queso, huevos al gusto, salchicha, tostada y café", imagen: "assets/imagenes/Desayunos/img202.jpg", formato: "list" },
    { id: 10, nombre: "Desayuno Light", precio: "16.900", categoria: "Desayunos", descripcion: "Con yogurt con fruta. granola y pan integral", imagen: "assets/imagenes/Desayunos/img204.jpg", formato: "list" },
    { id: 11, nombre: "Omelette de Jamón y Queso", precio: "14.900", categoria: "Desayunos", descripcion: "Acompañado de tostada y café", imagen: "assets/imagenes/Desayunos/img205.jpg", formato: "list" },

    // Horneados de la Casa (Formato de Lista)
    { id: 12, nombre: "Brownie con Helado", precio: "12.900", categoria: "Horneados de la Casa", descripcion: "Delicioso brownie tibio con helado de vainilla y salsa de chocolate", imagen: "assets/imagenes/Horneados de la Casa/img189.jpg", formato: "list" },
    { id: 13, nombre: "Cheesecake de Frutos Rojos", precio: "13.900", categoria: "Horneados de la Casa", descripcion: "Base de galleta y cubierta de frutos rojos frescos", imagen: "assets/imagenes/Horneados de la Casa/img190.jpg", formato: "list" },
    { id: 14, nombre: "Tarta de Manzana", precio: "11.900", categoria: "Horneados de la Casa", descripcion: "Servida tibia con azúcar glass", imagen: "assets/imagenes/Horneados de la Casa/img191.jpg", formato: "list" },
    { id: 15, nombre: "Volcán de Chocolate", precio: "14.900", categoria: "Horneados de la Casa", descripcion: "Con centro líquido y helado de vainilla", imagen: "assets/imagenes/Horneados de la Casa/img192.jpg", formato: "list" },

    // Hamburguesas (Formato de Card)
    { id: 16, nombre: "Hamburguesa Clásica", precio: "24.900", categoria: "Hamburguesas", descripcion: "Carne de res 150gr, queso, tomate, lechuga y salsa de la casa. Acompañada de papas.", imagen: "assets/imagenes/Hamburguesas/img105.jpg", formato: "card" },
    { id: 17, nombre: "Hamburguesa Toffe", precio: "29.900", categoria: "Hamburguesas", descripcion: "Carne de res 150gr, tocineta, queso cheddar, cebolla caramelizada, y salsa especial. Acompañada de papas.", imagen: "assets/imagenes/Hamburguesas/img111.jpg", formato: "card" },
    { id: 18, nombre: "Hamburguesa Pollo Crispy", precio: "26.900", categoria: "Hamburguesas", descripcion: "Pollo apanado crujiente, queso, lechuga, tomate y mayonesa de ajo. Acompañada de papas.", imagen: "assets/imagenes/Hamburguesas/img108.jpg", formato: "card" },
    { id: 19, nombre: "Hamburguesa Vegetariana", precio: "25.900", categoria: "Hamburguesas", descripcion: "Patty de lentejas y garbanzos, aguacate, tomate, y salsa de yogur. Acompañada de papas.", imagen: "assets/imagenes/Hamburguesas/img107.jpg", formato: "card" },
    
    // Pastas De La Casa
    { id: 84, nombre: "Pasta Carbonara", precio: "28.900", categoria: "Pastas De La Casa", descripcion: "Salsa cremosa con tocineta, huevo y queso parmesano", imagen: "assets/imagenes/Pastas De La Casa/img135.jpg", formato: "list" },
    { id: 85, nombre: "Pasta Marinera", precio: "38.900", categoria: "Pastas De La Casa", descripcion: "Con langostinos, calamares y camarones en salsa blanca", imagen: "assets/imagenes/Pastas De La Casa/img131.jpg", formato: "list" },
    { id: 86, nombre: "Pasta Boloñesa", precio: "27.900", categoria: "Pastas De La Casa", descripcion: "Salsa de tomate con carne molida y queso parmesano", imagen: "assets/imagenes/Pastas De La Casa/img134.jpg", formato: "list" },
    { id: 87, nombre: "Pasta con Pesto", precio: "29.900", categoria: "Pastas De La Casa", descripcion: "Con pollo a la plancha, tomates secos y Pan de Ajo", imagen: "assets/imagenes/Pastas De La Casa/img133.jpg", formato: "list" },
    { id: 88, nombre: "Pasta de la Casa", precio: "35.900", categoria: "Pastas De La Casa", descripcion: "Con cubos de Salmón y Langostinos", imagen: "assets/imagenes/Pastas De La Casa/img123.jpg", formato: "list" },

    // Toffe Grille
    { id: 89, nombre: "Bife de Chorizo", precio: "46.900", categoria: "Toffe Grille", descripcion: "Acompañado de papa francesa. ensalada de la casa y chimichurri", imagen: "assets/imagenes/Toffe Grille/img79.jpg", formato: "card" },
    { id: 90, nombre: "Churrasco Argentino", precio: "45.900", categoria: "Toffe Grille", descripcion: "Acompañado de Queso grille Chorizo Ranchero, Ensalada de la casa. Yuca frita y Chimichurri", imagen: "assets/imagenes/Toffe Grille/img92.jpg", formato: "card" },
    { id: 91, nombre: "Costillas BBQ", precio: "36.900", categoria: "Toffe Grille", descripcion: "350gr de Deliciosas costillas de Cerdo. bañadas en salsa bbq. Acompañado de Aros de Cebolla. Papa Francesa y ensalada de la casa", imagen: "assets/imagenes/Toffe Grille/img89.jpg", formato: "card" },
    { id: 92, nombre: "Filet Mignon", precio: "48.900", categoria: "Toffe Grille", descripcion: "Tierno de lomo fino de res bañada en salsa demi-glace. Acompañado de papa francesa. ensalada de la casa", imagen: "assets/imagenes/Toffe Grille/img86.jpg", formato: "card" },
    { id: 93, nombre: "Mini Churrasco", precio: "29.900", categoria: "Toffe Grille", descripcion: "Delicioso Corte de Chata. acompañado de Yuca y chimichurri, PIDELO con Ensalada...", imagen: "assets/imagenes/Toffe Grille/img90.jpg", formato: "card" }
];

// ===============================================
// 2. CONSTANTES GLOBALES Y VARIABLES DE ESTADO
// ===============================================

const menuContainer = document.getElementById('menu-container');
const botonesFiltro = document.getElementById('botones-filtro');
const carritoItemsScroll = document.getElementById('carrito-items-scroll');
const carritoVacioMsg = document.getElementById('carrito-vacio-msg');
const finalizarPedidoBtn = document.getElementById('finalizar-pedido-btn');

const costoEnvio = 5000; // Costo de envío en COP

let carrito = [];
const categoriasUnicas = [...new Set(data.map(item => item.categoria))];

// ===============================================
// 3. FUNCIONES DE UTILIDAD
// ===============================================

/**
 * Convierte un string de precio con puntos a un número. Ej: "35.900" -> 35900
 * @param {string} precioString 
 * @returns {number}
 */
function parsePrecio(precioString) {
    return parseInt(precioString.replace('.', ''));
}

/**
 * Convierte un número a formato de precio con puntos. Ej: 35900 -> "35.900"
 * @param {number} numero 
 * @returns {string}
 */
function formatPrecio(numero) {
    return new Intl.NumberFormat('es-CO').format(numero);
}


// ===============================================
// 4. LÓGICA DE RENDERIZADO DEL MENÚ
// ===============================================

/**
 * Genera el HTML para un ítem del menú en formato de tarjeta (Card).
 * @param {object} item 
 * @returns {string}
 */
function renderItemCard(item) {
    const precioNumerico = parsePrecio(item.precio);
    return `
        <div class="menu-item" data-id="${item.id}" data-categoria="${item.categoria}" data-precio="${precioNumerico}">
            <img class="item-imagen" src="${item.imagen}" alt="${item.nombre}">
            <div class="item-info">
                <h3>${item.nombre}</h3>
                <p class="item-nota">${item.descripcion}</p>
                <p class="item-precio"> $${item.precio}</p>
                <input type="text" class="nota-input" placeholder="Nota: Sin cebolla, con extra queso, etc. (Opcional)">
                <button class="add-to-cart-btn" data-id="${item.id}">Añadir al Carrito</button>
            </div>
        </div>
    `;
}

/**
 * Genera el HTML para un ítem del menú en formato de lista.
 * @param {object} item 
 * @returns {string}
 */
function renderItemList(item) {
    const precioNumerico = parsePrecio(item.precio);
    return `
        <div class="menu-item-list" data-id="${item.id}" data-categoria="${item.categoria}" data-precio="${precioNumerico}">
            <div class="item-info-list">
                <h3>${item.nombre}</h3>
                <p class="item-nota">${item.descripcion}</p>
            </div>
            <div class="item-actions-list">
                <p class="item-precio">$${item.precio}</p>
                <input type="text" class="nota-input" placeholder="Nota (Opcional)">
                <button class="add-to-cart-btn" data-id="${item.id}">+</button>
            </div>
        </div>
    `;
}

/**
 * Renderiza el menú, aplicando filtros si es necesario.
 * @param {string} filtroCategoria 
 */
function renderMenu(filtroCategoria = 'Todos') {
    menuContainer.innerHTML = '';
    
    // Agrupar ítems por subcategoría para mantener el orden de visualización
    const itemsAgrupados = {};

    data.forEach(item => {
        if (filtroCategoria === 'Todos' || item.categoria === filtroCategoria) {
            if (!itemsAgrupados[item.categoria]) {
                itemsAgrupados[item.categoria] = [];
            }
            itemsAgrupados[item.categoria].push(item);
        }
    });

    for (const categoria in itemsAgrupados) {
        let htmlCategoria = `<h2 id="categoria-${categoria.replace(/\s/g, '-')}" class="subcategoria-title">${categoria}</h2>`;
        
        const formato = itemsAgrupados[categoria][0].formato;
        let itemsHtml = '';
        
        if (formato === 'card') {
            itemsHtml += '<div class="items-grid">';
            itemsAgrupados[categoria].forEach(item => {
                itemsHtml += renderItemCard(item);
            });
            itemsHtml += '</div>';
        } else if (formato === 'list') {
            itemsHtml += '<div class="items-list">';
            itemsAgrupados[categoria].forEach(item => {
                itemsHtml += renderItemList(item);
            });
            itemsHtml += '</div>';
        }

        menuContainer.innerHTML += htmlCategoria + itemsHtml;
    }

    // Volver a adjuntar listeners después de renderizar
    attachEventListeners();
}

/**
 * Genera los botones de filtro basados en las categorías únicas.
 */
function renderFiltros() {
    botonesFiltro.innerHTML = '';

    // Botón "Todos"
    let allBtn = document.createElement('button');
    allBtn.className = 'filtro-btn active';
    allBtn.textContent = 'Todos';
    allBtn.dataset.categoria = 'Todos';
    botonesFiltro.appendChild(allBtn);

    // Botones de Categoría
    categoriasUnicas.forEach(categoria => {
        let btn = document.createElement('button');
        btn.className = 'filtro-btn';
        btn.textContent = categoria;
        btn.dataset.categoria = categoria;
        botonesFiltro.appendChild(btn);
    });
}

// ===============================================
// 5. LÓGICA DEL CARRITO
// ===============================================

/**
 * Añade un producto al carrito.
 * @param {number} id - ID del producto.
 * @param {string} nota - Nota adicional del usuario.
 */
function addToCart(id, nota = '') {
    const item = data.find(p => p.id === id);
    if (item) {
        // Generar un ID único para la instancia del producto en el carrito (permite notas diferentes)
        const cartItemId = `${item.id}-${Date.now()}`; 
        
        carrito.push({
            cartId: cartItemId,
            id: item.id,
            nombre: item.nombre,
            precio: parsePrecio(item.precio),
            nota: nota
        });
        renderCarrito();
    }
}

/**
 * Remueve un ítem del carrito por su ID de instancia.
 * @param {string} cartId - ID único del ítem en el carrito.
 */
function removeFromCart(cartId) {
    carrito = carrito.filter(item => item.cartId !== cartId);
    renderCarrito();
}

/**
 * Renderiza el contenido del carrito (aside).
 */
function renderCarrito() {
    carritoItemsScroll.innerHTML = '';
    
    if (carrito.length === 0) {
        carritoVacioMsg.style.display = 'block';
        finalizarPedidoBtn.disabled = true;
    } else {
        carritoVacioMsg.style.display = 'none';
        finalizarPedidoBtn.disabled = false;
        
        carrito.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'pedido-item-row';
            itemElement.innerHTML = `
                <span>${item.nombre}</span>
                <span>
                    $${formatPrecio(item.precio)}
                    <button class="remove-btn" data-cart-id="${item.cartId}">x</button>
                </span>
            `;
            // Si hay nota, la muestra
            if (item.nota) {
                const notaElement = document.createElement('p');
                notaElement.className = 'item-nota-carrito';
                notaElement.textContent = `Nota: ${item.nota}`;
                itemElement.appendChild(notaElement);
            }
            carritoItemsScroll.appendChild(itemElement);
        });
        
        // Adjuntar listener a los botones de remover
        document.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                removeFromCart(e.target.dataset.cartId);
            });
        });
    }

    calcularTotal();
}

/**
 * Calcula y actualiza los totales del pedido.
 */
function calcularTotal() {
    const subtotal = carrito.reduce((sum, item) => sum + item.precio, 0);
    const totalFinal = subtotal + (carrito.length > 0 ? costoEnvio : 0);

    document.getElementById('subtotal').textContent = formatPrecio(subtotal);
    document.getElementById('costo-envio').textContent = carrito.length > 0 ? formatPrecio(costoEnvio) : '0';
    document.getElementById('total-final').textContent = formatPrecio(totalFinal);
}


// ===============================================
// 6. LÓGICA DE WHATSAPP
// ===============================================

/**
 * Genera el mensaje de WhatsApp y abre el enlace.
 */
function generarMensajeWhatsApp() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    // ⚠️ CRÍTICO: REEMPLAZA '573101234567' por tu número de WhatsApp real
    const whatsappNumber = '573101234567'; // Ejemplo: 57 310 123 4567

    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;
    const pago = document.getElementById('pago-select').value;
    const totalFinal = document.getElementById('total-final').textContent;

    if (!nombre || !telefono || !direccion) {
        alert("Por favor, completa tu Nombre, Teléfono y Dirección para finalizar el pedido.");
        return;
    }

    let itemsMessage = "--- Detalles del Pedido ---\n";
    carrito.forEach(item => {
        let notaStr = item.nota ? ` (Nota: ${item.nota})` : '';
        itemsMessage += `• ${item.nombre} - $${formatPrecio(item.precio)}${notaStr}\n`;
    });

    const mensaje = `
*🎉 ¡Nuevo Pedido de Toffe Restaurante!*

*👤 Cliente:* ${nombre}
*📞 Teléfono:* ${telefono}
*🏠 Dirección:* ${direccion}
*💳 Pago:* ${pago.charAt(0).toUpperCase() + pago.slice(1)}

${itemsMessage}

*💰 Subtotal:* $${document.getElementById('subtotal').textContent}
*🛵 Envío:* $${document.getElementById('costo-envio').textContent}
*✨ TOTAL A PAGAR:* $${totalFinal}

_Agradecemos tu pedido. ¡Lo preparamos de inmediato!_
    `.trim();

    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}


// ===============================================
// 7. LISTENERS Y EJECUCIÓN INICIAL
// ===============================================

/**
 * Adjunta todos los event listeners necesarios.
 */
function attachEventListeners() {
    // 1. Listeners para añadir al carrito
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        // Asegurarse de que el listener no se duplique
        btn.removeEventListener('click', handleAddToCart); 
        btn.addEventListener('click', handleAddToCart);
    });

    // 2. Listeners para filtros
    document.querySelectorAll('.filtro-btn').forEach(btn => {
        btn.removeEventListener('click', handleFilterClick);
        btn.addEventListener('click', handleFilterClick);
    });
}

function handleAddToCart(e) {
    const id = parseInt(e.target.dataset.id);
    // Buscar el input de nota asociado al botón (depende del formato)
    let itemElement;
    if (e.target.closest('.menu-item')) { // Formato Card
        itemElement = e.target.closest('.menu-item');
    } else if (e.target.closest('.menu-item-list')) { // Formato List
        itemElement = e.target.closest('.menu-item-list');
    }

    const notaInput = itemElement ? itemElement.querySelector('.nota-input') : null;
    const nota = notaInput ? notaInput.value.trim() : '';

    addToCart(id, nota);
}

function handleFilterClick(e) {
    document.querySelectorAll('.filtro-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    e.target.classList.add('active');
    renderMenu(e.target.dataset.categoria);
}


// Iniciar la aplicación al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    renderFiltros();
    renderMenu('Todos');
    renderCarrito(); // Inicializa los totales en 0

    finalizarPedidoBtn.addEventListener('click', generarMensajeWhatsApp);
});