// ===============================================
// 1. DATOS DEL MENÚ
// ===============================================
const data = [
    // El formato (card o list) se ha ajustado según tu solicitud.
    // NOTA: Las rutas de imagen deben ser relativas a la carpeta donde se ejecuta index.html
    
    // A La Marinera (Formato Card)
    { id: 1, nombre: "Bagre en Salsa Criolla", precio: "35.900", categoria: "A La Marinera", descripcion: "Acompañado de Arroz, Ensalada de la casa, patacon y yuca frita", imagen: "assets/imagenes/A La Marinera/img13.jpg", formato: "card" },
    { id: 2, nombre: "Filete de Merlusa", precio: "25.900", categoria: "A La Marinera", descripcion: "Pidelo Con ensalada de la casa o Vegetales al Wok", imagen: "assets/imagenes/A La Marinera/img9.jpg", formato: "card" },
    { id: 3, nombre: "Mini Trucha", precio: "25.900", categoria: "A La Marinera", descripcion: "Pidelo Con ensalada de la casa o Vegetales al Wok", imagen: "assets/imagenes/A La Marinera/img8.jpg", formato: "card" },
    { id: 4, nombre: "Salmon", precio: "45.000", categoria: "A La Marinera", descripcion: "Pidelo en salsa de Maracuya o al Ajillo, Acompañado de ensalada de la casa, con pure de papa o papa a la francesa", imagen: "assets/imagenes/A La Marinera/img139.jpg", formato: "card" },
    { id: 5, nombre: "Trucha al ajillo", precio: "35.900", categoria: "A La Marinera", descripcion: "O tambien Pidelo en salsa de champiñones Acompañado de Ensalada de la casa o papa fracesa", imagen: "assets/imagenes/A La Marinera/img12.jpg", formato: "card" },
    
    // Combos Teriyaki (Formato Card)
    { id: 6, nombre: "Teriyaki Clásico", precio: "66.900", categoria: "Combos Teriyaki", descripcion: "5 porciones con Lomo de res. trozos de pechuga y cerdo, con vegetales al wok y arroz yakimeshi", imagen: "assets/imagenes/Combos Teriyaki/img223.jpg", formato: "card" },
    { id: 7, nombre: "Teriyaki Especial", precio: "84.900", categoria: "Combos Teriyaki", descripcion: "5 porciones con Camarones. Lomo de res. Trozos de pechuga y cerdo Acompañado de Papas a la Francesa", imagen: "assets/imagenes/Combos Teriyaki/img214.jpg", formato: "card" },
    { id: 8, nombre: "Teriyaki Familiar", precio: "78.900", categoria: "Combos Teriyaki", descripcion: "5 porciones con Lomo de res, trozos de pechuga y cerdo con vegetales al wok y arroz yakimeshi Acompañado de Papa a la Francesa y Gaseosa", imagen: "assets/imagenes/Combos Teriyaki/img211.jpg", formato: "card" },

    // Crepes (Formato Card)
    { id: 9, nombre: "Champiñon y Pollo", precio: "17.000", categoria: "Crepes", descripcion: "Trozos de Pollo, bañado en salsa de champiñon con queso mozarella", imagen: "assets/imagenes/Crepes/img185.jpg", formato: "card" },
    { id: 10, nombre: "Crepes de Dulce", precio: "16.900", categoria: "Crepes", descripcion: "Fresas, banano, trozos de durazno crema de leche y Helado", imagen: "assets/imagenes/Crepes/img188.jpg", formato: "card" },
    { id: 11, nombre: "Crepes Mixto", precio: "17.900", categoria: "Crepes", descripcion: "Trozos de lomo y pollo. bañado en salsa de la casa, con queso mozarella", imagen: "assets/imagenes/Crepes/img191.jpg", formato: "card" },
    { id: 12, nombre: "Wafles con Fruta", precio: "0", categoria: "Crepes", descripcion: "Crujiente por fuera y suave por dentro, decorado con frutas frescas, crema chantilly y miel maple (PRECIO NO ESPECIFICADO)", imagen: "assets/imagenes/Crepes/img197.jpg", formato: "card" },

    // Desayunos (Formato Card)
    { id: 13, nombre: "Amor Perfecto", precio: "18.900", categoria: "Desayunos", descripcion: "Fresco pan de Semillas - Queso Crema. Huevos Revueltos - Aguacate Fresco Yogurt Griego - Granola - Fresas Mora - Kiwy", imagen: "assets/imagenes/Desayunos/img53.jpg", formato: "card" },
    { id: 14, nombre: "Bisteck a Caballo", precio: "18.900", categoria: "Desayunos", descripcion: "Carne en Salsa Criolla con huevo, arroz y arepa", imagen: "assets/imagenes/Desayunos/img36.jpg", formato: "card" },
    { id: 15, nombre: "Calentao Paisa", precio: "16.500", categoria: "Desayunos", descripcion: "Frijol, arroz, chorizo, plátano, huevo frito y arepa", imagen: "assets/imagenes/Desayunos/img15.jpg", formato: "card" },
    { id: 16, nombre: "Cereal", precio: "8.900", categoria: "Desayunos", descripcion: "", imagen: "assets/imagenes/Desayunos/img97.jpg", formato: "card" },
    { id: 17, nombre: "Changua Especial", precio: "10.900", categoria: "Desayunos", descripcion: "Con Almojabana y Queso", imagen: "assets/imagenes/Desayunos/img251.jpg", formato: "card" },
    { id: 18, nombre: "Changua Sencilla", precio: "8.500", categoria: "Desayunos", descripcion: "", imagen: "(Vacio)", formato: "card" }, 
    { id: 19, nombre: "Chocolate Toffe", precio: "14.500", categoria: "Desayunos", descripcion: "Pan de Bono. Queso Campesino Almojabana y Chocolate", imagen: "assets/imagenes/Desayunos/img258.jpg", formato: "card" },
    { id: 20, nombre: "Croque Madame en Grano Noble", precio: "17.900", categoria: "Desayunos", descripcion: "Pan multigranos con aguacate laminado, acompañados de exquisito croque madame, bañado en salsa holandesa y bacon ahumado", imagen: "assets/imagenes/Desayunos/img74.jpg", formato: "card" },
    { id: 21, nombre: "Cumbre Italiana", precio: "18.900", categoria: "Desayunos", descripcion: "Pan Focaccia - Crema de Aguacate Trozos de Pollo Tomate Cherry Huevo Cocido - Salsa Bechamel", imagen: "assets/imagenes/Desayunos/img54.jpg", formato: "card" },
    { id: 22, nombre: "Desayuno Buenos Días", precio: "16.500", categoria: "Desayunos", descripcion: "Delicioso desayuno al estilo texano. Huevos rancheros en mozarella, acompañado de frutas frescas, rodajas de pan aliñado y jugo de naranja natural", imagen: "assets/imagenes/Desayunos/img255.jpg", formato: "card" },
    { id: 23, nombre: "Extasis en Crocancia de Pan", precio: "18.900", categoria: "Desayunos", descripcion: "Tajada de pan de Centeno esparcidas en cheese cream, con el frescar de la lechuga, la dulzura de los tomates cherry, la intesnidad del pimiento y la elegancia de la cebolla asada, acompañadas de champiñones, huevos pochados y crocancia de bacon.", imagen: "assets/imagenes/Desayunos/img71.jpg", formato: "card" },
    { id: 24, nombre: "Fruti Granola", precio: "13.900", categoria: "Desayunos", descripcion: "", imagen: "assets/imagenes/Desayunos/img95.jpg", formato: "card" },
    { id: 25, nombre: "Huerto de Atun", precio: "15.900", categoria: "Desayunos", descripcion: "Ensalada de lechuga con lomitos de Atún. acompañada de huevo cocido, tomates cherry. aguacate y queso", imagen: "assets/imagenes/Desayunos/img89.jpg", formato: "card" },
    { id: 26, nombre: "Huevos al Nido", precio: "14.900", categoria: "Desayunos", descripcion: "Huevos Fritos, tocineta y Papa Francesa", imagen: "assets/imagenes/Desayunos/img35.jpg", formato: "card" },
    { id: 27, nombre: "Huevos Escalfados", precio: "11.900", categoria: "Desayunos", descripcion: "Acompañados de Jamón, queso y arepa con Mantequilla y Mermelada", imagen: "assets/imagenes/Desayunos/img33.jpg", formato: "card" },
    { id: 28, nombre: "Huevos Jalapeños", precio: "13.500", categoria: "Desayunos", descripcion: "Huevos batidos en mantequilla clarificada, queso mozarella. champiñon ahumado, bacón y jamón ahumado, con unos deliciosos chiles jalapeños", imagen: "assets/imagenes/Desayunos/img17.jpg", formato: "card" },
    { id: 29, nombre: "Huevos Rancheros Especiales", precio: "13.500", categoria: "Desayunos", descripcion: "Huevos sumergidos en salsa ranchera con salchicha ranchera con arepa asada", imagen: "assets/imagenes/Desayunos/img39.jpg", formato: "card" },
    { id: 30, nombre: "Jardin de Sabores", precio: "16.900", categoria: "Desayunos", descripcion: "Ensalada de lechuga con Pollo a las finas hierbas corte en julianas, acompañada de huevo cocido, tomates cherry y láminas de palta", imagen: "assets/imagenes/Desayunos/img88.jpg", formato: "card" },
    { id: 31, nombre: "Migao de Chocolate", precio: "12.900", categoria: "Desayunos", descripcion: "", imagen: "assets/imagenes/Desayunos/img21.jpg", formato: "card" },
    { id: 32, nombre: "Omelet de Carne", precio: "13.900", categoria: "Desayunos", descripcion: "Carne desmechada. Maíz tierno, queso mozarella y tocineta", imagen: "assets/imagenes/Desayunos/img113.jpg", formato: "card" },
    { id: 33, nombre: "Omelet de Pollo", precio: "13.500", categoria: "Desayunos", descripcion: "Pollo salteado con finas hiervas.queso mozarella y champiñon", imagen: "assets/imagenes/Desayunos/img114.jpg", formato: "card" },
    { id: 34, nombre: "Omelet Especial", precio: "13.900", categoria: "Desayunos", descripcion: "Maiz tierno, tocineta, champiñón queso mozarella. jamón, pollo", imagen: "assets/imagenes/Desayunos/img112.jpg", formato: "card" },
    { id: 35, nombre: "Omelet Vegetariano", precio: "13.900", categoria: "Desayunos", descripcion: "Clara de huevo, aceite de Oliva espinaca, brocoli, champinon, , maiz tierno y queso", imagen: "assets/imagenes/Desayunos/img111.jpg", formato: "card" },
    { id: 36, nombre: "Pancakes De la Casa", precio: "18.900", categoria: "Desayunos", descripcion: "Huevos en omelette, acompañados con unos tiernos pancakes americanos, miel de maple, frutilla y durazno laminado.", imagen: "assets/imagenes/Desayunos/img13.jpg", formato: "card" },
    { id: 37, nombre: "Parafait Miel/Granola", precio: "13.900", categoria: "Desayunos", descripcion: "Frutal Cremoso y saludable. postre matutino en yogurth griego, acompañado de frutillas, melocotones bañados en miel natural y coulis de frutos rojos.", imagen: "assets/imagenes/Desayunos/img94.jpg", formato: "card" },
    { id: 38, nombre: "Pollo en Hogaza y Bechamel", precio: "17.900", categoria: "Desayunos", descripcion: "Pan Ciabata - Crema de Aguacate Trozos de Pollo Tomate Cherry Huevo Cocido - Salsa Bechamel", imagen: "assets/imagenes/Desayunos/img56.jpg", formato: "card" },
    { id: 39, nombre: "Porción de Frutas", precio: "8.900", categoria: "Desayunos", descripcion: "", imagen: "assets/imagenes/Desayunos/img96.jpg", formato: "card" },
    { id: 40, nombre: "Ritual Matutino de Sibarita", precio: "19.500", categoria: "Desayunos", descripcion: "Caldo de costilla, tostadas con mantequilla, huevos revueltos al gusto de la abuela con la sinfonía de cebolla y tomate acompañado de un Chocolatico de molinillo con su espuma.", imagen: "assets/imagenes/Desayunos/img257.jpg", formato: "card" },
    { id: 41, nombre: "Tesoros de Salmón", precio: "27.900", categoria: "Desayunos", descripcion: "Tostadas de guacamole con huevo cocido, abrazadas por el ahumado salmon del mar acompañadas de lechuga y tomates cherry.", imagen: "assets/imagenes/Desayunos/img72.jpg", formato: "card" },
    { id: 42, nombre: "Wafles con Frutas", precio: "0", categoria: "Desayunos", descripcion: "(PRECIO NO ESPECIFICADO)", imagen: "assets/imagenes/Desayunos/img75.jpg", formato: "card" },

    // Entradas (Formato Card)
    { id: 43, nombre: "Coctel de Camarones", precio: "18.900", categoria: "Entradas", descripcion: "Canasta Crocante de Platano con Camarones", imagen: "assets/imagenes/Entradas/img40.jpg", formato: "card" },
    { id: 44, nombre: "Patacón con Hogao", precio: "15.000", categoria: "Entradas", descripcion: "Crocante Patacón con hogao y carne desmechada", imagen: "assets/imagenes/Entradas/img43.jpg", formato: "card" },
    { id: 45, nombre: "Salchipapa Americana", precio: "15.900", categoria: "Entradas", descripcion: "", imagen: "assets/imagenes/Entradas/img49.jpg", formato: "card" },

    // Especiales Gourmet (Formato Card)
    { id: 46, nombre: "Cerdo Tipacay", precio: "24.900", categoria: "Especiales Gourmet", descripcion: "Cerdo con vegetales al wok ACOMPAÑADO DE papa a la Francesa", imagen: "assets/imagenes/Especiales Gourmet/img53.jpg", formato: "card" },
    { id: 47, nombre: "Roll de Pollo Grille", precio: "24.900", categoria: "Especiales Gourmet", descripcion: "Pechuga a la parrilla acompañada de papa criolla PIDELO CON Ensalada de la casa o Vegetales al wok", imagen: "assets/imagenes/Especiales Gourmet/img63.jpg", formato: "card" },
    { id: 48, nombre: "Salteado del Atlántico", precio: "32.000", categoria: "Especiales Gourmet", descripcion: "Cubos de Salmón salteados con vegetales al wok ACOMPAÑADOS con papa a la francesa", imagen: "assets/imagenes/Especiales Gourmet/img60.jpg", formato: "card" },
    { id: 49, nombre: "Steak la Parrilla", precio: "25.900", categoria: "Especiales Gourmet", descripcion: "PIDELO CON Ensalada de la casa o Vegetales al wok", imagen: "assets/imagenes/Especiales Gourmet/img66.jpg", formato: "card" },

    // Especiales Wok (Formato Card)
    { id: 50, nombre: "Beef Teriyaki", precio: "27.900", categoria: "Especiales Wok", descripcion: "Lomo de res en salsa teriyaki Acompañado de Vegetales a la Plancha", imagen: "assets/imagenes/Especiales Wok/img157.jpg", formato: "card" },
    { id: 51, nombre: "Chiken Noodles", precio: "25.900", categoria: "Especiales Wok", descripcion: "Pasta Ramel al wok con 200gr de pollo ACOMPAÑADO Champiñones, maiz tierno y Brocoli, Bañado en salsa teriyaki", imagen: "assets/imagenes/Especiales Wok/img161.jpg", formato: "card" },
    { id: 52, nombre: "Chiken Teriyaki", precio: "26.900", categoria: "Especiales Wok", descripcion: "Pechuga de Pollo en salsa teriyaki ACOMPAÑADO de vegetales al wok", imagen: "assets/imagenes/Especiales Wok/img145.jpg", formato: "card" },
    { id: 53, nombre: "Especial Jakimeshi Lomo", precio: "26.900", categoria: "Especiales Wok", descripcion: "Mezcla de Pollo o lomo de res con arroz frito y vegetales", imagen: "assets/imagenes/Especiales Wok/img152.jpg", formato: "card" },
    { id: 54, nombre: "Especial Jakimeshi Pollo", precio: "24.900", categoria: "Especiales Wok", descripcion: "Mezcla de Pollo o lomo de res con arroz frito y vegetales", imagen: "assets/imagenes/Especiales Wok/img151.jpg", formato: "card" },
    { id: 55, nombre: "Menu Infantil", precio: "25.900", categoria: "Especiales Wok", descripcion: "Trozos de Pollo en salsa teriyaki Acompañado de arroz yakimeshi o pastas. Incluye Jugo y Helado NOTA: Este menu es solo para niños.", imagen: "assets/imagenes/Especiales Wok/img194.jpg", formato: "card" },
    { id: 56, nombre: "Teppanyaki Conection", precio: "29.900", categoria: "Especiales Wok", descripcion: "Lomo de res y pechuga a la plancha, marinados en salsa teriyaki, acompañado de vegetales a la planchay arroz yakimechi", imagen: "assets/imagenes/Especiales Wok/img170.jpg", formato: "card" },
    { id: 57, nombre: "Teppanyaki de Camarones", precio: "35.900", categoria: "Especiales Wok", descripcion: "Vegetales al wok con camarones salteados", imagen: "assets/imagenes/Especiales Wok/img167.jpg", formato: "card" },
    { id: 58, nombre: "Teriyaki Mixto", precio: "35.900", categoria: "Especiales Wok", descripcion: "Langostinos, lomo de res, camarones, trozos de pollo. marinados en salsa teriyaki ACOMPAÑADO de vegetales a la plancha y Arroz Yakimeshi", imagen: "assets/imagenes/Especiales Wok/img164.jpg", formato: "card" },
    { id: 59, nombre: "Tokio Mignon", precio: "29.600", categoria: "Especiales Wok", descripcion: "200gr de Lomo con tocineta (libre de Grasa), Acompañado de Champiñones y arroz yakimeshi", imagen: "assets/imagenes/Especiales Wok/img148.jpg", formato: "card" },

    // Horneados (Formato List)
    { id: 60, nombre: "Alfajor", precio: "3.600", categoria: "Horneados", descripcion: "", imagen: "(Vacio)", formato: "list" },
    { id: 61, nombre: "Almojabana", precio: "3.500", categoria: "Horneados", descripcion: "", imagen: "(Vacio)", formato: "list" },
    { id: 62, nombre: "Corazones", precio: "3.800", categoria: "Horneados", descripcion: "", imagen: "(Vacio)", formato: "list" },
    { id: 63, nombre: "Croissant de Chocolate", precio: "4.500", categoria: "Horneados", descripcion: "", imagen: "(Vacio)", formato: "list" },
    { id: 64, nombre: "Croissant", precio: "4.000", categoria: "Horneados", descripcion: "", imagen: "(Vacio)", formato: "list" },
    { id: 65, nombre: "Danesas", precio: "4.200", categoria: "Horneados", descripcion: "", imagen: "(Vacio)", formato: "list" },
    { id: 66, nombre: "Domo mini Muffins (12 unid)", precio: "15.000", categoria: "Horneados", descripcion: "", imagen: "(Vacio)", formato: "list" },
    { id: 67, nombre: "Galleta de Avena", precio: "2.500", categoria: "Horneados", descripcion: "", imagen: "(Vacio)", formato: "list" },
    { id: 68, nombre: "Galleta de Chips de Chocolate", precio: "2.700", categoria: "Horneados", descripcion: "", imagen: "(Vacio)", formato: "list" },
    { id: 69, nombre: "Galleta de Granola", precio: "3.800", categoria: "Horneados", descripcion: "", imagen: "(Vacio)", formato: "list" },
    { id: 70, nombre: "Galleta Florentina de Mani", precio: "3.800", categoria: "Horneados", descripcion: "", imagen: "(Vacio)", formato: "list" },
    { id: 71, nombre: "Galleta Infantil", precio: "3.200", categoria: "Horneados", descripcion: "", imagen: "(Vacio)", formato: "list" },
    { id: 72, nombre: "Mantecada", precio: "4.000", categoria: "Horneados", descripcion: "", imagen: "(Vacio)", formato: "list" },
    { id: 73, nombre: "Milhoja", precio: "6.000", categoria: "Horneados", descripcion: "", imagen: "(Vacio)", formato: "list" },
    { id: 74, nombre: "Palito de Queso", precio: "4.000", categoria: "Horneados", descripcion: "", imagen: "(Vacio)", formato: "list" },
    { id: 75, nombre: "Pan de Bono", precio: "3.500", categoria: "Horneados", descripcion: "", imagen: "(Vacio)", formato: "list" },
    { id: 76, nombre: "PAN DE LA ABUELA", precio: "5.000", categoria: "Horneados", descripcion: "", imagen: "(Vacio)", formato: "list" },
    { id: 77, nombre: "Pasabocas", precio: "1.900", categoria: "Horneados", descripcion: "", imagen: "(Vacio)", formato: "list" },
    { id: 78, nombre: "Pastel Carne", precio: "4.600", categoria: "Horneados", descripcion: "", imagen: "(Vacio)", formato: "list" },
    { id: 79, nombre: "Pastel Gloria", precio: "4.000", categoria: "Horneados", descripcion: "", imagen: "(Vacio)", formato: "list" },
    { id: 80, nombre: "Pastel Pollo", precio: "4.600", categoria: "Horneados", descripcion: "", imagen: "(Vacio)", formato: "list" },
    { id: 81, nombre: "Rollo de Canela", precio: "4.000", categoria: "Horneados", descripcion: "", imagen: "(Vacio)", formato: "list" },
    { id: 82, nombre: "Sandwich de jamón queso", precio: "7.500", categoria: "Horneados", descripcion: "", imagen: "(Vacio)", formato: "list" },
    { id: 83, nombre: "Sandwich de Pollo", precio: "8.500", categoria: "Horneados", descripcion: "", imagen: "(Vacio)", formato: "list" },
    { id: 84, nombre: "Trufas de Chocolate", precio: "2.500", categoria: "Horneados", descripcion: "", imagen: "(Vacio)", formato: "list" },

    // Pastas De La Casa (Formato Card)
    { id: 85, nombre: "Pasta a la Marinera", precio: "31.900", categoria: "Pastas De La Casa", descripcion: "ACOMPAÑADO de Pan de Ajo", imagen: "assets/imagenes/Pastas De La Casa/img120.jpg", formato: "card" },
    { id: 86, nombre: "Pasta Alfredo", precio: "20.900", categoria: "Pastas De La Casa", descripcion: "Con jamón y Maiz Tierno ACOMPAÑADO de Pan de Ajo", imagen: "assets/imagenes/Pastas De La Casa/img131.jpg", formato: "card" },
    { id: 87, nombre: "Pasta Carbonara", precio: "22.900", categoria: "Pastas De La Casa", descripcion: "Con tocineta y champiñones ACOMPAÑADO de Pan de Ajo", imagen: "assets/imagenes/Pastas De La Casa/img133.jpg", formato: "card" },
    { id: 88, nombre: "Pasta de la Casa", precio: "35.900", categoria: "Pastas De La Casa", descripcion: "Con cubos de Salmón y Langostinos", imagen: "assets/imagenes/Pastas De La Casa/img123.jpg", formato: "card" },

    // Toffe Grille (Formato Card)
    { id: 89, nombre: "Bife de Chorizo", precio: "46.900", categoria: "Toffe Grille", descripcion: "Acompañado de papa francesa. ensalada de la casa y chimichurri", imagen: "assets/imagenes/Toffe Grille/img79.jpg", formato: "card" },
    { id: 90, nombre: "Churrasco Argentino", precio: "45.900", categoria: "Toffe Grille", descripcion: "Acompañado de Queso grille Chorizo Ranchero, Ensalada de la casa. Yuca frita y Chimichurri", imagen: "assets/imagenes/Toffe Grille/img92.jpg", formato: "card" },
    { id: 91, nombre: "Costillas BBQ", precio: "36.900", categoria: "Toffe Grille", descripcion: "350gr de Deliciosas costillas de Cerdo. bañadas en salsa bbq. Acompañado de Aros de Cebolla. Papa Francesa y ensalada de la casa", imagen: "assets/imagenes/Toffe Grille/img89.jpg", formato: "card" },
    { id: 92, nombre: "Filet Mignon", precio: "48.900", categoria: "Toffe Grille", descripcion: "Tierno de lomo fino de res bañada en salsa demi-glace. Acompañado de papa francesa. ensalada de la casa", imagen: "assets/imagenes/Toffe Grille/img86.jpg", formato: "card" },
    { id: 93, nombre: "Mini Churrasco", precio: "29.900", categoria: "Toffe Grille", descripcion: "Delicioso Corte de Chata. acompañado de Yuca y chimichurri, PIDELO con Ensalada de la casa o Vegetales al wok", imagen: "assets/imagenes/Toffe Grille/img82.jpg", formato: "card" },
    { id: 94, nombre: "Pechuga en Salsa de Champiñones", precio: "31.900", categoria: "Toffe Grille", descripcion: "Acompañado de yuca frita y ensalada de la Casa", imagen: "assets/imagenes/Toffe Grille/img73.jpg", formato: "card" },
    { id: 95, nombre: "Pechuga Parmesana", precio: "31.900", categoria: "Toffe Grille", descripcion: "Acompañado de tomate, ensalada de la casa y papa francesa.", imagen: "assets/imagenes/Toffe Grille/img70.jpg", formato: "card" },
    { id: 96, nombre: "Punta de Anca", precio: "44.900", categoria: "Toffe Grille", descripcion: "Acompañado de papa francesa. ensalada de aguacate y chimichurri", imagen: "assets/imagenes/Toffe Grille/img95.jpg", formato: "card" }
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

function parsePrecio(precioString) {
    // Maneja casos donde el precio puede ser "0" o un string vacío
    if (!precioString || precioString.trim() === '0') return 0;
    return parseInt(precioString.replace(/\./g, ''));
}


function formatPrecio(numero) {
    return new Intl.NumberFormat('es-CO').format(numero);
}

function isValidImage(imagePath) {
    // Verifica si la ruta no está vacía, nula, o marcada como "(Vacio)"
    return imagePath && imagePath.trim() !== '' && imagePath.trim().toLowerCase() !== '(vacio)';
}


// ===============================================
// 4. LÓGICA DE RENDERIZADO DEL MENÚ
// ===============================================

function renderItemCard(item) {
    const precioNumerico = parsePrecio(item.precio);
    const precioDisplay = precioNumerico > 0 ? `$${item.precio}` : 'Precio no especificado';
    
    const hasImage = isValidImage(item.imagen);
    
    const imageHtml = hasImage ? 
        `<img class="item-imagen" src="${item.imagen}" alt="${item.nombre}">` :
        `<div class="item-imagen no-image-placeholder"><h3>${item.nombre}</h3><p>Sin imagen disponible</p></div>`;

    return `
        <div class="menu-item" data-id="${item.id}" data-categoria="${item.categoria}" data-precio="${precioNumerico}">
            ${imageHtml}
            <div class="item-info">
                ${hasImage ? `<h3>${item.nombre}</h3>` : ''} 
                <p class="item-nota">${item.descripcion}</p>
                <p class="item-precio"> ${precioDisplay}</p>
                <input type="text" class="nota-input" placeholder="Nota: Sin cebolla, extra queso, etc. (Opcional)">
                <button class="add-to-cart-btn" data-id="${item.id}" ${precioNumerico === 0 ? 'disabled' : ''}>Añadir al Carrito</button>
            </div>
        </div>
    `;
}

function renderItemList(item) {
    const precioNumerico = parsePrecio(item.precio);
    const precioDisplay = precioNumerico > 0 ? `$${item.precio}` : 'Precio no especificado';
    
    const hasImage = isValidImage(item.imagen);
    const hasDescription = item.descripcion && item.descripcion.trim() !== '';
    
    const itemClass = hasImage ? 'menu-item-list with-image' : 'menu-item-list no-image';

    return `
        <div class="${itemClass}" data-id="${item.id}" data-categoria="${item.categoria}" data-precio="${precioNumerico}">
            ${hasImage ? `<img class="item-thumb" src="${item.imagen}" alt="${item.nombre}">` : ''} 
            <div class="item-info-list">
                <h3>${item.nombre}</h3>
                ${hasDescription ? `<p class="item-nota">${item.descripcion}</p>` : ''}
            </div>
            <div class="item-actions-list">
                <p class="item-precio">${precioDisplay}</p>
                <input type="text" class="nota-input" placeholder="Nota (Opcional)">
                <button class="add-to-cart-btn" data-id="${item.id}" ${precioNumerico === 0 ? 'disabled' : ''}>+</button>
            </div>
        </div>
    `;
}

// Renderiza todas las categorías en el orden de los datos
function renderMenu() {
    menuContainer.innerHTML = '';
    const itemsAgrupados = {};

    // 1. Agrupar todos los elementos por categoría
    data.forEach(item => {
        if (!itemsAgrupados[item.categoria]) {
            itemsAgrupados[item.categoria] = [];
        }
        itemsAgrupados[item.categoria].push(item);
    });

    // 2. Renderizar todas las categorías
    for (const categoria in itemsAgrupados) {
        // Genera el ID para que los botones puedan hacer scroll a él
        const categoriaId = `categoria-${categoria.replace(/\s/g, '-')}`; 
        
        // El h2 tiene un padding/margin especial en CSS para que el scroll funcione debajo de la barra sticky
        let htmlCategoria = `<h2 id="${categoriaId}" class="subcategoria-title">${categoria}</h2>`;
        
        // Determina el formato
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

    attachEventListeners();
}

function renderFiltros() {
    botonesFiltro.innerHTML = '';

    let allBtn = document.createElement('button');
    allBtn.className = 'filtro-btn active';
    allBtn.textContent = 'Todos';
    allBtn.dataset.categoria = 'Todos';
    botonesFiltro.appendChild(allBtn);

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

function addToCart(id, nota = '') {
    const item = data.find(p => p.id === id);
    if (item && parsePrecio(item.precio) > 0) { // Solo añadir si el precio es > 0
        const cartItemId = `${item.id}-${Date.now()}`; 
        
        carrito.push({
            cartId: cartItemId,
            id: item.id,
            nombre: item.nombre,
            precio: parsePrecio(item.precio),
            nota: nota
        });
        renderCarrito();
    } else {
        alert("Este producto no puede ser añadido al carrito porque no tiene un precio válido.");
    }
}


function removeFromCart(cartId) {
    carrito = carrito.filter(item => item.cartId !== cartId);
    renderCarrito();
}

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
            if (item.nota) {
                const notaElement = document.createElement('p');
                notaElement.className = 'item-nota-carrito';
                notaElement.textContent = `Nota: ${item.nota}`;
                itemElement.appendChild(notaElement);
            }
            carritoItemsScroll.appendChild(itemElement);
        });
        
        document.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                removeFromCart(e.target.dataset.cartId);
            });
        });
    }

    calcularTotal();
}

