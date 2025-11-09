// =======================================================
// CONFIGURACIÓN GLOBAL
// =======================================================

// URL Directa (Raw) de tu archivo CSV en GitHub.
const CSV_URL = 'https://raw.githubusercontent.com/toffeeparrilla-ui/menusuba/main/menu.csv'; 

let allProducts = [];
const productsListEl = document.getElementById('products-list');
const categoriesListEl = document.getElementById('categories-list');
const PLACEHOLDER_IMAGE = 'assets/placeholder.jpg'; // Imagen por defecto si la ruta falla o está vacía

// =======================================================
// 1. UTILIDADES
// =======================================================

/**
 * Formatea el precio a un formato de moneda local.
 * @param {string} priceString El precio en formato de cadena (ej: "35.900").
 * @returns {string} El precio formateado (ej: "$ 35.900").
 */
function formatPrice(priceString) {
    if (!priceString) return '';
    // Podrías usar toLocaleString() si manejas el precio como número, 
    // pero mantendremos el formato de cadena del CSV por simplicidad.
    return `$ ${priceString}`;
}

/**
 * Función robusta para parsear líneas CSV, respetando las comillas.
 * @param {string} csvText El contenido completo del archivo CSV.
 * @returns {Array<Object>} Un array de objetos, donde cada objeto es un producto.
 */
function parseCsv(csvText) {
    const products = [];
    
    // Ignorar la primera línea (encabezado)
    const lines = csvText.trim().split('\r\n').slice(1);
    
    lines.forEach(line => {
        // Regex para dividir por comas, excepto si están dentro de comillas (para las descripciones)
        const rawFields = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        
        // Aseguramos que tenemos al menos 6 campos (Columnas A a F)
        if (rawFields.length < 6) return; 

        // Limpiar comillas de los campos
        const fields = rawFields.map(f => f.trim().replace(/^"|"$/g, ''));
        
        const product = {
            id: fields[0],           
            name: fields[1],         
            price: fields[2],        
            category: fields[3],     
            description: fields[4] === '(Vacio)' ? '' : fields[4], 
            // Usa la imagen del CSV o el placeholder si está vacía
            image: (fields[5] === '(Vacio)' || !fields[5]) ? PLACEHOLDER_IMAGE : fields[5] 
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

/**
 * Carga el archivo CSV y llama a las funciones de renderizado.
 */
async function fetchCsvData() {
    productsListEl.innerHTML = '<p class="loading-message">Cargando menú...</p>';
    
    try {
        const response = await fetch(CSV_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}. Verifica la URL.`);
        }
        const csvText = await response.text();
        allProducts = parseCsv(csvText);
        
        if (allProducts.length > 0) {
            renderCategories(allProducts);
            // Mostrar todos los productos por defecto
            const defaultCategory = 'all'; 
            renderProducts(allProducts, defaultCategory);
            
            // Activar el botón 'Todos'
            const allButton = document.querySelector(`[data-category="${defaultCategory}"]`);
            if(allButton) allButton.classList.add('active');
        } else {
            productsListEl.innerHTML = '<p class="error-message">No se encontraron productos en el menú.</p>';
        }

    } catch (error) {
        console.error("Error al cargar o parsear el CSV:", error);
        productsListEl.innerHTML = `<p class="error-message">Error al cargar el menú: ${error.message}</p>`;
    }
}

// =======================================================
// 3. RENDERIZADO DE CATEGORÍAS
// =======================================================

/**
 * Extrae categorías únicas y crea los botones de filtro en la navegación.
 * @param {Array<Object>} products El array de productos.
 */
function renderCategories(products) {
    const categories = new Set(products.map(p => p.category));
    categoriesListEl.innerHTML = '';
    
    // 1. Botón "Todos"
    const allBtn = createCategoryButton('Todos', 'all');
    categoriesListEl.appendChild(allBtn);

    // 2. Botones para cada categoría única
    categories.forEach(category => {
        const li = createCategoryButton(category, category);
        categoriesListEl.appendChild(li);
    });

    // Añadir el listener una sola vez al contenedor padre
    categoriesListEl.addEventListener('click', handleCategoryFilter);
}

/**
 * Helper para crear el elemento <li> con el botón de categoría.
 */
function createCategoryButton(text, dataCategory) {
    const button = document.createElement('button');
    button.className = 'category-btn';
    button.textContent = text;
    button.dataset.category = dataCategory;

    const li = document.createElement('li');
    li.appendChild(button);
    return li;
}

/**
 * Maneja el evento de clic en los botones de categoría para filtrar.
 * @param {Event} event El evento de clic.
 */
function handleCategoryFilter(event) {
    const button = event.target.closest('.category-btn');
    if (!button) return;

    const selectedCategory = button.dataset.category;

    // Actualizar la clase 'active' para el estilo
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    let filteredProducts;
    if (selectedCategory === 'all') {
        filteredProducts = allProducts;
    } else {
        filteredProducts = allProducts.filter(p => p.category === selectedCategory);
    }

    renderProducts(filteredProducts, selectedCategory);
}

// =======================================================
// 4. RENDERIZADO DE PRODUCTOS
// =======================================================

/**
 * Dibuja las tarjetas de producto en el contenedor principal.
 * @param {Array<Object>} products El array de productos a mostrar.
 * @param {string} currentCategory La categoría actual para el mensaje.
 */
function renderProducts(products, currentCategory) {
    productsListEl.innerHTML = ''; // Limpiar la lista actual

    if (products.length === 0) {
        productsListEl.innerHTML = `<p class="error-message">No hay productos en la categoría: ${currentCategory}</p>`;
        return;
    }

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        const formattedPrice = formatPrice(product.price); 
        
        const descriptionHtml = product.description 
            ? `<p class="product-description">${product.description}</p>`
            : ''; 
        
        card.innerHTML = `
            <img 
                src="${product.image}" 
                alt="${product.name}" 
                class="product-image" 
                onerror="this.onerror=null;this.src='${PLACEHOLDER_IMAGE}';"
            >
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                ${descriptionHtml}
                <span class="product-price">${formattedPrice}</span>
            </div>
        `;
        productsListEl.appendChild(card);
    });
}

// =======================================================
// 5. INICIALIZACIÓN
// =======================================================

// Inicia el proceso de carga de datos cuando el DOM esté completamente cargado.
document.addEventListener('DOMContentLoaded', fetchCsvData);