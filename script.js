// =======================================================
// 1. CONSTANTES Y DATOS DE MENÚ
// =======================================================

// URL de la aplicación web de Google Apps Script para guardar pedidos
// ESTE ES EL NUEVO URL DE TU CUENTA DE EMPRESA
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwqb3YaoRm3Qfn3krLQW4WsmjxQ8DsPpb6QTfwJH_mv2hzelbORxrZjpFRd72FRhy-v/exec'; 

// Número de WhatsApp al que se enviará el pedido
// ⚠️ RECUERDA CAMBIAR ESTO POR TU NÚMERO REAL
const numeroWhatsApp = '573246812450'; 

// Costo de envío (puede ser 0 si no aplica)
const costoEnvio = 4000; 

// Base de datos de productos (ejemplo, debe coincidir con tu CSV)
const data = [
    { id: 1, nombre: "Bagre en Salsa Criolla", precio: 35900, categoria: "A La Marinera", descripcion: "Acompañado de Arroz, Ensalada de la casa, patacon y yuca frita", imagen: "assets/imagenes/A La Marinera/img13.jpg" },
    { id: 2, nombre: "Filete de Merlusa", precio: 25900, categoria: "A La Marinera", descripcion: "Pidelo Con ensalada de la casa o Vegetales al Wok", imagen: "assets/imagenes/A La Marinera/img9.jpg" },
    { id: 15, nombre: "Bandeja Paisa", precio: 28900, categoria: "Platos Típicos", descripcion: "Arroz, huevo frito, carne, chicharrón, plátano maduro, arepa y aguacate", imagen: "assets/imagenes/Platos Típicos/img10.jpg" },
    { id: 16, nombre: "Sopa de Pollo", precio: 12000, categoria: "Sopas", descripcion: "Sopa casera con pollo, papa y verduras.", imagen: "assets/imagenes/Sopas/img11.jpg" },
    { id: 30, nombre: "Brownie con Helado", precio: 15900, categoria: "Postres", descripcion: "Delicioso brownie caliente con bola de helado de vainilla.", imagen: "assets/imagenes/Postres/img25.jpg" },
    { id: 35, nombre: "Gaseosa Coca-Cola 300ml", precio: 3500, categoria: "Bebidas", descripcion: "Bebida embotellada", imagen: "assets/imagenes/Bebidas/img40.jpg" },
    // Platos en formato compactado (ejemplo de platos con descripción larga)
    { id: 50, nombre: "Desayuno Americano Especial", precio: 22900, categoria: "Desayunos", descripcion: "Dos huevos al gusto, salchicha, tocineta crujiente, pan tostado con mantequilla y mermelada, jugo de naranja natural y café o chocolate. Esta es una descripción larga para probar el hover en CSS.", imagen: "assets/imagenes/Desayunos/img50.jpg" },
    { id: 51, nombre: "Crepe de Pollo y Champiñones", precio: 25900, categoria: "Crepes", descripcion: "Fino crepe relleno de trozos de pollo a la plancha, salsa bechamel de la casa, y champiñones frescos. Se sirve con una ensalada de la casa o papas francesas. Ideal para el almuerzo o cena ligera.", imagen: "assets/imagenes/Crepes/img51.jpg" },
    // Platos en formato LISTA (ejemplo de platos sin imagen)
    { id: 60, nombre: "Pan de Queso", precio: 3000, categoria: "Horneados", descripcion: "Frescos y esponjosos Pan de Queso.", imagen: null },
    { id: 61, nombre: "Croissant de Jamón y Queso", precio: 6500, categoria: "Horneados", descripcion: "Croissant recién horneado, relleno con jamón y queso derretido.", imagen: null },
];

// =======================================================
// 2. VARIABLES DE ESTADO Y ELEMENTOS DEL DOM
// =======================================================

let carrito = [];
let productosAgrupados = {};

// Elementos del DOM
const menuContainer = document.getElementById('menu-container');
const carritoItems = document.getElementById('carrito-items');
const subtotalElement = document.getElementById('subtotal');
const envioElement = document.getElementById('envio');
const totalElement = document.getElementById('total');
const finalizarPedidoBtn = document.getElementById('finalizar-pedido-btn');
const carritoElement = document.getElementById('carrito');
const botonesFiltroContainer = document.getElementById('botones-filtro');
const nombreInput = document.getElementById('nombre');
const telefonoInput = document.getElementById('telefono');
const direccionInput = document.getElementById('direccion');
const pagoSelect = document.getElementById('metodo-pago');
const verPedidoMovilBtn = document.getElementById('ver-pedido-movil');


