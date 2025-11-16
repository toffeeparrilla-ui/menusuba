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

// Referencias del DOM (se mantienen)
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
// 3. LECTURA Y PARSEO DEL CSV (ULTRA-FINAL ANTI-FALLO)
// ====================================

function parseCSV(csvText) {
    
    // Paso CRÍTICO 1: Limpia todos los saltos de línea (casi siempre son la causa del fallo)
    const normalizedText = csvText.replace(/[\r\n]+/g, '\n').trim();

    // Divide en líneas (filas)
    const lines = normalizedText.split('\n').filter(line => line.trim() !== '');
    if (lines.length <= 1) return []; 
    
    const dataLines = lines.slice(1);
    const parsedData = [];

    dataLines.forEach(line => {
        // Expresión regular robusta para separar celdas, maneja comillas y vacíos
        // Este regex ya maneja las comas internas como en "Mojito Oceanic Ron, Convier, limón, soda"
        const cells = line.match(/(".*?"|[^,]*)(?=\s*,|\s*$)/g);
        
        // La validación ahora es estricta: debe tener 6 campos
        if (!cells || cells.length !== 6) {
             console.warn('Línea ignorada por estructura incorrecta (no 6 campos):', line);
             return; 
        }

        // Limpiar comillas y espacios de las celdas
        const cleanCells = cells.map(cell => cell ? cell.trim().replace(/^"|"$/g, '') : '');
        
        // 💡 ASIGNACIÓN DEFINITIVA A 6 COLUMNAS
        const id = cleanCells[COLUMN_INDICES.ID];
        const name = cleanCells[COLUMN_INDICES.NAME];
        const priceString = cleanCells[COLUMN_INDICES.PRICE];
        const category = cleanCells[COLUMN_INDICES.CATEGORY];
        let description = cleanCells[COLUMN_INDICES.DESCRIPTION];
        const image = cleanCells[COLUMN_INDICES.IMAGE];

        // Procesamiento del precio
        // Quita puntos (miles) y comas (decimales) para asegurar que sea un número.
        let price = parseFloat(priceString.replace(/\./g, '').replace(/,/g, '')); 
        
        // Limpieza de descripción
        description = description === '(Vacio)' || description === '' ? '' : description;

        // Solo agrega el producto si tiene un precio válido
        if (!isNaN(price) && price > 0) {
            parsedData.push({
                id, name, price, category, description, image
            });
        } else {
             console.warn(`Producto ignorado (precio inválido o cero): ${name} (${priceString})`);
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
            throw new Error(`Error al cargar el archivo: ${response.statusText}`);
        }
        const csvText = await response.text();
        menuData = parseCSV(csvText);
        
        if (menuData.length > 0) {
            renderCategories(menuData);
            renderProducts(menuData);
        } else {
            // Este mensaje sale si el archivo cargó, pero ninguna línea es válida.
            productsList.innerHTML = `
                <div style="text-align: center; padding: 40px; color: #cc0000; background-color: #ffe0e0; border-radius: 8px;">
                    <h3>🚨 Error: Menú Vacío.</h3>
                    <p>El archivo <strong>menu.csv</strong> se cargó, pero el código no pudo leer productos válidos.</p>
                    <p>Esto puede deberse a que **el precio no es un número** (Columna C en tu archivo) o la estructura de las filas no es consistente.</p>
                </div>`;
        }
    } catch (error) {
        console.error('Error en la carga del menú:', error);
        // Este mensaje sale si GitHub Pages o el servidor no pueden encontrar el archivo (404) o el dominio es incorrecto.
        productsList.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #cc0000; background-color: #ffe0e0; border-radius: 8px;">
                <h3>❌ ¡Error Crítico de Carga!</h3>
                <p>No se pudo acceder al archivo <strong>menu.csv</strong>. Si estás en GitHub Pages, verifica que el archivo esté en la raíz del repositorio y que la URL de despliegue sea correcta.</p>
            </div>`;
    }
}

// (Las secciones 5 a 9 de renderizado, carrito e inicialización se mantienen sin cambios por ser funcionales)
// ... (omito el resto del código para brevedad, pero debe estar completo en tu archivo) ...

document.addEventListener('DOMContentLoaded', () => {
    loadMenu();
    updateCartDisplay(); 
});