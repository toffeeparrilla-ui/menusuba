// =======================================================
// 1. CONSTANTES Y DATOS DE MENÚ (168 PRODUCTOS)
// =======================================================

// URL de la aplicación web de Google Apps Script para guardar pedidos
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwqb3YaoRm3Qfn3krLQW4WsmjxQ8DsPpb6QTfwJH_mv2hzelbORxrZjpFRd72FRhy-v/exec'; 

// ✅ NÚMERO DE WHATSAPP ACTUALIZADO
const numeroWhatsApp = '573219959831'; 

// Costo de envío
const costoEnvio = 4000; 

// Base de datos de productos (¡CATÁLOGO COMPLETO DE 168 PRODUCTOS con 17 categorías nuevas!)
const data = [
    // A La Marinera
    { id: 1, nombre: "Bagre en Salsa Criolla", precio: 35900, categoria: "A La Marinera", descripcion: "Acompañado de Arroz, Ensalada de la casa, patacon y yuca frita", imagen: "assets/imagenes/A La Marinera/img13.jpg" },
    { id: 2, nombre: "Filete de Merlusa", precio: 25900, categoria: "A La Marinera", descripcion: "Pidelo Con ensalada de la casa o Vegetales al Wok", imagen: "assets/imagenes/A La Marinera/img9.jpg" },
    { id: 3, nombre: "Mini Trucha", precio: 25900, categoria: "A La Marinera", descripcion: "Pidelo Con ensalada de la casa o Vegetales al Wok", imagen: "assets/imagenes/A La Marinera/img8.jpg" },
    { id: 4, nombre: "Salmon", precio: 45000, categoria: "A La Marinera", descripcion: "Pidelo en salsa de Maracuya o al Ajillo, Acompañado de ensalada de la casa, con pure de papa o papa a la francesa", imagen: "assets/imagenes/A La Marinera/img139.jpg" },
    { id: 5, nombre: "Trucha al ajillo", precio: 35900, categoria: "A La Marinera", descripcion: "O tambien Pidelo en salsa de champiñones Acompañado de Ensalada de la casa o papa fracesa", imagen: "assets/imagenes/A La Marinera/img12.jpg" },
    // Combos Teriyaki
    { id: 6, nombre: "Teriyaki Clásico", precio: 66900, categoria: "Combos Teriyaki", descripcion: "5 porciones con Lomo de res. trozos de pechuga y cerdo, con vegetales al wok y arroz yakimeshi", imagen: "assets/imagenes/Combos Teriyaki/img223.jpg" },
    { id: 7, nombre: "Teriyaki Familiar", precio: 99900, categoria: "Combos Teriyaki", descripcion: "8 porciones con Lomo de res. trozos de pechuga y cerdo, con vegetales al wok y arroz yakimeshi", imagen: "assets/imagenes/Combos Teriyaki/img22.jpg" },
    { id: 8, nombre: "Teriyaki Personal", precio: 36900, categoria: "Combos Teriyaki", descripcion: "3 porciones con Lomo de res. trozos de pechuga y cerdo, con vegetales al wok y arroz yakimeshi", imagen: "assets/imagenes/Combos Teriyaki/img21.jpg" },
    // Momentos Más Dulces (Antes: Postres)
    { id: 9, nombre: "Arroz con Leche", precio: 6000, categoria: "Momentos Más Dulces", descripcion: "Dulce arroz con leche casero", imagen: "assets/imagenes/Postres/img12.jpg" },
    { id: 10, nombre: "Flan Casero", precio: 6000, categoria: "Momentos Más Dulces", descripcion: "Delicioso flan casero con caramelo", imagen: "assets/imagenes/Postres/img33.jpg" },
    { id: 11, nombre: "Fresas con Crema", precio: 9000, categoria: "Momentos Más Dulces", descripcion: "Fresas frescas con una suave crema.", imagen: "assets/imagenes/Postres/img36.jpg" },
    { id: 12, nombre: "Mousse de Maracuyá", precio: 7000, categoria: "Momentos Más Dulces", descripcion: "Mousse de maracuyá ligero y refrescante", imagen: "assets/imagenes/Postres/img34.jpg" },
    // Especiales Gourmet (Antes: Platos Típicos)
    { id: 13, nombre: "Bandeja Montañera", precio: 38900, categoria: "Especiales Gourmet", descripcion: "Arroz, huevo frito, carne, chicharrón, plátano maduro, arepa, aguacate, frijol, morcilla y chorizo", imagen: "assets/imagenes/Platos Típicos/img30.jpg" },
    { id: 14, nombre: "Ajiaco Santafereño", precio: 28900, categoria: "Especiales Gourmet", descripcion: "El tradicional ajiaco de Bogotá. Acompañado de crema de leche y aguacate", imagen: "assets/imagenes/Platos Típicos/img54.jpg" },
    { id: 15, nombre: "Bandeja Paisa", precio: 28900, categoria: "Especiales Gourmet", descripcion: "Arroz, huevo frito, carne, chicharrón, plátano maduro, arepa y aguacate", imagen: "assets/imagenes/Platos Típicos/img10.jpg" },
    { id: 16, nombre: "Caldo de Costilla", precio: 12900, categoria: "Especiales Gourmet", descripcion: "Caldo tradicional de costilla con papa y cilantro", imagen: "assets/imagenes/Platos Típicos/img19.jpg" },
    { id: 17, nombre: "Sancocho de Gallina", precio: 28900, categoria: "Especiales Gourmet", descripcion: "Sancocho con gallina, yuca, plátano, papa y mazorca.", imagen: "assets/imagenes/Platos Típicos/img50.jpg" },
    // Especiales Gourmet (Antes: Sopas)
    { id: 18, nombre: "Consomé de Pollo", precio: 8000, categoria: "Especiales Gourmet", descripcion: "Caldo de pollo, arroz y papa", imagen: "assets/imagenes/Sopas/img41.jpg" },
    { id: 19, nombre: "Crema de Champiñones", precio: 12000, categoria: "Especiales Gourmet", descripcion: "Suave crema de champiñones frescos", imagen: "assets/imagenes/Sopas/img21.jpg" },
    { id: 20, nombre: "Crema de Tomate", precio: 12000, categoria: "Especiales Gourmet", descripcion: "Suave crema de tomate, queso parmesano y albahaca", imagen: "assets/imagenes/Sopas/img22.jpg" },
    { id: 21, nombre: "Sopa de Arepas", precio: 12000, categoria: "Especiales Gourmet", descripcion: "Trocitos de arepa en caldo de pollo.", imagen: "assets/imagenes/Sopas/img23.jpg" },
    { id: 22, nombre: "Sopa de Tortilla", precio: 12000, categoria: "Especiales Gourmet", descripcion: "Sopa mexicana con tiras de tortilla frita, aguacate, queso y crema", imagen: "assets/imagenes/Sopas/img24.jpg" },
    // Entradas
    { id: 23, nombre: "Aros de Cebolla", precio: 9000, categoria: "Entradas", descripcion: "Aros de cebolla apanados con salsa de la casa", imagen: "assets/imagenes/Entradas/img30.jpg" },
    { id: 24, nombre: "Bruschetta de la Casa", precio: 16000, categoria: "Entradas", descripcion: "Pan artesanal con tomate, albahaca y queso parmesano", imagen: "assets/imagenes/Entradas/img111.jpg" },
    { id: 25, nombre: "Tostones con Guacamole", precio: 12000, categoria: "Entradas", descripcion: "Patacones con guacamole fresco", imagen: "assets/imagenes/Entradas/img28.jpg" },
    { id: 26, nombre: "Palitos de Queso", precio: 12000, categoria: "Entradas", descripcion: "Palitos de queso apanados y fritos", imagen: "assets/imagenes/Entradas/img29.jpg" },
    { id: 27, nombre: "Nachos Gratinados", precio: 19000, categoria: "Entradas", descripcion: "Nachos con queso cheddar, jalapeños y guacamole", imagen: "assets/imagenes/Entradas/img130.jpg" },
    { id: 28, nombre: "Patacones con Hogao", precio: 10000, categoria: "Entradas", descripcion: "Patacones crujientes con salsa criolla (hogao)", imagen: "assets/imagenes/Entradas/img27.jpg" },
    { id: 29, nombre: "Tortilla Española", precio: 14000, categoria: "Entradas", descripcion: "Tortilla de papa y cebolla estilo español", imagen: "assets/imagenes/Entradas/img26.jpg" },
    // Momentos Más Dulces (Antes: Postres)
    { id: 30, nombre: "Brownie con Helado", precio: 15900, categoria: "Momentos Más Dulces", descripcion: "Delicioso brownie caliente con bola de helado de vainilla.", imagen: "assets/imagenes/Postres/img25.jpg" },
    { id: 31, nombre: "Cheesecake de Frutos Rojos", precio: 14900, categoria: "Momentos Más Dulces", descripcion: "Cheesecake cremoso con salsa de frutos rojos.", imagen: "assets/imagenes/Postres/img37.jpg" },
    { id: 32, nombre: "Copa de Helado", precio: 9000, categoria: "Momentos Más Dulces", descripcion: "Dos bolas de helado a elegir (vainilla, chocolate o fresa)", imagen: "assets/imagenes/Postres/img38.jpg" },
    { id: 33, nombre: "Tiramisú", precio: 14900, categoria: "Momentos Más Dulces", descripcion: "Clásico postre italiano con café y mascarpone.", imagen: "assets/imagenes/Postres/img39.jpg" },
    // Bebidas Frias (Antes: Bebidas)
    { id: 34, nombre: "Agua embotellada", precio: 3000, categoria: "Bebidas Frias", descripcion: "Agua natural en botella", imagen: "assets/imagenes/Bebidas/img41.jpg" },
    { id: 35, nombre: "Gaseosa Coca-Cola 300ml", precio: 3500, categoria: "Bebidas Frias", descripcion: "Bebida embotellada", imagen: "assets/imagenes/Bebidas/img40.jpg" },
    { id: 36, nombre: "Jugo de Naranja Natural", precio: 6000, categoria: "Bebidas Frias", descripcion: "Jugo natural recién exprimido", imagen: "assets/imagenes/Bebidas/img43.jpg" },
    { id: 37, nombre: "Limonada Natural", precio: 5000, categoria: "Bebidas Frias", descripcion: "Refrescante limonada natural", imagen: "assets/imagenes/Bebidas/img44.jpg" },
    // Cervezas (Antes: Bebidas)
    { id: 38, nombre: "Cerveza Nacional", precio: 7000, categoria: "Cervezas", descripcion: "Águila, Club Colombia o Poker", imagen: "assets/imagenes/Bebidas/img45.jpg" },
    // Bebidas Frias (Antes: Bebidas)
    { id: 39, nombre: "Malteada de Vainilla", precio: 9500, categoria: "Bebidas Frias", descripcion: "Malteada cremosa de vainilla con chantilly", imagen: "assets/imagenes/Bebidas/img46.jpg" },
    { id: 40, nombre: "Avena", precio: 5000, categoria: "Bebidas Frias", descripcion: "Avena embotellada o casera", imagen: "assets/imagenes/Bebidas/img47.jpg" },
    // Bebidas Calientes (Antes: Bebidas)
    { id: 41, nombre: "Café Americano", precio: 3500, categoria: "Bebidas Calientes", descripcion: "Café filtrado", imagen: "assets/imagenes/Bebidas/img48.jpg" },
    { id: 42, nombre: "Capuchino", precio: 5000, categoria: "Bebidas Calientes", descripcion: "Espresso con leche y espuma", imagen: "assets/imagenes/Bebidas/img49.jpg" },
    { id: 43, nombre: "Latte", precio: 5000, categoria: "Bebidas Calientes", descripcion: "Espresso con leche al vapor", imagen: "assets/imagenes/Bebidas/img50.jpg" },
    // Bebidas Frias (Antes: Bebidas)
    { id: 44, nombre: "Jugo en Leche (Mora)", precio: 6500, categoria: "Bebidas Frias", descripcion: "Jugo de mora preparado en leche", imagen: "assets/imagenes/Bebidas/img51.jpg" },
    { id: 45, nombre: "Jugo en Agua (Fresa)", precio: 6000, categoria: "Bebidas Frias", descripcion: "Jugo de fresa preparado en agua", imagen: "assets/imagenes/Bebidas/img52.jpg" },
    // Momentos Más Dulces (Antes: Postres)
    { id: 46, nombre: "Milhoja", precio: 5500, categoria: "Momentos Más Dulces", descripcion: "Milhoja crujiente con crema pastelera", imagen: "assets/imagenes/Postres/img53.jpg" },
    { id: 47, nombre: "Torta de Chocolate", precio: 8500, categoria: "Momentos Más Dulces", descripcion: "Porción de torta húmeda de chocolate", imagen: "assets/imagenes/Postres/img54.jpg" },
    // Horneados
    { id: 48, nombre: "Pan de Yuca", precio: 3500, categoria: "Horneados", descripcion: "Pan de yuca recién horneado", imagen: "assets/imagenes/Horneados/img55.jpg" },
    { id: 49, nombre: "Almojábana", precio: 3500, categoria: "Horneados", descripcion: "Almojábana tradicional", imagen: "assets/imagenes/Horneados/img56.jpg" },
    { id: 50, nombre: "Buñuelo", precio: 3000, categoria: "Horneados", descripcion: "Buñuelo esponjoso", imagen: "assets/imagenes/Horneados/img57.jpg" },
    { id: 51, nombre: "Pan Francés", precio: 3000, categoria: "Horneados", descripcion: "Pan francés artesanal", imagen: "assets/imagenes/Horneados/img58.jpg" },
    // Especiales Wok (Antes: Comidas Rápidas)
    { id: 52, nombre: "Arepa de Huevo", precio: 7000, categoria: "Especiales Wok", descripcion: "Arepa frita rellena de huevo", imagen: "assets/imagenes/Comidas Rápidas/img155.jpg" },
    { id: 53, nombre: "Chuzo de Pollo", precio: 15900, categoria: "Especiales Wok", descripcion: "Chuzo de pollo a la parrilla con papa y ensalada", imagen: "assets/imagenes/Comidas Rápidas/img135.jpg" },
    { id: 54, nombre: "Hamburguesa Clásica", precio: 18900, categoria: "Especiales Wok", descripcion: "Carne de res, lechuga, tomate y salsa", imagen: "assets/imagenes/Comidas Rápidas/img125.jpg" },
    { id: 55, nombre: "Perro Caliente", precio: 13900, categoria: "Especiales Wok", descripcion: "Salchicha americana, queso, salsas y papa ripio", imagen: "assets/imagenes/Comidas Rápidas/img115.jpg" },
    { id: 56, nombre: "Salchipapa", precio: 15900, categoria: "Especiales Wok", descripcion: "Salchicha, papa francesa y salsas", imagen: "assets/imagenes/Comidas Rápidas/img105.jpg" },
    // Horneados
    { id: 57, nombre: "Arepa de Queso", precio: 6000, categoria: "Horneados", descripcion: "Arepa blanca con queso derretido", imagen: "assets/imagenes/Horneados/img59.jpg" },
    { id: 58, nombre: "Arepa de Maíz", precio: 2500, categoria: "Horneados", descripcion: "Arepa de maíz blanca", imagen: "assets/imagenes/Horneados/img60.jpg" },
    // Desayunos
    { id: 59, nombre: "Calentado Campesino", precio: 18900, categoria: "Desayunos", descripcion: "Arroz, frijol, carne desmechada, arepa y huevo.", imagen: "assets/imagenes/Desayunos/img61.jpg" },
    { id: 60, nombre: "Huevos al gusto", precio: 10900, categoria: "Desayunos", descripcion: "Huevos fritos, revueltos o pericos. Acompañados de tostadas y café", imagen: "assets/imagenes/Desayunos/img62.jpg" },
    { id: 61, nombre: "Omelette de Jamón y Queso", precio: 14900, categoria: "Desayunos", descripcion: "Omelette con jamón, queso, tostadas y café", imagen: "assets/imagenes/Desayunos/img63.jpg" },
    { id: 62, nombre: "Combo Desayuno Light", precio: 17900, categoria: "Desayunos", descripcion: "Fruta, granola, yogurt, tostadas integrales y café", imagen: "assets/imagenes/Desayunos/img64.jpg" },
    // Especiales Wok (Antes: Sandwiches y Wraps)
    { id: 63, nombre: "Club Sandwich", precio: 18900, categoria: "Especiales Wok", descripcion: "Triple capa de pan, pollo, jamón, queso, tocineta, lechuga y tomate", imagen: "assets/imagenes/Sandwiches y Wraps/img65.jpg" },
    { id: 64, nombre: "Wrap de Pollo César", precio: 17900, categoria: "Especiales Wok", descripcion: "Tortilla de trigo rellena de pollo, lechuga, queso parmesano y aderezo césar", imagen: "assets/imagenes/Sandwiches y Wraps/img66.jpg" },
    { id: 65, nombre: "Wrap Vegetariano", precio: 16900, categoria: "Especiales Wok", descripcion: "Tortilla rellena de vegetales frescos, queso crema y humus", imagen: "assets/imagenes/Sandwiches y Wraps/img67.jpg" },
    { id: 66, nombre: "Sandwich de Pavo y Queso", precio: 15900, categoria: "Especiales Wok", descripcion: "Pan integral, pavo, queso suizo, lechuga y tomate", imagen: "assets/imagenes/Sandwiches y Wraps/img68.jpg" },
    // Especiales Gourmet (Antes: Ensaladas)
    { id: 67, nombre: "Caesar Salad", precio: 19900, categoria: "Especiales Gourmet", descripcion: "Lechuga romana, crutones, queso parmesano y aderezo césar", imagen: "assets/imagenes/Ensaladas/img69.jpg" },
    { id: 68, nombre: "Greek Salad", precio: 21900, categoria: "Especiales Gourmet", descripcion: "Lechuga, tomate, pepino, cebolla roja, aceitunas kalamata y queso feta", imagen: "assets/imagenes/Ensaladas/img70.jpg" },
    { id: 69, nombre: "Quinoa Salad", precio: 22900, categoria: "Especiales Gourmet", descripcion: "Quinoa, vegetales frescos, aguacate, pollo a la parrilla y aderezo de limón", imagen: "assets/imagenes/Ensaladas/img71.jpg" },
    // Pastas De La Casa
    { id: 70, nombre: "Pasta Alfredo", precio: 29900, categoria: "Pastas De La Casa", descripcion: "Pasta fetuccini en salsa cremosa de queso parmesano", imagen: "assets/imagenes/Pastas De La Casa/img72.jpg" },
    { id: 71, nombre: "Pasta Carbonara", precio: 30900, categoria: "Pastas De La Casa", descripcion: "Pasta con salsa cremosa de huevo, queso parmesano y tocineta", imagen: "assets/imagenes/Pastas De La Casa/img73.jpg" },
    { id: 72, nombre: "Pasta Bolognesa", precio: 28900, categoria: "Pastas De La Casa", descripcion: "Pasta con salsa de tomate y carne de res molida", imagen: "assets/imagenes/Pastas De La Casa/img74.jpg" },
    { id: 73, nombre: "Lasagna de Carne", precio: 34900, categoria: "Pastas De La Casa", descripcion: "Lasagna en capas con carne, salsa de tomate y queso mozzarella", imagen: "assets/imagenes/Pastas De La Casa/img75.jpg" },
    // Especiales Gourmet (Antes: Sopas)
    { id: 74, nombre: "Sopa de Arepa", precio: 12000, categoria: "Especiales Gourmet", descripcion: "Sopa de arepa desmechada con pollo, queso y huevo.", imagen: "assets/imagenes/Sopas/img76.jpg" },
    { id: 75, nombre: "Crema de Pollo", precio: 12000, categoria: "Especiales Gourmet", descripcion: "Crema de pollo espesa con crutones", imagen: "assets/imagenes/Sopas/img77.jpg" },
    // Toffe Grille
    { id: 76, nombre: "Costilla de Cerdo BBQ", precio: 36900, categoria: "Toffe Grille", descripcion: "350gr de Deliciosas costillas de Cerdo. bañadas en salsa bbq. Acompañado de Aros de Cebolla. Papa Francesa y ensalada de la casa", imagen: "assets/imagenes/Toffe Grille/img89.jpg" },
    { id: 77, nombre: "Churrasco", precio: 45900, categoria: "Toffe Grille", descripcion: "Acompañado de Queso grille Chorizo Ranchero, Ensalada de la casa. Yuca frita y Chimichurri", imagen: "assets/imagenes/Toffe Grille/img92.jpg" },
    { id: 78, nombre: "Pechuga Grille", precio: 29900, categoria: "Toffe Grille", descripcion: "Pechuga de pollo a la parrilla. Acompañado de papa francesa. Ensalada de la casa y chimichurri", imagen: "assets/imagenes/Toffe Grille/img94.jpg" },
    { id: 79, nombre: "Punta de Anca", precio: 48900, categoria: "Toffe Grille", descripcion: "Corte de carne magra. Acompañado de papa francesa. ensalada de la casa y chimichurri", imagen: "assets/imagenes/Toffe Grille/img98.jpg" },
    { id: 80, nombre: "Lomo Viche", precio: 46900, categoria: "Toffe Grille", descripcion: "Acompañado de papa francesa. ensalada de la casa y chimichurri", imagen: "assets/imagenes/Toffe Grille/img79.jpg" },
    // A La Marinera
    { id: 81, nombre: "Salmón en Salsa de Maracuyá", precio: 45000, categoria: "A La Marinera", descripcion: "Salmón a la parrilla con salsa de maracuyá, puré de papa y ensalada.", imagen: "assets/imagenes/A La Marinera/img139.jpg" },
    { id: 82, nombre: "Trucha Gratinada", precio: 35900, categoria: "A La Marinera", descripcion: "Trucha con salsa de queso y champiñones, acompañada de vegetales.", imagen: "assets/imagenes/A La Marinera/img12.jpg" },
    // Pastas De La Casa
    { id: 83, nombre: "Pasta con Mariscos", precio: 38900, categoria: "Pastas De La Casa", descripcion: "Pasta con camarones, calamares y mejillones en salsa pomodoro.", imagen: "assets/imagenes/Pastas De La Casa/img134.jpg" },
    { id: 84, nombre: "Pasta Napolitana", precio: 28900, categoria: "Pastas De La Casa", descripcion: "Pasta con salsa de tomate y albahaca fresca.", imagen: "assets/imagenes/Pastas De La Casa/img133.jpg" },
    { id: 85, nombre: "Pasta Pesto", precio: 29900, categoria: "Pastas De La Casa", descripcion: "Pasta con salsa pesto de la casa.", imagen: "assets/imagenes/Pastas De La Casa/img132.jpg" },
    // Especiales Gourmet (Antes: Sopas)
    { id: 86, nombre: "Sopa de Lentejas", precio: 12000, categoria: "Especiales Gourmet", descripcion: "Sopa espesa de lentejas con tocineta.", imagen: "assets/imagenes/Sopas/img131.jpg" },
    // Pastas De La Casa
    { id: 87, nombre: "Pasta de la Casa", precio: 35900, categoria: "Pastas De La Casa", descripcion: "Con pollo a la parrilla, salsa blanca y pan de ajo", imagen: "assets/imagenes/Pastas De La Casa/img133.jpg" },
    { id: 88, nombre: "Pasta de la Casa", precio: 35900, categoria: "Pastas De La Casa", descripcion: "Con cubos de Salmón y Langostinos", imagen: "assets/imagenes/Pastas De La Casa/img123.jpg" },
    // Toffe Grille
    { id: 89, nombre: "Bife de Chorizo", precio: 46900, categoria: "Toffe Grille", descripcion: "Acompañado de papa francesa. ensalada de la casa y chimichurri", imagen: "assets/imagenes/Toffe Grille/img79.jpg" },
    { id: 90, nombre: "Churrasco Argentino", precio: 45900, categoria: "Toffe Grille", descripcion: "Acompañado de Queso grille Chorizo Ranchero, Ensalada de la casa. Yuca frita y Chimichurri", imagen: "assets/imagenes/Toffe Grille/img92.jpg" },
    { id: 91, nombre: "Costillas BBQ", precio: 36900, categoria: "Toffe Grille", descripcion: "350gr de Deliciosas costillas de Cerdo. bañadas en salsa bbq. Acompañado de Aros de Cebolla. Papa Francesa y ensalada de la casa", imagen: "assets/imagenes/Toffe Grille/img89.jpg" },
    { id: 92, nombre: "Filet Mignon", precio: 48900, categoria: "Toffe Grille", descripcion: "Tierno de lomo fino de res bañada en salsa demi-glace. Acompañado de papa francesa. ensalada de la casa", imagen: "assets/imagenes/Toffe Grille/img86.jpg" },
    { id: 93, nombre: "Mini Churrasco", precio: 29900, categoria: "Toffe Grille", descripcion: "Delicioso Corte de Chata. acompañado de Yuca y chimichurri, PIDELO con Ensalada de la casa", imagen: "assets/imagenes/Toffe Grille/img88.jpg" },
    // Cervezas (Antes: Bebidas)
    { id: 94, nombre: "Michelada", precio: 8000, categoria: "Cervezas", descripcion: "Cerveza con limón y sal", imagen: "assets/imagenes/Bebidas/michelada.jpg" },
    { id: 95, nombre: "Cerveza Club Colombia", precio: 7500, categoria: "Cervezas", descripcion: "Botella 330ml", imagen: "assets/imagenes/Bebidas/club_colombia.jpg" },
    // Vinos (Antes: Bebidas)
    { id: 96, nombre: "Vino de la Casa (Copa)", precio: 15000, categoria: "Vinos", descripcion: "Vino tinto o blanco (Copa)", imagen: "assets/imagenes/Bebidas/vino_copa.jpg" },
    { id: 97, nombre: "Vino de la Casa (Botella)", precio: 60000, categoria: "Vinos", descripcion: "Vino tinto o blanco (Botella 750ml)", imagen: "assets/imagenes/Bebidas/vino_botella.jpg" },
    // Cocteles
    { id: 98, nombre: "Mojito Clásico", precio: 20900, categoria: "Cocteles", descripcion: "Ron, hierbabuena, azúcar, limón, soda", imagen: "assets/imagenes/Cocteles/mojito.jpg" },
    { id: 99, nombre: "Margarita", precio: 22900, categoria: "Cocteles", descripcion: "Tequila, Triple Sec, limón", imagen: "assets/imagenes/Cocteles/margarita.jpg" },
    { id: 100, nombre: "Daiquirí Fresa", precio: 21900, categoria: "Cocteles", descripcion: "Ron, fresa, limón", imagen: "assets/imagenes/Cocteles/daiquiri_fresa.jpg" },
    { id: 101, nombre: "Gin Tonic", precio: 23900, categoria: "Cocteles", descripcion: "Ginebra, tónica, limón", imagen: "assets/imagenes/Cocteles/gin_tonic.jpg" },
    { id: 102, nombre: "Piña Colada", precio: 23900, categoria: "Cocteles", descripcion: "Ron, crema de coco, piña", imagen: "assets/imagenes/Cocteles/pina_colada.jpg" },
    // Bebidas Frias (Antes: Bebidas)
    { id: 103, nombre: "Jugo de Mango Natural", precio: 6000, categoria: "Bebidas Frias", descripcion: "Jugo natural recién preparado en agua o leche", imagen: "assets/imagenes/Bebidas/jugo_mango.jpg" },
    { id: 104, nombre: "Jugo de Guanábana Natural", precio: 6500, categoria: "Bebidas Frias", descripcion: "Jugo natural recién preparado en agua o leche", imagen: "assets/imagenes/Bebidas/jugo_guanabana.jpg" },
    // Especiales Gourmet (Antes: Sopas)
    { id: 105, nombre: "Sopa de Pollo con Pasta", precio: 10000, categoria: "Especiales Gourmet", descripcion: "Caldo de pollo con verduras y pasta corta", imagen: "assets/imagenes/Sopas/sopa_pollo_pasta.jpg" },
    { id: 106, nombre: "Sopa de Verduras", precio: 10000, categoria: "Especiales Gourmet", descripcion: "Caldo de verduras frescas de la huerta", imagen: "assets/imagenes/Sopas/sopa_verduras.jpg" },
    { id: 107, nombre: "Lentejas", precio: 12000, categoria: "Especiales Gourmet", descripcion: "Sopa de lentejas espesa con tocineta", imagen: "assets/imagenes/Sopas/lentejas.jpg" },
    // Horneados
    { id: 108, nombre: "Arepa de Maíz con Queso", precio: 7000, categoria: "Horneados", descripcion: "Arepa asada de maíz con queso costeño", imagen: "assets/imagenes/Horneados/arepa_maiz_queso.jpg" },
    { id: 109, nombre: "Empanada de Carne", precio: 3000, categoria: "Horneados", descripcion: "Empanada de maíz frita rellena de carne y papa", imagen: "assets/imagenes/Horneados/empanada_carne.jpg" },
    { id: 110, nombre: "Empanada de Pollo", precio: 3000, categoria: "Horneados", descripcion: "Empanada de maíz frita rellena de pollo y papa", imagen: "assets/imagenes/Horneados/empanada_pollo.jpg" },
    // Entradas
    { id: 111, nombre: "Chorizo con Arepa", precio: 10000, categoria: "Entradas", descripcion: "Chorizo de la casa a la parrilla con arepa", imagen: "assets/imagenes/Entradas/chorizo_arepa.jpg" },
    { id: 112, nombre: "Morcilla con Arepa", precio: 10000, categoria: "Entradas", descripcion: "Morcilla tradicional con arepa", imagen: "assets/imagenes/Entradas/morcilla_arepa.jpg" },
    { id: 113, nombre: "Picada para 2", precio: 35000, categoria: "Entradas", descripcion: "Chorizo, morcilla, papa, yuca, costilla, pollo", imagen: "assets/imagenes/Entradas/picada_2.jpg" },
    // Especiales Wok (Antes: Comidas Rápidas)
    { id: 114, nombre: "Hamburguesa Doble Carne", precio: 24900, categoria: "Especiales Wok", descripcion: "Doble carne, doble queso, tocineta y salsas", imagen: "assets/imagenes/Comidas Rápidas/hamburguesa_doble.jpg" },
    // Especiales Wok (Antes: Sandwiches y Wraps)
    { id: 115, nombre: "Sandwich Vegetariano", precio: 15900, categoria: "Especiales Wok", descripcion: "Pan integral, queso, aguacate, tomate y espinaca", imagen: "assets/imagenes/Sandwiches y Wraps/sandwich_vegano.jpg" },
    { id: 116, nombre: "Wrap de Atún", precio: 17900, categoria: "Especiales Wok", descripcion: "Tortilla de trigo, atún, maíz, lechuga y mayonesa", imagen: "assets/imagenes/Sandwiches y Wraps/wrap_atun.jpg" },
    // Especiales Gourmet (Antes: Ensaladas)
    { id: 117, nombre: "Ensalada de Atún", precio: 19900, categoria: "Especiales Gourmet", descripcion: "Atún, lechuga, tomate, maíz dulce, aderezo ranch", imagen: "assets/imagenes/Ensaladas/ensalada_atun.jpg" },
    { id: 118, nombre: "Ensalada de Pollo y Aguacate", precio: 22900, categoria: "Especiales Gourmet", descripcion: "Pollo a la parrilla, aguacate, lechuga, vinagreta de la casa", imagen: "assets/imagenes/Ensaladas/ensalada_pollo_aguacate.jpg" },
    // Toffe Grille
    { id: 119, nombre: "Filet Mignon en Salsa de Champiñones", precio: 51900, categoria: "Toffe Grille", descripcion: "Lomo fino de res con salsa de champiñones y papa gratinada", imagen: "assets/imagenes/Toffe Grille/filet_mignon_champi.jpg" },
    { id: 120, nombre: "Baby Beef", precio: 43900, categoria: "Toffe Grille", descripcion: "Corte tierno de res (300gr) con papa y ensalada", imagen: "assets/imagenes/Toffe Grille/baby_beef.jpg" },
    { id: 121, nombre: "Lomo de Cerdo en Salsa de Ciruela", precio: 37900, categoria: "Toffe Grille", descripcion: "Lomo de cerdo a la parrilla con salsa dulce de ciruela y puré", imagen: "assets/imagenes/Toffe Grille/lomo_cerdo_ciruela.jpg" },
    // A La Marinera
    { id: 122, nombre: "Cazuela de Mariscos", precio: 45900, categoria: "A La Marinera", descripcion: "Cazuela cremosa con camarones, calamares y pescado", imagen: "assets/imagenes/A La Marinera/cazuela_mariscos.jpg" },
    { id: 123, nombre: "Arroz Marinero", precio: 39900, categoria: "A La Marinera", descripcion: "Arroz con camarones, anillos de calamar, mejillones y verduras", imagen: "assets/imagenes/A La Marinera/arroz_marinero.jpg" },
    // Pastas De La Casa
    { id: 124, nombre: "Pasta Pomodoro", precio: 27900, categoria: "Pastas De La Casa", descripcion: "Pasta con salsa de tomate natural y albahaca", imagen: "assets/imagenes/Pastas De La Casa/pasta_pomodoro.jpg" },
    { id: 125, nombre: "Lasagna Vegetariana", precio: 32900, categoria: "Pastas De La Casa", descripcion: "Lasagna con capas de zucchini, espinaca, ricotta y salsa blanca", imagen: "assets/imagenes/Pastas De La Casa/lasagna_vegetariana.jpg" },
    // Momentos Más Dulces (Antes: Postres)
    { id: 126, nombre: "Torta de Zanahoria", precio: 8500, categoria: "Momentos Más Dulces", descripcion: "Porción de torta húmeda de zanahoria con glaseado de queso crema", imagen: "assets/imagenes/Postres/torta_zanahoria.jpg" },
    { id: 127, nombre: "Waffles con Helado y Frutas", precio: 17900, categoria: "Momentos Más Dulces", descripcion: "Waffles recién hechos con frutas de estación y helado de vainilla", imagen: "assets/imagenes/Postres/waffles.jpg" },
    // Bebidas Frias (Antes: Bebidas)
    { id: 128, nombre: "Smoothie de Fresa y Banano", precio: 9500, categoria: "Bebidas Frias", descripcion: "Batido de fresa, banano, yogurt y miel", imagen: "assets/imagenes/Bebidas/smoothie_fresa.jpg" },
    { id: 129, nombre: "Té Frío de Durazno", precio: 5000, categoria: "Bebidas Frias", descripcion: "Té negro con sabor a durazno (Bebida embotellada)", imagen: "assets/imagenes/Bebidas/te_frio.jpg" },
    // Bebidas Calientes (Antes: Bebidas)
    { id: 130, nombre: "Café con Leche", precio: 4500, categoria: "Bebidas Calientes", descripcion: "Café con leche caliente", imagen: "assets/imagenes/Bebidas/cafe_leche.jpg" },
    // Desayunos
    { id: 131, nombre: "Desayuno Americano", precio: 19900, categoria: "Desayunos", descripcion: "Huevos revueltos, tocineta, pancakes y jugo", imagen: "assets/imagenes/Desayunos/desayuno_americano.jpg" },
    { id: 132, nombre: "Parfait de Granola", precio: 11900, categoria: "Desayunos", descripcion: "Yogurt griego, granola, miel y frutos rojos", imagen: "assets/imagenes/Desayunos/parfait.jpg" },
    // Crepes (Antes: Desayunos)
    { id: 133, nombre: "Crepes de Nutella y Banano", precio: 14900, categoria: "Crepes", descripcion: "Crepes rellenos de Nutella y rodajas de banano", imagen: "assets/imagenes/Desayunos/crepes_nutella.jpg" },
    // Especiales Wok (Antes: Sandwiches y Wraps)
    { id: 134, nombre: "Sandwich de Jamón y Queso", precio: 12900, categoria: "Especiales Wok", descripcion: "Pan blanco, jamón de cerdo y queso mozzarella derretido", imagen: "assets/imagenes/Sandwiches y Wraps/sandwich_jamon_queso.jpg" },
    // Cervezas (Antes: Bebidas)
    { id: 135, nombre: "Cerveza Poker", precio: 7000, categoria: "Cervezas", descripcion: "Botella 330ml", imagen: "assets/imagenes/Bebidas/cerveza_poker.jpg" },
    { id: 136, nombre: "Cerveza Águila", precio: 7000, categoria: "Cervezas", descripcion: "Botella 330ml", imagen: "assets/imagenes/Bebidas/cerveza_aguila.jpg" },
    // Cocteles
    { id: 137, nombre: "Cuba Libre", precio: 20900, categoria: "Cocteles", descripcion: "Ron, Coca-Cola y limón", imagen: "assets/imagenes/Cocteles/cuba_libre.jpg" },
    { id: 138, nombre: "Whisky Sour", precio: 22900, categoria: "Cocteles", descripcion: "Whisky, limón y azúcar", imagen: "assets/imagenes/Cocteles/whisky_sour.jpg" },
    { id: 139, nombre: "Tequila Sunrise", precio: 21900, categoria: "Cocteles", descripcion: "Tequila, Naranja, Granadina", imagen: "assets/imagenes/Cocteles/tequila_sunrise.jpg" },
    { id: 140, nombre: "Paloma Sierra", precio: 21900, categoria: "Cocteles", descripcion: "Tequila, limón, Toronja", imagen: "assets/imagenes/Cocteles/paloma.jpg" },
    { id: 141, nombre: "Mojito Oceanic", precio: 20900, categoria: "Cocteles", descripcion: "Ron, Convier, limón, soda", imagen: "assets/imagenes/Cocteles/mojito_oceanic.jpg" },
    { id: 142, nombre: "Amaretto Soul", precio: 18900, categoria: "Cocteles", descripcion: "Amaretto, limón", imagen: "assets/imagenes/Cocteles/amaretto.jpg" },
    // Momentos Más Dulces (Antes: Postres)
    { id: 143, nombre: "Tarta de Queso con Mora", precio: 8000, categoria: "Momentos Más Dulces", descripcion: "Porción de tarta de queso con mermelada de mora", imagen: "assets/imagenes/Postres/tarta_mora.jpg" },
    { id: 144, nombre: "Red Velvet", precio: 8000, categoria: "Momentos Más Dulces", descripcion: "Porción de pastel Red Velvet con crema de queso", imagen: "assets/imagenes/Postres/red_velvet.jpg" },
    { id: 145, nombre: "Churros con Chocolate", precio: 10900, categoria: "Momentos Más Dulces", descripcion: "Porción de churros crujientes con salsa de chocolate caliente", imagen: "assets/imagenes/Postres/churros.jpg" },
    { id: 146, nombre: "Mini-Churros (4 unid)", precio: 5000, categoria: "Momentos Más Dulces", descripcion: "4 mini-churros con azúcar y canela", imagen: "assets/imagenes/Postres/mini_churros.jpg" },
    { id: 147, nombre: "Torta de Ciruela", precio: 8000, categoria: "Momentos Más Dulces", descripcion: "Porción de torta casera con ciruelas pasas", imagen: "assets/imagenes/Postres/torta_ciruela.jpg" },
    // Horneados
    { id: 148, nombre: "Empanada de Queso", precio: 3000, categoria: "Horneados", descripcion: "Empanada frita rellena de queso", imagen: "assets/imagenes/Horneados/empanada_queso.jpg" },
    { id: 149, nombre: "Pastel Gloria", precio: 4500, categoria: "Horneados", descripcion: "Hojaldre relleno de queso y bocadillo", imagen: "assets/imagenes/Horneados/pastel_gloria.jpg" },
    { id: 150, nombre: "Pan de Bono", precio: 3500, categoria: "Horneados", descripcion: "Pan de bono con queso fresco", imagen: "assets/imagenes/Horneados/pan_de_bono.jpg" },
    { id: 151, nombre: "Croissant de Jamón y Queso", precio: 7500, categoria: "Horneados", descripcion: "Croissant relleno de jamón y queso", imagen: "assets/imagenes/Horneados/croissant_jq.jpg" },
    // Momentos Más Dulces (Antes: Postres)
    { id: 152, nombre: "Donut Glaseada", precio: 4000, categoria: "Momentos Más Dulces", descripcion: "Dona cubierta con glaseado de azúcar", imagen: "assets/imagenes/Postres/donut.jpg" },
    // Bebidas Frias (Antes: Bebidas)
    { id: 153, nombre: "Avena sin Azúcar", precio: 5000, categoria: "Bebidas Frias", descripcion: "Avena embotellada o casera sin adición de azúcar", imagen: "assets/imagenes/Bebidas/avena_sin_azucar.jpg" },
    // Momentos Más Dulces (Antes: Postres)
    { id: 154, nombre: "Brownie Vegano", precio: 14900, categoria: "Momentos Más Dulces", descripcion: "Brownie vegano con trozos de nueces", imagen: "assets/imagenes/Postres/brownie_vegano.jpg" },
    { id: 155, nombre: "Tarta de Manzana", precio: 9000, categoria: "Momentos Más Dulces", descripcion: "Porción de tarta de manzana con canela", imagen: "assets/imagenes/Postres/tarta_manzana.jpg" },
    // Bebidas Frias (Antes: Bebidas)
    { id: 156, nombre: "Jugo de Pera Natural", precio: 6000, categoria: "Bebidas Frias", descripcion: "Jugo natural recién preparado en agua o leche", imagen: "assets/imagenes/Bebidas/jugo_pera.jpg" },
    { id: 157, nombre: "Jugo de Piña Natural", precio: 5500, categoria: "Bebidas Frias", descripcion: "Jugo natural de piña", imagen: "assets/imagenes/Bebidas/jugo_pina.jpg" },
    // Especiales Gourmet (Antes: Sopas)
    { id: 158, nombre: "Sopa Azteca", precio: 13000, categoria: "Especiales Gourmet", descripcion: "Caldo de tomate, pollo desmechado, aguacate y tiras de tortilla", imagen: "assets/imagenes/Sopas/sopa_azteca.jpg" },
    { id: 159, nombre: "Crema de Ahuyama", precio: 12000, categoria: "Especiales Gourmet", descripcion: "Crema de calabaza con semillas de sésamo", imagen: "assets/imagenes/Sopas/crema_ahuyama.jpg" },
    // Horneados
    { id: 160, nombre: "Pan Integrall", precio: 3500, categoria: "Horneados", descripcion: "Porción de pan integral artesanal", imagen: "assets/imagenes/Horneados/pan_integral.jpg" },
    { id: 161, nombre: "Galleta de Avena", precio: 3000, categoria: "Horneados", descripcion: "Galleta grande de avena y pasas", imagen: "assets/imagenes/Horneados/galleta_avena.jpg" },
    { id: 162, nombre: "Empanada Chilena", precio: 8000, categoria: "Horneados", descripcion: "Empanada horneada rellena de pino (carne, cebolla, huevo)", imagen: "assets/imagenes/Horneados/empanada_chilena.jpg" },
    // Entradas
    { id: 163, nombre: "Canasta de Plátano con Queso", precio: 12000, categoria: "Entradas", descripcion: "Plátano maduro en canasta con queso y bocadillo", imagen: "assets/imagenes/Entradas/canasta_platano.jpg" },
    { id: 164, nombre: "Bocaditos de Pollo", precio: 14000, categoria: "Entradas", descripcion: "Trozos de pechuga apanados con salsa agridulce", imagen: "assets/imagenes/Entradas/bocaditos_pollo.jpg" },
    // Especiales Wok (Antes: Comidas Rápidas)
    { id: 165, nombre: "Tacos de Pollo", precio: 16900, categoria: "Especiales Wok", descripcion: "Dos tacos de tortilla de maíz rellenos de pollo, lechuga y salsa", imagen: "assets/imagenes/Comidas Rápidas/tacos_pollo.jpg" },
    { id: 166, nombre: "Chuzo de Res", precio: 17900, categoria: "Especiales Wok", descripcion: "Chuzo de carne de res a la parrilla con papa y ensalada", imagen: "assets/imagenes/Comidas Rápidas/chuzo_res.jpg" },
    // Cocteles
    { id: 167, nombre: "Long Island Iced Tea", precio: 24900, categoria: "Cocteles", descripcion: "Vodka, Tequila, Ron, Ginebra, Triple Sec, Coca-Cola y limón", imagen: "assets/imagenes/Cocteles/long_island.jpg" },
    // Bebidas Frias (Antes: Bebidas)
    { id: 168, nombre: "Jugo de Tomate de Árbol", precio: 6000, categoria: "Bebidas Frias", descripcion: "Jugo natural recién preparado en agua o leche", imagen: "assets/imagenes/Bebidas/jugo_tomate_arbol.jpg" }
];