// =======================================================
// 3. FUNCIONES DE UTILIDAD
// =======================================================

function formatPrecio(precio) {
    return precio.toLocaleString('es-CO');
}

function actualizarContadorMovil() {
    const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    const subtotal = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    const totalFinal = subtotal + costoEnvio;

    if (totalItems > 0) {
        verPedidoMovilBtn.style.display = 'flex';
        verPedidoMovilBtn.innerHTML = `
            <i class="fa fa-shopping-cart"></i> 
            Ver Pedido (${totalItems}) - $${formatPrecio(totalFinal)}
        `;
    } else {
        verPedidoMovilBtn.style.display = 'none';
    }
}

// Función para limpiar el formulario y el carrito (llamada después de enviar)
function limpiarFormularioYCarrito() {
    carrito = [];
    nombreInput.value = '';
    telefonoInput.value = '';
    direccionInput.value = '';
    pagoSelect.value = 'efectivo'; // Devolver al valor por defecto
    
    // Si tienes un reset en tu HTML, usa el método reset del form
    // document.getElementById('form-pedido').reset(); 
    
    renderCarrito();
}

// =======================================================
// 4. FUNCIONES DE RENDERIZADO DEL MENÚ
// =======================================================

function renderMenu(productos) {
    menuContainer.innerHTML = '';
    productosAgrupados = productos.reduce((acc, item) => {
        (acc[item.categoria] = acc[item.categoria] || []).push(item);
        return acc;
    }, {});

    for (const categoria in productosAgrupados) {
        menuContainer.innerHTML += `<h2 id="cat-${categoria.replace(/\s/g, '-')}" data-categoria="${categoria}">${categoria}</h2>`;
        
        const isCompactList = ['Horneados'].includes(categoria);
        const isCompactCard = ['Desayunos', 'Crepes'].includes(categoria);

        // Define si usa formato LISTA o CARD
        const containerClass = isCompactList ? 'items-list' : 'items-grid';
        
        let categoriaHTML = `<div class="${containerClass}">`;
        
        productosAgrupados[categoria].forEach(item => {
            if (isCompactList) {
                // RENDER LISTA COMPACTA
                const tieneImagen = item.imagen && item.imagen !== 'null';
                categoriaHTML += `
                    <div class="menu-item-list ${tieneImagen ? 'with-image' : 'no-image'}" data-id="${item.id}">
                        ${tieneImagen ? `<img src="${item.imagen}" alt="${item.nombre}" class="item-thumb">` : ''}
                        <div class="item-info-list">
                            <h3>${item.nombre}</h3>
                            <p class="item-nota">${item.descripcion}</p>
                        </div>
                        <div class="item-actions-list">
                            <p>$${formatPrecio(item.precio)}</p>
                            <input type="text" placeholder="Nota" class="nota-input list-nota-${item.id}">
                            <button onclick="agregarAlCarrito(${item.id})">+</button>
                        </div>
                    </div>
                `;
            } else {
                // RENDER TARJETA (GRID)
                const imagenHTML = item.imagen && item.imagen !== 'null' 
                    ? `<img src="${item.imagen}" alt="${item.nombre}" class="item-imagen">`
                    : `<div class="no-image-placeholder">No hay imagen</div>`;

                categoriaHTML += `
                    <div class="menu-item ${isCompactCard ? 'compact-card' : ''}" data-id="${item.id}">
                        ${imagenHTML}
                        <div class="item-info">
                            <h3>${item.nombre}</h3>
                            <p class="item-nota">${item.descripcion}</p>
                            <p>$${formatPrecio(item.precio)}</p>
                            <input type="text" placeholder="Añadir nota especial (ej: sin cebolla)" class="nota-input card-nota-${item.id}">
                            <button onclick="agregarAlCarrito(${item.id})">Agregar</button>
                        </div>
                    </div>
                `;
            }
        });
        categoriaHTML += `</div>`;
        menuContainer.innerHTML += categoriaHTML;
    }
}

function renderFiltros() {
    // Obtiene categorías únicas de los datos
    const categorias = [...new Set(data.map(item => item.categoria))];
    botonesFiltroContainer.innerHTML = '';
    
    // Botón "Todos"
    botonesFiltroContainer.innerHTML += `<button class="filtro-btn active" data-categoria="todos">Todos</button>`;

    categorias.forEach(categoria => {
        botonesFiltroContainer.innerHTML += `
            <button class="filtro-btn" data-categoria="${categoria.replace(/\s/g, '-')}">
                ${categoria}
            </button>
        `;
    });
}

