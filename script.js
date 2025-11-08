// ===============================================
// 0. FUNCIÓN DE UTILIDAD PARA FORMATO DE PRECIO
// ===============================================

// Formatea un número (ej. 35900) a formato de moneda con separador de miles (ej. 35.900)
function formatPrice(number) {
    // Usamos 'es-CO' (Colombia) para el formato con punto como separador de miles.
    return number.toLocaleString('es-CO', { 
        minimumFractionDigits: 0, 
        maximumFractionDigits: 0 
    });
}

// Función para limpiar y convertir el precio del CSV a número entero
function cleanPrice(priceString) {
    if (typeof priceString === 'string') {
        // Elimina puntos de miles y luego convierte a entero. Si es vacío o no válido, retorna 0.
        const cleaned = priceString.replace(/\./g, '').trim();
        return cleaned ? parseInt(cleaned, 10) : 0;
    }
    return parseInt(priceString) || 0;
}


// ===============================================
// 1. DATA: TU MENÚ DE PRODUCTOS (96 ÍTEMS)
// CORRECCIÓN: 'Changua Sencilla' (ID 18) ya no tiene imagen.
// ===============================================

const productos = [
    { id: 1, nombre: "Bagre en Salsa Criolla", precio: 35900, categoria: "A La Marinera", subcategoria: "N/A", descripcion: "Acompañado de Arroz, Ensalada de la casa, patacon y yuca frita", imagen: "assets/imagenes/A La Marinera/img13.jpg" },
    { id: 2, nombre: "Filete de Merlusa", precio: 25900, categoria: "A La Marinera", subcategoria: "N/A", descripcion: "Pidelo Con ensalada de la casa o Vegetales al Wok", imagen: "assets/imagenes/A La Marinera/img9.jpg" },
    { id: 3, nombre: "Mini Trucha", precio: 25900, categoria: "A La Marinera", subcategoria: "N/A", descripcion: "Pidelo Con ensalada de la casa o Vegetales al Wok", imagen: "assets/imagenes/A La Marinera/img8.jpg" },
    { id: 4, nombre: "Salmon", precio: 45000, categoria: "A La Marinera", subcategoria: "N/A", descripcion: "Pidelo en salsa de Maracuya o al Ajillo, Acompañado de ensalada de la casa, con pure de papa o papa a la francesa", imagen: "assets/imagenes/A La Marinera/img139.jpg" },
    { id: 5, nombre: "Trucha al ajillo", precio: 35900, categoria: "A La Marinera", subcategoria: "N/A", descripcion: "O tambien Pidelo en salsa de champiñones Acompañado de Ensalada de la casa o papa fracesa", imagen: "assets/imagenes/A La Marinera/img12.jpg" },
    { id: 6, nombre: "Teriyaki Clásico", precio: 66900, categoria: "Combos Teriyaki", subcategoria: "N/A", descripcion: "5 porciones con Lomo de res. trozos de pechuga y cerdo, con vegetales al wok y arroz yakimeshi", imagen: "assets/imagenes/Combos Teriyaki/img223.jpg" },
    { id: 7, nombre: "Teriyaki Especial", precio: 84900, categoria: "Combos Teriyaki", subcategoria: "N/A", descripcion: "5 porciones con Camarones. Lomo de res. Trozos de pechuga y cerdo Acompañado de Papas a la Francesa", imagen: "assets/imagenes/Combos Teriyaki/img214.jpg" },
    { id: 8, nombre: "Teriyaki Familiar", precio: 78900, categoria: "Combos Teriyaki", subcategoria: "N/A", descripcion: "5 porciones con Lomo de res, trozos de pechuga y cerdo con vegetales al wok y arroz yakimeshi Acompañado de Papa a la Francesa y Gaseosa", imagen: "assets/imagenes/Combos Teriyaki/img211.jpg" },
    { id: 9, nombre: "Champiñon y Pollo", precio: 17000, categoria: "Crepes", subcategoria: "N/A", descripcion: "Trozos de Pollo, bañado en salsa de champiñon con queso mozarella", imagen: "assets/imagenes/Crepes/img185.jpg" },
    { id: 10, nombre: "Crepes de Dulce", precio: 16900, categoria: "Crepes", subcategoria: "N/A", descripcion: "Fresas, banano, trozos de durazno crema de leche y Helado", imagen: "assets/imagenes/Crepes/img188.jpg" },
    { id: 11, nombre: "Crepes Mixto", precio: 17900, categoria: "Crepes", subcategoria: "N/A", descripcion: "Trozos de lomo y pollo. bañado en salsa de la casa, con queso mozarella", imagen: "assets/imagenes/Crepes/img191.jpg" },
    { id: 12, nombre: "Wafles con Fruta", precio: 0, categoria: "Crepes", subcategoria: "N/A", descripcion: "Crujiente por fuera y suave por dentro, decorado con frutas frescas, crema chantilly y miel maple", imagen: "assets/imagenes/Crepes/img197.jpg" },
    { id: 13, nombre: "Amor Perfecto", precio: 18900, categoria: "Desayunos", subcategoria: "N/A", descripcion: "Fresco pan de Semillas - Queso Crema. Huevos Revueltos - Aguacate Fresco Yogurt Griego - Granola - Fresas Mora - Kiwy", imagen: "assets/imagenes/Desayunos/img53.jpg" },
    { id: 14, nombre: "Bisteck a Caballo", precio: 18900, categoria: "Desayunos", subcategoria: "N/A", descripcion: "Carne en Salsa Criolla con huevo, arroz y arepa", imagen: "assets/imagenes/Desayunos/img36.jpg" },
    { id: 15, nombre: "Calentao Paisa", precio: 16500, categoria: "Desayunos", subcategoria: "N/A", descripcion: "Frijol, arroz, chorizo, plátano, huevo frito y arepa", imagen: "assets/imagenes/Desayunos/img15.jpg" },
    { id: 16, nombre: "Cereal", precio: 8900, categoria: "Desayunos", subcategoria: "N/A", descripcion: "", imagen: "assets/imagenes/Desayunos/img97.jpg" },
    { id: 17, nombre: "Changua Especial", precio: 10900, categoria: "Desayunos", subcategoria: "N/A", descripcion: "Con Almojabana y Queso", imagen: "assets/imagenes/Desayunos/img251.jpg" },
    { id: 18, nombre: "Changua Sencilla", precio: 8500, categoria: "Desayunos", subcategoria: "N/A", descripcion: "", imagen: "" }, // <-- CORRECCIÓN APLICADA AQUÍ
    { id: 19, nombre: "Chocolate Toffe", precio: 14500, categoria: "Desayunos", subcategoria: "N/A", descripcion: "Pan de Bono. Queso Campesino Almojabana y Chocolate", imagen: "assets/imagenes/Desayunos/img258.jpg" },
    { id: 20, nombre: "Croque Madame en Grano Noble", precio: 17900, categoria: "Desayunos", subcategoria: "N/A", descripcion: "Pan multigranos con aguacate laminado, acompañados de exquisito croque madame, bañado en salsa holandesa y bacon ahumado", imagen: "assets/imagenes/Desayunos/img74.jpg" },
    { id: 21, nombre: "Cumbre Italiana", precio: 18900, categoria: "Desayunos", subcategoria: "N/A", descripcion: "Pan Focaccia - Crema de Aguacate Pollo Desmenuzado - Cebolla Salteada Huevos - Nutella - Banano Fresas", imagen: "assets/imagenes/Desayunos/img54.jpg" },
    { id: 22, nombre: "Desayuno Buenos Días", precio: 16500, categoria: "Desayunos", subcategoria: "N/A", descripcion: "Delicioso desayuno al estilo texano. Huevos rancheros en mozarella, acompañado de frutas frescas, rodajas de pan aliñado y jugo de naranja natural", imagen: "assets/imagenes/Desayunos/img255.jpg" },
    { id: 23, nombre: "Extasis en Crocancia de Pan", precio: 18900, categoria: "Desayunos", subcategoria: "N/A", descripcion: "Tajada de pan de Centeno esparcidas en cheese cream, con el frescar de la lechuga, la dulzura de los tomates cherry, la intesnidad del pimiento y la elegancia de la cebolla asada, acompañadas de champiñones, huevos pochados y crocancia de bacon.", imagen: "assets/imagenes/Desayunos/img71.jpg" },
    { id: 24, nombre: "Fruti Granola", precio: 13900, categoria: "Desayunos", subcategoria: "N/A", descripcion: "", imagen: "assets/imagenes/Desayunos/img95.jpg" },
    { id: 25, nombre: "Huerto de Atun", precio: 15900, categoria: "Desayunos", subcategoria: "N/A", descripcion: "Ensalada de lechuga con lomitos de Atún. acompañada de huevo cocido, tomates cherry. aguacate y queso", imagen: "assets/imagenes/Desayunos/img89.jpg" },
    { id: 26, nombre: "Huevos al Nido", precio: 14900, categoria: "Desayunos", subcategoria: "N/A", descripcion: "Huevos Fritos, tocineta y Papa Francesa", imagen: "assets/imagenes/Desayunos/img35.jpg" },
    { id: 27, nombre: "Huevos Escalfados", precio: 11900, categoria: "Desayunos", subcategoria: "N/A", descripcion: "Acompañados de Jamón, queso y arepa con Mantequilla y Mermelada", imagen: "assets/imagenes/Desayunos/img33.jpg" },
    { id: 28, nombre: "Huevos Jalapeños", precio: 13500, categoria: "Desayunos", subcategoria: "N/A", descripcion: "Huevos batidos en mantequilla clarificada, queso mozarella. champiñon ahumado, bacón y jamón ahumado, con unos deliciosos chiles jalapeños", imagen: "assets/imagenes/Desayunos/img17.jpg" },
    { id: 29, nombre: "Huevos Rancheros Especiales", precio: 13500, categoria: "Desayunos", subcategoria: "N/A", descripcion: "Huevos sumergidos en salsa ranchera con salchicha ranchera con arepa asada", imagen: "assets/imagenes/Desayunos/img39.jpg" },
    { id: 30, nombre: "Jardin de Sabores", precio: 16900, categoria: "Desayunos", subcategoria: "N/A", descripcion: "Ensalada de lechuga con Pollo a las finas hierbas corte en julianas, acompañada de huevo cocido, tomates cherry y láminas de palta", imagen: "assets/imagenes/Desayunos/img88.jpg" },
    { id: 31, nombre: "Migao de Chocolate", precio: 12900, categoria: "Desayunos", subcategoria: "N/A", descripcion: "", imagen: "assets/imagenes/Desayunos/img21.jpg" },
    { id: 32, nombre: "Omelet de Carne", precio: 13900, categoria: "Desayunos", subcategoria: "N/A", descripcion: "Carne desmechada. Maíz tierno, queso mozarella y tocineta", imagen: "assets/imagenes/Desayunos/img113.jpg" },
    { id: 33, nombre: "Omelet de Pollo", precio: 13500, categoria: "Desayunos", subcategoria: "N/A", descripcion: "Pollo salteado con finas hiervas.queso mozarella y champiñon", imagen: "assets/imagenes/Desayunos/img114.jpg" },
    { id: 34, nombre: "Omelet Especial", precio: 13900, categoria: "Desayunos", subcategoria: "N/A", descripcion: "Maiz tierno, tocineta, champiñón queso mozarella. jamón, pollo", imagen: "assets/imagenes/Desayunos/img112.jpg" },
    { id: 35, nombre: "Omelet Vegetariano", precio: 13900, categoria: "Desayunos", subcategoria: "N/A", descripcion: "Clara de huevo, aceite de Oliva espinaca, brocoli, champinon, , maiz tierno y queso", imagen: "assets/imagenes/Desayunos/img111.jpg" },
    { id: 36, nombre: "Pancakes De la Casa", precio: 18900, categoria: "Desayunos", subcategoria: "N/A", descripcion: "Huevos en omelette, acompañados con unos tiernos pancakes americanos, miel de maple, frutilla y durazno laminado.", imagen: "assets/imagenes/Desayunos/img13.jpg" },
    { id: 37, nombre: "Parafait Miel/Granola", precio: 13900, categoria: "Desayunos", subcategoria: "N/A", descripcion: "Frutal Cremoso y saludable. postre matutino en yogurth griego, acompañado de frutillas, melocotones bañados en miel natural y coulis de frutos rojos.", imagen: "assets/imagenes/Desayunos/img94.jpg" },
    { id: 38, nombre: "Pollo en Hogaza y Bechamel", precio: 17900, categoria: "Desayunos", subcategoria: "N/A", descripcion: "Pan Ciabata - Crema de Aguacate Trozos de Pollo Tomate Cherry Huevo Cocido - Salsa Bechamel", imagen: "assets/imagenes/Desayunos/img56.jpg" },
    { id: 39, nombre: "Porción de Frutas", precio: 8900, categoria: "Desayunos", subcategoria: "N/A", descripcion: "", imagen: "assets/imagenes/Desayunos/img96.jpg" },
    { id: 40, nombre: "Ritual Matutino de Sibarita", precio: 19500, categoria: "Desayunos", subcategoria: "N/A", descripcion: "Caldo de costilla, tostadas con mantequilla, huevos revueltos al gusto de la abuela con la sinfonía de cebolla y tomate acompañado de un Chocolatico de molinillo con su espuma.", imagen: "assets/imagenes/Desayunos/img257.jpg" },
    { id: 41, nombre: "Tesoros de Salmón", precio: 27900, categoria: "Desayunos", subcategoria: "N/A", descripcion: "Tostadas de guacamole con huevo cocido, abrazadas por el ahumado salmon del mar acompañadas de lechuga y tomates cherry.", imagen: "assets/imagenes/Desayunos/img72.jpg" },
    { id: 42, nombre: "Wafles con Frutas", precio: 0, categoria: "Desayunos", subcategoria: "N/A", descripcion: "", imagen: "assets/imagenes/Desayunos/img75.jpg" },
    { id: 43, nombre: "Coctel de Camarones", precio: 18900, categoria: "Entradas", subcategoria: "N/A", descripcion: "Canasta Crocante de Platano con Camarones", imagen: "assets/imagenes/Entradas/img40.jpg" },
    { id: 44, nombre: "Patacón con Hogao", precio: 15000, categoria: "Entradas", subcategoria: "N/A", descripcion: "Crocante Patacón con hogao y carne desmechada", imagen: "assets/imagenes/Entradas/img43.jpg" },
    { id: 45, nombre: "Salchipapa Americana", precio: 15900, categoria: "Entradas", subcategoria: "N/A", descripcion: "", imagen: "assets/imagenes/Entradas/img49.jpg" },
    { id: 46, nombre: "Cerdo Tipacay", precio: 24900, categoria: "Especiales Gourmet", subcategoria: "N/A", descripcion: "Cerdo con vegetales al wok ACOMPAÑADO de papa a la Francesa", imagen: "assets/imagenes/Especiales Gourmet/img53.jpg" },
    { id: 47, nombre: "Roll de Pollo Grille", precio: 24900, categoria: "Especiales Gourmet", subcategoria: "N/A", descripcion: "Pechuga a la parrilla acompañada de papa criolla PIDELO CON Ensalada de la casa o Vegetales al wok", imagen: "assets/imagenes/Especiales Gourmet/img63.jpg" },
    { id: 48, nombre: "Salteado del Atlántico", precio: 32000, categoria: "Especiales Gourmet", subcategoria: "N/A", descripcion: "Cubos de Salmón salteados con vegetales al wok ACOMPAÑADOS con papa a la francesa", imagen: "assets/imagenes/Especiales Gourmet/img60.jpg" },
    { id: 49, nombre: "Steak la Parrilla", precio: 25900, categoria: "Especiales Gourmet", subcategoria: "N/A", descripcion: "PIDELO CON Ensalada de la casa o Vegetales al wok", imagen: "assets/imagenes/Especiales Gourmet/img66.jpg" },
    { id: 50, nombre: "Beef Teriyaki", precio: 27900, categoria: "Especiales Wok", subcategoria: "N/A", descripcion: "Lomo de res en salsa teriyaki Acompañado de Vegetales a la Plancha", imagen: "assets/imagenes/Especiales Wok/img157.jpg" },
    { id: 51, nombre: "Chiken Noodles", precio: 25900, categoria: "Especiales Wok", subcategoria: "N/A", descripcion: "Pasta Ramel al wok con 200gr de pollo ACOMPAÑADO Champiñones, maiz tierno y Brocoli, Bañado en salsa teriyaki", imagen: "assets/imagenes/Especiales Wok/img161.jpg" },
    { id: 52, nombre: "Chiken Teriyaki", precio: 26900, categoria: "Especiales Wok", subcategoria: "N/A", descripcion: "Pechuga de Pollo en salsa teriyaki ACOMPAÑADO de vegetales al wok", imagen: "assets/imagenes/Especiales Wok/img145.jpg" },
    { id: 53, nombre: "Especial Jakimeshi Lomo", precio: 26900, categoria: "Especiales Wok", subcategoria: "N/A", descripcion: "Mezcla de Pollo o lomo de res con arroz frito y vegetales", imagen: "assets/imagenes/Especiales Wok/img152.jpg" },
    { id: 54, nombre: "Especial Jakimeshi Pollo", precio: 24900, categoria: "Especiales Wok", subcategoria: "N/A", descripcion: "Mezcla de Pollo o lomo de res con arroz frito y vegetales", imagen: "assets/imagenes/Especiales Wok/img151.jpg" },
    { id: 55, nombre: "Menu Infantil", precio: 25900, categoria: "Especiales Wok", subcategoria: "N/A", descripcion: "Trozos de Pollo en salsa teriyaki Acompañado de arroz yakimeshi o pastas. Incluye Jugo y Helado NOTA: Este menu es solo para niños.", imagen: "assets/imagenes/Especiales Wok/img194.jpg" },
    { id: 56, nombre: "Teppanyaki Conection", precio: 29900, categoria: "Especiales Wok", subcategoria: "N/A", descripcion: "Lomo de res y pechuga a la plancha, marinados en salsa teriyaki, acompañado de vegetales a la planchay arroz yakimechi", imagen: "assets/imagenes/Especiales Wok/img170.jpg" },
    { id: 57, nombre: "Teppanyaki de Camarones", precio: 35900, categoria: "Especiales Wok", subcategoria: "N/A", descripcion: "Vegetales al wok con camarones salteados", imagen: "assets/imagenes/Especiales Wok/img167.jpg" },
    { id: 58, nombre: "Teriyaki Mixto", precio: 35900, categoria: "Especiales Wok", subcategoria: "N/A", descripcion: "Langostinos, lomo de res, camarones, trozos de pollo. marinados en salsa teriyaki ACOMPAÑADO de vegetales a la plancha y Arroz Yakimeshi", imagen: "assets/imagenes/Especiales Wok/img164.jpg" },
    { id: 59, nombre: "Tokio Mignon", precio: 29600, categoria: "Especiales Wok", subcategoria: "N/A", descripcion: "200gr de Lomo con tocineta (libre de Grasa), Acompañado de Champiñones y arroz yakimeshi", imagen: "assets/imagenes/Especiales Wok/img148.jpg" },
    { id: 60, nombre: "Alfajor", precio: 3600, categoria: "Horneados", subcategoria: "N/A", descripcion: "", imagen: "assets/imagenes/Horneados/img100.jpg" },
    { id: 61, nombre: "Almojabana", precio: 3500, categoria: "Horneados", subcategoria: "N/A", descripcion: "", imagen: "assets/imagenes/Horneados/img100.jpg" },
    { id: 62, nombre: "Corazones", precio: 3800, categoria: "Horneados", subcategoria: "N/A", descripcion: "", imagen: "assets/imagenes/Horneados/img100.jpg" },
    { id: 63, nombre: "Croissant de Chocolate", precio: 4500, categoria: "Horneados", subcategoria: "N/A", descripcion: "", imagen: "assets/imagenes/Horneados/img100.jpg" },
    { id: 64, nombre: "Croissant", precio: 4000, categoria: "Horneados", subcategoria: "N/A", descripcion: "", imagen: "assets/imagenes/Horneados/img100.jpg" },
    { id: 65, nombre: "Danesas", precio: 4200, categoria: "Horneados", subcategoria: "N/A", descripcion: "", imagen: "assets/imagenes/Horneados/img100.jpg" },
    { id: 66, nombre: "Domo mini Muffins (12 unid)", precio: 15000, categoria: "Horneados", subcategoria: "N/A", descripcion: "", imagen: "assets/imagenes/Horneados/img100.jpg" },
    { id: 67, nombre: "Galleta de Avena", precio: 2500, categoria: "Horneados", subcategoria: "N/A", descripcion: "", imagen: "assets/imagenes/Horneados/img100.jpg" },
    { id: 68, nombre: "Galleta de Chips de Chocolate", precio: 2700, categoria: "Horneados", subcategoria: "N/A", descripcion: "", imagen: "assets/imagenes/Horneados/img100.jpg" },
    { id: 69, nombre: "Galleta de Granola", precio: 3800, categoria: "Horneados", subcategoria: "N/A", descripcion: "", imagen: "assets/imagenes/Horneados/img100.jpg" },
    { id: 70, nombre: "Galleta Florentina de Mani", precio: 3800, categoria: "Horneados", subcategoria: "N/A", descripcion: "", imagen: "assets/imagenes/Horneados/img100.jpg" },
    { id: 71, nombre: "Galleta Infantil", precio: 3200, categoria: "Horneados", subcategoria: "N/A", descripcion: "", imagen: "assets/imagenes/Horneados/img100.jpg" },
    { id: 72, nombre: "Mantecada", precio: 4000, categoria: "Horneados", subcategoria: "N/A", descripcion: "", imagen: "assets/imagenes/Horneados/img100.jpg" },
    { id: 73, nombre: "Milhoja", precio: 6000, categoria: "Horneados", subcategoria: "N/A", descripcion: "", imagen: "assets/imagenes/Horneados/img100.jpg" },
    { id: 74, nombre: "Palito de Queso", precio: 4000, categoria: "Horneados", subcategoria: "N/A", descripcion: "", imagen: "assets/imagenes/Horneados/img100.jpg" },
    { id: 75, nombre: "Pan de Bono", precio: 3500, categoria: "Horneados", subcategoria: "N/A", descripcion: "", imagen: "assets/imagenes/Horneados/img100.jpg" },
    { id: 76, nombre: "PAN DE LA ABUELA", precio: 5000, categoria: "Horneados", subcategoria: "N/A", descripcion: "", imagen: "assets/imagenes/Horneados/img100.jpg" },
    { id: 77, nombre: "Pasabocas", precio: 1900, categoria: "Horneados", subcategoria: "N/A", descripcion: "", imagen: "assets/imagenes/Horneados/img100.jpg" },
    { id: 78, nombre: "Pastel Carne", precio: 4600, categoria: "Horneados", subcategoria: "N/A", descripcion: "", imagen: "assets/imagenes/Horneados/img100.jpg" },
    { id: 79, nombre: "Pastel Gloria", precio: 4000, categoria: "Horneados", subcategoria: "N/A", descripcion: "", imagen: "assets/imagenes/Horneados/img100.jpg" },
    { id: 80, nombre: "Pastel Pollo", precio: 4600, categoria: "Horneados", subcategoria: "N/A", descripcion: "", imagen: "assets/imagenes/Horneados/img100.jpg" },
    { id: 81, nombre: "Rollo de Canela", precio: 4000, categoria: "Horneados", subcategoria: "N/A", descripcion: "", imagen: "assets/imagenes/Horneados/img100.jpg" },
    { id: 82, nombre: "Sandwich de jamón queso", precio: 7500, categoria: "Horneados", subcategoria: "N/A", descripcion: "", imagen: "assets/imagenes/Horneados/img100.jpg" },
    { id: 83, nombre: "Sandwich de Pollo", precio: 8500, categoria: "Horneados", subcategoria: "N/A", descripcion: "", imagen: "assets/imagenes/Horneados/img100.jpg" },
    { id: 84, nombre: "Trufas de Chocolate", precio: 2500, categoria: "Horneados", subcategoria: "N/A", descripcion: "", imagen: "assets/imagenes/Horneados/img100.jpg" },
    { id: 85, nombre: "Pasta a la Marinera", precio: 31900, categoria: "Pastas De La Casa", subcategoria: "N/A", descripcion: "ACOMPAÑADO de Pan de Ajo", imagen: "assets/imagenes/Pastas De La Casa/img120.jpg" },
    { id: 86, nombre: "Pasta Alfredo", precio: 20900, categoria: "Pastas De La Casa", subcategoria: "N/A", descripcion: "Con jamón y Maiz Tierno ACOMPAÑADO de Pan de Ajo", imagen: "assets/imagenes/Pastas De La Casa/img131.jpg" },
    { id: 87, nombre: "Pasta Carbonara", precio: 22900, categoria: "Pastas De La Casa", subcategoria: "N/A", descripcion: "Con tocineta y champiñones ACOMPAÑADO de Pan de Ajo", imagen: "assets/imagenes/Pastas De La Casa/img133.jpg" },
    { id: 88, nombre: "Pasta de la Casa", precio: 35900, categoria: "Pastas De La Casa", subcategoria: "N/A", descripcion: "Con cubos de Salmón y Langostinos", imagen: "assets/imagenes/Pastas De La Casa/img123.jpg" },
    { id: 89, nombre: "Bife de Chorizo", precio: 46900, categoria: "Toffe Grille", subcategoria: "N/A", descripcion: "Acompañado de papa francesa. ensalada de la casa y chimichurri", imagen: "assets/imagenes/Toffe Grille/img79.jpg" },
    { id: 90, nombre: "Churrasco Argentino", precio: 45900, categoria: "Toffe Grille", subcategoria: "N/A", descripcion: "Acompañado de Queso grille Chorizo Ranchero, Ensalada de la casa. Yuca frita y Chimichurri", imagen: "assets/imagenes/Toffe Grille/img92.jpg" },
    { id: 91, nombre: "Costillas BBQ", precio: 36900, categoria: "Toffe Grille", subcategoria: "N/A", descripcion: "350gr de Deliciosas costillas de Cerdo. bañadas en salsa bbq. Acompañado de Aros de Cebolla. Papa Francesa y ensalada de la casa", imagen: "assets/imagenes/Toffe Grille/img89.jpg" },
    { id: 92, nombre: "Filet Mignon", precio: 48900, categoria: "Toffe Grille", subcategoria: "N/A", descripcion: "Tierno de lomo fino de res bañada en salsa demi-glace. Acompañado de papa francesa. ensalada de la casa", imagen: "assets/imagenes/Toffe Grille/img86.jpg" },
    { id: 93, nombre: "Mini Churrasco", precio: 29900, categoria: "Toffe Grille", subcategoria: "N/A", descripcion: "Delicioso Corte de Chata. acompañado de Yuca y chimichurri, PIDELO con Ensalada de la casa o Vegetales al wok", imagen: "assets/imagenes/Toffe Grille/img82.jpg" },
    { id: 94, nombre: "Pechuga en Salsa de Champiñones", precio: 31900, categoria: "Toffe Grille", subcategoria: "N/A", descripcion: "Acompañado de yuca frita y ensalada de la Casa", imagen: "assets/imagenes/Toffe Grille/img73.jpg" },
    { id: 95, nombre: "Pechuga Parmesana", precio: 31900, categoria: "Toffe Grille", subcategoria: "N/A", descripcion: "Acompañado de tomate, ensalada de la casa y papa francesa.", imagen: "assets/imagenes/Toffe Grille/img70.jpg" },
    { id: 96, nombre: "Punta de Anca", precio: 44900, categoria: "Toffe Grille", subcategoria: "N/A", descripcion: "Acompañado de papa francesa. ensalada de aguacate y chimichurri", imagen: "assets/imagenes/Toffe Grille/img95.jpg" }
];