function calcularTotal() {
    const subtotal = carrito.reduce((sum, item) => sum + item.precio, 0);
    const totalFinal = subtotal + (carrito.length > 0 ? costoEnvio : 0);

    document.getElementById('subtotal').textContent = formatPrecio(subtotal);
    document.getElementById('costo-envio').textContent = carrito.length > 0 ? formatPrecio(costoEnvio) : '0';
    document.getElementById('total-final').textContent = formatPrecio(totalFinal);
}


// ===============================================
// 6. LÓGICA DE WHATSAPP (NÚMERO ACTUALIZADO)
// ===============================================

function generarMensajeWhatsApp() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    // ⚠️ NÚMERO DE WHATSAPP ACTUALIZADO A 3246812450
    const whatsappNumber = '3246812450'; 

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
// 7. LISTENERS Y EJECUCIÓN INICIAL (LÓGICA DE SCROLL)
// ===============================================

function attachEventListeners() {
    // Escucha eventos del menú (añadir al carrito)
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.removeEventListener('click', handleAddToCart); 
        btn.addEventListener('click', handleAddToCart);
    });

    // Escucha eventos de los filtros (scroll de navegación)
    document.querySelectorAll('.filtro-btn').forEach(btn => {
        btn.removeEventListener('click', handleFilterClick);
        btn.addEventListener('click', handleFilterClick);
    });
}