// =======================================================
// 5. FUNCIONES DE LÓGICA DEL CARRITO
// =======================================================

function agregarAlCarrito(itemId) {
    const producto = data.find(item => item.id === itemId);
    
    if (producto) {
        // Buscar la nota en el input correspondiente (Grid o List)
        let notaInput;
        // 1. Intenta obtener la nota del formato CARD
        notaInput = document.querySelector(`.card-nota-${itemId}`);
        // 2. Si no existe, intenta obtener la nota del formato LIST
        if (!notaInput) {
            notaInput = document.querySelector(`.list-nota-${itemId}`);
        }
        
        const nota = notaInput ? notaInput.value.trim() : '';

        // Buscar si ya existe un item con el mismo producto Y la misma nota
        const itemExistente = carrito.find(item => 
            item.id === itemId && item.nota === nota
        );

        if (itemExistente) {
            itemExistente.cantidad += 1;
        } else {
            carrito.push({
                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio,
                cantidad: 1,
                nota: nota
            });
        }
        
        // Limpiar el input de la nota después de agregar
        if (notaInput) {
            notaInput.value = '';
        }
        
        renderCarrito();
    }
}

function quitarDelCarrito(index) {
    carrito.splice(index, 1);
    renderCarrito();
}

function renderCarrito() {
    carritoItems.innerHTML = '';
    let subtotal = 0;

    carrito.forEach((item, index) => {
        const itemTotal = item.precio * item.cantidad;
        subtotal += itemTotal;
        
        const notaHTML = item.nota ? `<span style="font-size:0.8em; color:var(--text-color-dark); display:block; margin-left:15px;">- ${item.nota}</span>` : '';

        carritoItems.innerHTML += `
            <div class="pedido-item-row">
                <span style="font-weight:600;">${item.cantidad}x ${item.nombre}</span>
                <span>$${formatPrecio(itemTotal)} 
                    <button class="remove-btn" onclick="quitarDelCarrito(${index})">x</button>
                </span>
            </div>
            ${notaHTML}
        `;
    });

    const totalFinal = subtotal + costoEnvio;

    subtotalElement.textContent = `$${formatPrecio(subtotal)}`;
    envioElement.textContent = `$${formatPrecio(costoEnvio)}`;
    totalElement.textContent = `$${formatPrecio(totalFinal)}`;

    // Deshabilitar botón si el carrito está vacío
    finalizarPedidoBtn.disabled = carrito.length === 0;

    actualizarContadorMovil();
}


// =======================================================
// 6. MANEJO DE EVENTOS
// =======================================================

// Lógica de filtrado al hacer clic en los botones
botonesFiltroContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('filtro-btn')) {
        const target = event.target;
        const categoriaFiltro = target.dataset.categoria;
        
        // 1. Quitar 'active' de todos y ponerlo en el botón actual
        document.querySelectorAll('.filtro-btn').forEach(btn => btn.classList.remove('active'));
        target.classList.add('active');
        
        // 2. Filtrar y mostrar/ocultar secciones
        const seccionesMenu = document.querySelectorAll('#menu-container > h2');
        let primeraSeccionVisible = null;

        seccionesMenu.forEach(h2 => {
            const id = h2.id;
            const categoria = h2.dataset.categoria;
            const container = h2.nextElementSibling; // El div items-grid/list
            
            if (categoriaFiltro === 'todos' || id === `cat-${categoriaFiltro}`) {
                h2.style.display = 'block';
                container.style.display = 'grid'; // o 'flex' para items-list
                if (container.classList.contains('items-list')) {
                    container.style.display = 'flex';
                }
                if (!primeraSeccionVisible) {
                    primeraSeccionVisible = h2;
                }
            } else {
                h2.style.display = 'none';
                container.style.display = 'none';
            }
        });
        
        // 3. Scroll a la primera sección visible (si no es 'Todos')
        if (categoriaFiltro !== 'todos' && primeraSeccionVisible) {
            // Usa el ID del H2 para hacer scroll
            primeraSeccionVisible.scrollIntoView({ behavior: 'smooth' });
        }
    }
});