let carrito = [];
// Costo de envío base en pesos (ej: 5000 pesos)
const costoEnvioBase = 5000; 
// 🚨 CAMBIA ESTE NÚMERO POR TU WHATSAPP (código de país + número)
const telefonoWhatsApp = "573001234567"; 

// ===============================================
// 2. ELEMENTOS DEL DOM
// ===============================================

const menuContainer = document.getElementById('menu-container');
const carritoItemsContainer = document.getElementById('carrito-items');
const filtroBotonesContainer = document.getElementById('botones-filtro');
const subtotalSpan = document.getElementById('subtotal');
const costoEnvioSpan = document.getElementById('costo-envio');
const totalFinalSpan = document.getElementById('total-final');


// ===============================================
// 3. FUNCIONES DE RENDERIZADO DEL MENÚ Y FILTROS
// ===============================================

function renderMenu(filtroCategoria = 'Todo') {
    menuContainer.innerHTML = '';
    
    let categorias = [...new Set(productos.map(p => p.categoria))];
    
    if (filtroCategoria !== 'Todo') {
        categorias = [filtroCategoria];
    }

    categorias.forEach(categoria => {
        const productosEnCategoria = productos.filter(p => p.categoria === categoria);
        
        const section = document.createElement('section');
        section.id = `categoria-${categoria.replace(/\s/g, '-')}`;
        section.classList.add('categoria-section');
        
        // Título Principal de la Categoría
        section.innerHTML = `<h2>${categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h2>`;

        // LÓGICA CONDICIONAL PARA EL BANNER
        if (categoria === 'Toffe Grille') { 
            const bannerHTML = `
                <section id="banner-categoria">
                    <img src="assets/imagenes/banner-parrilla.jpg" alt="Especialidades a la Parrilla" class="banner-categoria-img">
                </section>
            `;
            section.innerHTML += bannerHTML;
        }

        const subcategorias = [...new Set(productosEnCategoria.map(p => p.subcategoria === 'N/A' ? categoria : p.subcategoria))];

        subcategorias.forEach(subcategoria => {
            const productosEnSubcategoria = productosEnCategoria.filter(p => (p.subcategoria === 'N/A' && subcategoria === categoria) || p.subcategoria === subcategoria);
            
            if (subcategoria !== categoria) {
                const subTitle = document.createElement('h3');
                subTitle.textContent = subcategoria.charAt(0).toUpperCase() + subcategoria.slice(1);
                subTitle.classList.add('subcategoria-title'); 
                section.appendChild(subTitle);
            }

            // Detectar si la categoría debe usar formato de lista (Solo Horneados)
            const isListFormat = categoria === 'Horneados';

            // Usar 'items-list' para horneados y 'items-grid' para el resto
            const containerClass = isListFormat ? 'items-list' : 'items-grid';
            const container = document.createElement('div');
            container.classList.add(containerClass);

            productosEnSubcategoria.forEach(producto => {
                // Si la ruta está vacía o es nula, usa el placeholder por defecto
                const rutaImagen = producto.imagen || 'assets/imagenes/placeholder.jpg'; 
                const precioDisplay = producto.precio > 0 ? formatPrice(producto.precio) : "Consultar";
                
                let itemHTML = '';

                if (isListFormat) {
                    // FORMATO DE LISTA (SIN IMAGEN)
                    itemHTML = `
                        <div class="menu-item-list" 
                             data-id="${producto.id}" 
                             data-nombre="${producto.nombre}" 
                             data-precio="${producto.precio}">
                            
                            <div class="item-info-list">
                                <h3><strong>${producto.nombre}</strong></h3>
                                <p class="item-nota">${producto.descripcion || ''}</p>
                            </div>
                            
                            <div class="item-actions-list">
                                <p>Precio: $<span class="item-precio">${precioDisplay}</span></p>
                                <input type="text" class="nota-input" placeholder="Nota (opcional)">
                                <button onclick="agregarAlPedido(this)">¡Al Carrito!</button>
                            </div>
                        </div>
                    `;
                } else {
                    // FORMATO DE TARJETA (CON IMAGEN)
                    itemHTML = `
                        <div class="menu-item" 
                             data-id="${producto.id}" 
                             data-nombre="${producto.nombre}" 
                             data-precio="${producto.precio}">
                            
                            <img src="${rutaImagen}" alt="${producto.nombre}" class="item-imagen">
                            
                            <div class="item-info">
                                <h3><strong>${producto.nombre}</strong></h3>
                                <p class="item-nota">${producto.descripcion || ''}</p>
                                <p>Precio: $<span class="item-precio">${precioDisplay}</span></p>
                                
                                <input type="text" class="nota-input" placeholder="Nota (ej: sin sal, extra queso)">
                                
                                <button onclick="agregarAlPedido(this)">¡Al Carrito!</button>
                            </div>
                        </div>
                    `;
                }
                
                container.innerHTML += itemHTML;
            });
            
            section.appendChild(container);
        });

        menuContainer.appendChild(section);
    });
}