function handleAddToCart(e) {
    const id = parseInt(e.target.dataset.id);
    let itemElement;
    if (e.target.closest('.menu-item')) { 
        itemElement = e.target.closest('.menu-item');
    } else if (e.target.closest('.menu-item-list')) { 
        itemElement = e.target.closest('.menu-item-list');
    }

    const notaInput = itemElement ? itemElement.querySelector('.nota-input') : null;
    const nota = notaInput ? notaInput.value.trim() : '';

    addToCart(id, nota);
}

// Función de navegación con Scroll
function handleFilterClick(e) {
    // 1. Manejo de la clase activa en los botones
    document.querySelectorAll('.filtro-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    e.target.classList.add('active');

    // 2. Lógica de Scroll
    const categoria = e.target.dataset.categoria;
    
    // Si la categoría es 'Todos', simplemente vuelve al inicio del menú.
    if (categoria === 'Todos') {
        // Scroll a la parte superior del contenedor principal del menú
        document.getElementById('app-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        // Scroll a la categoría específica (el elemento h2 con su ID)
        const targetId = `categoria-${categoria.replace(/\s/g, '-')}`;
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Utilizamos scrollIntoView con un desplazamiento hacia el inicio.
            // El CSS (padding/margin) se encarga de que el título quede visible bajo la barra sticky.
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
    renderFiltros();
    // Llamar a renderMenu sin filtro para mostrar todo el contenido
    renderMenu();
    renderCarrito(); 

    finalizarPedidoBtn.addEventListener('click', generarMensajeWhatsApp);
});