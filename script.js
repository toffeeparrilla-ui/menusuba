// =======================================================
// CONFIGURACIÓN GLOBAL
// =======================================================

// URL Directa (Raw) de tu archivo CSV en GitHub, la más limpia y funcional.
const CSV_URL = 'https://raw.githubusercontent.com/toffeeparrilla-ui/menusuba/main/menu.csv'; 

let allProducts = [];
const productsListEl = document.getElementById('products-list');
const categoriesListEl = document.getElementById('categories-list');
// Imagen de reemplazo para rutas que fallan, no para productos con '(Vacio)'.
const PLACEHOLDER_IMAGE = 'assets/placeholder.jpg'; 

// =======================================================
// 1. UTILIDADES
// =======================================================

/**
 * Formatea el precio a un formato de moneda local.
 */
function formatPrice(priceString) {
    if (!priceString) return '';
    return `$ ${priceString}`;
}

/**
 * Función robusta para parsear líneas CSV, respetando las comillas.
 */
function parseCsv(csvText) {
    const products = [];
    
    // Ignorar la primera línea (encabezado)
    const lines = csvText.trim().split('\r\n').slice(1);
    
    lines.forEach(line => {
        // Regex para dividir por comas, excepto si están dentro de comillas
        const rawFields = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        
        if (rawFields.length < 6) return; 

        const fields = rawFields.map(f => f.trim().replace(/^"|"$/g, ''));
        
        // >> Lógica de Imagen: Si F (imagen) es (Vacio) o está vacío, establecemos 'null'
        const productImage = (fields[5] === '(Vacio)' || !fields[5]) ? null : fields[5];
        
        const product = {
            id: fields[0],           
            name: fields[1],         
            price: fields[2],        
            category: fields[3],     
            description: fields[4] === '(Vacio)' ? '' : fields[4], 
            image: productImage // Será la ruta o null
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
            throw new Error(`HTTP error! Status: ${response.status}.`);
        }
        const csvText = await response.text();
        allProducts = parseCsv(csvText);
        
        if (allProducts.length > 0) {
            renderCategories(allProducts);
            const defaultCategory = 'all'; 
            renderProducts(allProducts, defaultCategory);
            
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
 * Extrae categorías únicas y crea los botones de filtro.
 */
function renderCategories(products) {
    const categories = new Set(products.map(p => p.category));
    categoriesListEl.innerHTML = '';
    
    // Botón "Todos"
    const allBtn = createCategoryButton('Todos', 'all');
    categoriesListEl.appendChild(allBtn);

    // Botones para cada categoría
    categories.forEach(category => {
        const li = createCategoryButton(category, category);
        categoriesListEl.appendChild(li);
    });

    // Delegación de eventos
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

    // Actualizar clase 'active'
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    let filteredProducts = (selectedCategory === 'all')
        ? allProducts
        : allProducts.filter(p => p.category === selectedCategory);

    renderProducts(filteredProducts, selectedCategory);
}

// =======================================================
// 4. RENDERIZADO DE PRODUCTOS
// =======================================================

/**
 * Dibuja las tarjetas de producto en el contenedor principal.
 */
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
        
        // >> Lógica de Imagen y Clase CSS
        let imageHtml = '';
        card.className = 'product-card';

        if (product.image) {
            // Si hay imagen (no es null), genera el <img>
            imageHtml = `
                <img 
                    src="${product.image}" 
                    alt="${product.name}" 
                    class="product-image" 
                    onerror="this.onerror=null;this.src='${PLACEHOLDER_IMAGE}';"
                >
            `;
        } else {
            // Si NO hay imagen (es null), añade la clase especial para CSS
            card.classList.add('product-card-no-image');
        }

        // Montar la tarjeta
        card.innerHTML = `
            ${imageHtml}
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

// Inicia el proceso de carga cuando el documento esté listo
document.addEventListener('DOMContentLoaded', fetchCsvData);