function renderFiltros() {
    const categorias = [...new Set(productos.map(p => p.categoria))].sort();
    
    let botonesHTML = `<button class="filtro-btn active" onclick="filtrarMenu('Todo', this)">Todo</button>`;

    categorias.forEach(categoria => {
        botonesHTML += `<button class="filtro-btn" onclick="filtrarMenu('${categoria}', this)">${categoria}</button>`;
    });

    filtroBotonesContainer.innerHTML = botonesHTML;
}

function filtrarMenu(categoria, elementoBoton) {
    document.querySelectorAll('.filtro-btn').forEach(btn => btn.classList.remove('active'));
    elementoBoton.classList.add('active');
    renderMenu(categoria);
}


// ===============================================
// 4. FUNCIONES DEL CARRITO
// ===============================================

function agregarAlPedido(boton) {
    const itemElement = boton.closest('.menu-item') || boton.closest('.menu-item-list');
    if (!itemElement) return;

    const id = parseInt(itemElement.dataset.id);
    const precio = parseInt(itemElement.dataset.precio); 
    const nombre = itemElement.dataset.nombre;
    const nota = itemElement.querySelector('.nota-input').value.trim();

    // Validar que el producto tenga un precio válido para agregar (si el precio es 0, requiere consulta)
    if (precio === 0) {
         alert(`El precio de "${nombre}" no está especificado. Por favor, agregue una nota o contacte para consultar el precio.`);
         // Si quieres evitar que se añada, descomenta la siguiente línea:
         // return;
    }


    const itemId = Date.now(); 

    const nuevoItem = {
        id: itemId, 
        productoId: id, 
        nombre: nombre,
        precio: precio,
        nota: nota,
    };

    carrito.push(nuevoItem);
    renderCarrito();
    
    itemElement.querySelector('.nota-input').value = ''; 
}