// Lógica para mostrar/ocultar el botón flotante móvil (scroll)
window.addEventListener('scroll', () => {
    // Si la pantalla es pequeña (ej: < 992px)
    if (window.innerWidth < 992) {
        // Mostrar el botón solo cuando se hace scroll hacia abajo
        if (window.scrollY > 100 && carrito.length > 0) {
            // Este display: 'flex' está aquí para sobreescribir el 'none' temporal del scroll
            verPedidoMovilBtn.style.display = 'flex';
        } else {
            // Evita que se oculte si el carrito está vacío
            if (carrito.length === 0) {
                verPedidoMovilBtn.style.display = 'none';
            }
        }
    }
});

// Evento para el botón flotante móvil (muestra el carrito)
verPedidoMovilBtn.addEventListener('click', () => {
    // En móviles, hacer scroll hacia el carrito
    carritoElement.scrollIntoView({ behavior: 'smooth' });
    // Opcional: enfocar el primer campo de input para que el teclado se abra
    nombreInput.focus(); 
});


// Lógica del envío de pedido (FINAL)
finalizarPedidoBtn.addEventListener('click', () => {
    // 1. Validaciones
    if (carrito.length === 0 || !nombreInput.value || !telefonoInput.value || !direccionInput.value) {
        alert("Por favor, completa tus datos de contacto y agrega al menos un producto al carrito.");
        return;
    }
    
    const subtotal = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    const totalFinal = subtotal + costoEnvio;

    // --- 2. PREPARACIÓN DE DATOS PARA GOOGLE SHEET ---
    // Estos datos se enviarán a tu script de Google Apps
    const pedidoData = {
        nombrecliente: nombreInput.value,
        telefono: telefonoInput.value,
        direccion: direccionInput.value,
        metodopago: pagoSelect.value, // Valor 'efectivo', 'transferencia', etc.
        total: totalFinal,
        carrito: carrito // Array de productos con nombre, cantidad y nota
    };
    
    // --- 3. PREPARACIÓN DEL MENSAJE DE WHATSAPP ---
    let mensaje = `*¡NUEVO PEDIDO TOFFE RESTAURANTE!*%0A%0A`;
    mensaje += `*Datos del Cliente:*%0A`;
    mensaje += `*Nombre:* ${nombreInput.value}%0A`;
    mensaje += `*Teléfono:* ${telefonoInput.value}%0A`;
    mensaje += `*Dirección:* ${direccionInput.value}%0A`;
    mensaje += `*Pago:* ${pagoSelect.options[pagoSelect.selectedIndex].text}%0A%0A`; // Texto legible del método de pago
    
    mensaje += `*Detalle del Pedido:*%0A`;
    carrito.forEach(item => {
        const notaStr = item.nota ? ` (Nota: ${item.nota})` : '';
        mensaje += `${item.cantidad} x ${item.nombre} - $${formatPrecio(item.precio * item.cantidad)}${notaStr}%0A`;
    });

    mensaje += `%0A*Resumen de Costos:*%0A`;
    mensaje += `Subtotal: $${formatPrecio(subtotal)}%0A`;
    mensaje += `Costo de Envío: $${formatPrecio(costoEnvio)}%0A`;
    mensaje += `*TOTAL FINAL: $${formatPrecio(totalFinal)}*%0A%0A`;
    mensaje += `¡Gracias por tu pedido!`;

    const whatsappURL = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

    // --- 4. ENVÍO DE DATOS A GOOGLE SHEET (Usando el nuevo URL) ---
    
    fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(pedidoData), 
        headers: {
            // Es CRUCIAL que el Content-Type sea text/plain para Apps Script
            'Content-Type': 'text/plain' 
        }
    })
    .then(response => response.json())
    .then(result => {
        if (result.result === 'success') {
            console.log('Pedido registrado en Google Sheet con ID:', result.pedidoId);
            // El ID generado (ej: 202511091234) ya está disponible en el objeto result
        } else {
            console.error('Error al registrar pedido en Google Sheet:', result.message);
        }
    })
    .catch(error => {
        console.error('Error de conexión con Google Sheet:', error);
    });
    
    // --- 5. ABRIR WHATSAPP Y LIMPIAR ---
    
    // Abrir WhatsApp en una nueva pestaña (o ventana)
    window.open(whatsappURL, '_blank');
    
    // Limpiar el formulario y el carrito después del intento de envío
    setTimeout(() => {
        if (confirm('✅ El pedido se envió a WhatsApp. ¿Deseas limpiar el formulario ahora?')) {
             limpiarFormularioYCarrito();
        }
    }, 1000); 
});

// =======================================================
// 7. INICIALIZACIÓN
// =======================================================

document.addEventListener('DOMContentLoaded', () => {
    // Inicializa el renderizado
    renderMenu(data);
    renderFiltros();
    renderCarrito();
});