// =======================================================
// 2. VARIABLES DE ESTADO Y ELEMENTOS DEL DOM
// =======================================================

let carrito = [];
let productosAgrupados = {};

// Elementos del DOM (Declaración de variables para el ámbito global)
let menuContainer, carritoItems, subtotalElement, envioElement, totalElement, finalizarPedidoBtn, carritoElement, botonesFiltroContainer, nombreInput, telefonoInput, direccionInput, pagoSelect, verPedidoMovilBtn;


// =======================================================
// 3. FUNCIONES DE UTILIDAD
// =======================================================

function formatPrecio(precio) {
    // Convierte el valor a número y formatea a peso colombiano, sin decimales
    return Number(precio).toLocaleString('es-CO', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
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
        
        // ✅ CATEGORÍAS QUE USAN FORMATO LISTA COMPACTA (ítems simples)
        const isCompactList = [
            'Horneados', 'Bebidas Calientes', 'Bebidas Frias', 'Bebidas Frias con Cafe', 
            'Cervezas', 'Cocteles', 'Momentos Más Dulces', 'Vinos', 'Crepes'
        ].includes(categoria); 
        
        // ✅ CATEGORÍAS QUE USAN FORMATO TARJETA COMPACTA (Desayunos/Entradas/Wok/Gourmet)
        const isCompactCard = [
            'Desayunos', 'Entradas', 'Especiales Gourmet', 'Especiales Wok'
        ].includes(categoria);

        // Define si usa formato LISTA o CARD/GRID
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
        notaInput = document.querySelector(`.card-nota-${itemId}`);
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
                // Almacenar el precio como número para cálculos
                precio: Number(producto.precio), 
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

function configurarEventos() {
    
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
                primeraSeccionVisible.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });

    // Lógica para mostrar/ocultar el botón flotante móvil (scroll)
    window.addEventListener('scroll', () => {
        if (window.innerWidth < 992) {
            if (window.scrollY > 100 && carrito.length > 0) {
                verPedidoMovilBtn.style.display = 'flex';
            } else {
                if (carrito.length === 0) {
                    verPedidoMovilBtn.style.display = 'none';
                }
            }
        }
    });

    // Evento para el botón flotante móvil (muestra el carrito)
    verPedidoMovilBtn.addEventListener('click', () => {
        carritoElement.scrollIntoView({ behavior: 'smooth' });
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
        const pedidoData = {
            nombrecliente: nombreInput.value,
            telefono: telefonoInput.value,
            direccion: direccionInput.value,
            metodopago: pagoSelect.value, 
            total: totalFinal,
            carrito: carrito 
        };
        
        // --- 3. PREPARACIÓN DEL MENSAJE DE WHATSAPP ---
        let mensaje = `*¡NUEVO PEDIDO TOFFE RESTAURANTE!*%0A%0A`;
        mensaje += `*Datos del Cliente:*%0A`;
        mensaje += `*Nombre:* ${nombreInput.value}%0A`;
        mensaje += `*Teléfono:* ${telefonoInput.value}%0A`;
        mensaje += `*Dirección:* ${direccionInput.value}%0A`;
        mensaje += `*Pago:* ${pagoSelect.options[pagoSelect.selectedIndex].text}%0A%0A`; 
        
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

        // --- 4. ENVÍO DE DATOS A GOOGLE SHEET ---
        
        fetch(SCRIPT_URL, {
            method: 'POST',
            body: JSON.stringify(pedidoData), 
            headers: {
                'Content-Type': 'text/plain' 
            }
        })
        .then(response => response.json())
        .then(result => {
            if (result.result === 'success') {
                console.log('Pedido registrado en Google Sheet con ID:', result.pedidoId);
            } else {
                console.error('Error al registrar pedido en Google Sheet:', result.message);
            }
        })
        .catch(error => {
            console.error('Error de conexión con Google Sheet:', error);
        });
        
        // --- 5. ABRIR WHATSAPP Y LIMPIAR ---
        
        window.open(whatsappURL, '_blank');
        
        setTimeout(() => {
            if (confirm('✅ El pedido se envió a WhatsApp. ¿Deseas limpiar el formulario ahora?')) {
                 limpiarFormularioYCarrito();
            }
        }, 1000); 
    });
}


// =======================================================
// 7. INICIALIZACIÓN
// =======================================================

function inicializarDOM() {
    // 1. Asignación de elementos del DOM
    menuContainer = document.getElementById('menu-container');
    carritoItems = document.getElementById('carrito-items');
    subtotalElement = document.getElementById('subtotal');
    envioElement = document.getElementById('envio');
    totalElement = document.getElementById('total');
    finalizarPedidoBtn = document.getElementById('finalizar-pedido-btn');
    carritoElement = document.getElementById('carrito');
    botonesFiltroContainer = document.getElementById('botones-filtro');
    nombreInput = document.getElementById('nombre');
    telefonoInput = document.getElementById('telefono');
    direccionInput = document.getElementById('direccion');
    pagoSelect = document.getElementById('metodo-pago');
    verPedidoMovilBtn = document.getElementById('ver-pedido-movil');
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener todos los elementos del DOM
    inicializarDOM();
    
    // 2. Renderizar contenido
    renderMenu(data);
    renderFiltros();
    renderCarrito();
    
    // 3. Configurar Event Listeners (Solo después de que los elementos existan)
    configurarEventos();
});