function removerDelPedido(itemId) {
    // Buscar el elemento específico a remover
    const itemToRemove = carrito.find(item => item.id === itemId);
    if (!itemToRemove) return;

    // Crear una clave de agrupación
    const key = itemToRemove.productoId + '|' + itemToRemove.nota;

    // 1. Filtramos todos los items que NO pertenecen a este grupo
    const itemsToKeep = carrito.filter(item => item.productoId + '|' + item.nota !== key);
    
    // 2. Filtramos solo los items que SÍ pertenecen a este grupo
    const itemsToChange = carrito.filter(item => item.productoId + '|' + item.nota === key);

    if (itemsToChange.length > 0) {
        // 3. Eliminamos SOLO el último elemento de este grupo (el que se renderizó con el lastItemId)
        itemsToChange.pop(); 
    }

    // 4. Reconstruimos el carrito con los items que no cambiaron + los items del grupo menos uno
    carrito = [...itemsToKeep, ...itemsToChange];
    renderCarrito();
}

function renderCarrito() {
    let subtotal = 0;
    carritoItemsContainer.innerHTML = '';

    if (carrito.length === 0) {
        carritoItemsContainer.innerHTML = '<p id="carrito-vacio-msg">El carrito está vacío.</p>';
        subtotalSpan.textContent = formatPrice(0);
        costoEnvioSpan.textContent = formatPrice(costoEnvioBase);
        totalFinalSpan.textContent = formatPrice(costoEnvioBase);
        return;
    }
    
    // Agrupa los ítems por producto y nota
    const resumen = carrito.reduce((acc, item) => {
        const key = item.productoId + '|' + item.nota;
        if (!acc[key]) {
            acc[key] = {
                ...item,
                cantidad: 0,
                precioTotal: 0,
                // Almacena un array de IDs para encontrar el "último" real
                itemIds: []
            };
        }
        acc[key].cantidad++;
        acc[key].precioTotal += item.precio;
        acc[key].itemIds.push(item.id); // Guardamos el ID
        subtotal += item.precio;
        return acc;
    }, {});
    
    // Renderizar el resumen agrupado
    Object.values(resumen).forEach(item => {
        // Para la eliminación, usamos el ID más alto para garantizar que el botón de remover elimine la última unidad añadida.
        const lastItemId = item.itemIds.length > 0 ? Math.max(...item.itemIds) : item.id; 
        
        const precioTotalFormateado = formatPrice(item.precioTotal); 
        const precioDisplay = item.precioTotal > 0 ? `$${precioTotalFormateado}` : "Consultar";

        const itemHTML = `
            <div class="pedido-item-row">
                <span style="font-weight: 600;">${item.cantidad}x ${item.nombre}</span>
                <div style="display: flex; align-items: center;">
                    <span style="font-weight: 500;">${precioDisplay}</span>
                    <button class="remove-btn" onclick="removerDelPedido(${lastItemId})">X</button>
                </div>
            </div>
            ${item.nota ? `<p style="font-size: 0.85em; color: #867970; margin-left: 10px;">* Nota: ${item.nota}</p>` : ''}
        `;
        carritoItemsContainer.innerHTML += itemHTML;
    });

    // Calcular totales
    const subtotalFinal = subtotal;
    const totalFinal = subtotalFinal + costoEnvioBase;
    
    // Actualizar totales en el HTML con el formato correcto
    subtotalSpan.textContent = formatPrice(subtotalFinal);
    costoEnvioSpan.textContent = formatPrice(costoEnvioBase);
    totalFinalSpan.textContent = formatPrice(totalFinal);
}


// ===============================================
// 5. FUNCIÓN DE CHECKOUT (WHATSAPP)
// ===============================================

function finalizarPedido() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío. Agrega productos para hacer un pedido.");
        return;
    }
    
    const nombre = document.getElementById('nombre').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;
    const metodoPago = document.getElementById('pago-select').value;
    
    if (!nombre || !direccion || !telefono) {
        alert("Por favor, completa todos los datos de envío (Nombre, Dirección, Teléfono).");
        return;
    }

    const resumen = carrito.reduce((acc, item) => {
        const key = item.productoId + '|' + item.nota;
        if (!acc[key]) {
            acc[key] = {
                nombre: item.nombre,
                precio: item.precio,
                nota: item.nota,
                cantidad: 0
            };
        }
        acc[key].cantidad++;
        return acc;
    }, {});

    let mensajePedido = "¡Hola! Mi nombre es *" + nombre + "* y quiero hacer un pedido:\n\n";
    let subtotal = 0;
    
    Object.values(resumen).forEach(item => {
        const precioTotalItem = item.cantidad * item.precio;
        subtotal += precioTotalItem;
        
        const precioTotalDisplay = item.precio > 0 ? `$${formatPrice(precioTotalItem)}` : "Consultar Total";

        mensajePedido += `${item.cantidad}x ${item.nombre} (${precioTotalDisplay})\n`;
        
        if (item.nota) {
            mensajePedido += `  - _Nota: ${item.nota}_\n`;
        }
    });

    const subtotalFinal = subtotal;
    const totalFinal = subtotalFinal + costoEnvioBase;

    mensajePedido += "\n-----------------------------------\n";
    mensajePedido += `*SUBTOTAL:* $${formatPrice(subtotalFinal)}\n`;
    mensajePedido += `*ENVÍO:* $${formatPrice(costoEnvioBase)}\n`;
    mensajePedido += `*TOTAL A PAGAR:* $${formatPrice(totalFinal)}\n`;
    mensajePedido += "-----------------------------------\n";
    
    mensajePedido += `\n*DATOS DE ENVÍO:*\n`;
    mensajePedido += `> 👤 *Contacto:* ${telefono}\n`;
    mensajePedido += `> 🏠 *Dirección:* ${direccion}\n`;
    mensajePedido += `> 💰 *Paga con:* ${metodoPago.toUpperCase()}\n`;
    
    const mensajeCodificado = encodeURIComponent(mensajePedido);
    const urlWhatsApp = `https://wa.me/${telefonoWhatsApp}?text=${mensajeCodificado}`;
    
    window.open(urlWhatsApp, '_blank');
    
    // Limpiar carrito y formulario después de enviar
    carrito = [];
    renderCarrito();
    document.getElementById('nombre').value = '';
    document.getElementById('direccion').value = '';
    document.getElementById('telefono').value = '';
    
    alert("¡Pedido enviado a WhatsApp! Por favor, verifica el mensaje antes de enviarlo.");
}


// ===============================================
// 6. INICIALIZACIÓN
// ===============================================

window.onload = function() {
    // Inicializa el costo de envío y el total mínimo al cargar
    costoEnvioSpan.textContent = formatPrice(costoEnvioBase);
    totalFinalSpan.textContent = formatPrice(costoEnvioBase);
    
    // Carga los filtros y el menú completo
    renderFiltros();
    renderMenu('Todo'); 
    
    // Asocia la función de finalizar pedido al botón
    document.getElementById('finalizar-pedido-btn').addEventListener('click', finalizarPedido);
};