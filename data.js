const MENU_DATA = [
    // --- ENTRADAS ---
    {
        id: 44,
        name: "Patacón con Hogao",
        price: 15000,
        category: "Entradas",
        description: "Crocante Patacón con hogao y carne desmechada",
        image: "assets/imagenes/Entradas/img43.jpg"
    },
    {
        id: 45,
        name: "Salchipapa Americana",
        price: 15900,
        category: "Entradas",
        description: "",
        image: "assets/imagenes/Entradas/img49.jpg"
    },
    {
        id: 43,
        name: "Coctel de Camarones",
        price: 18900,
        category: "Entradas",
        description: "Canasta Crocante de Platano con Camarones",
        image: "assets/imagenes/Entradas/img40.jpg"
    },

    // --- ESPECIALES GRILLE ---
    {
        id: 47,
        name: "Pechuga a la Plancha",
        price: 22900,
        category: "Especiales Grille",
        description: "Pechuga a la parrilla acompañada de papa criolla PIDELO CON Ensalada de la casa o Vegetales al wok",
        image: "assets/imagenes/Especiales Grille/img63.jpg"
    },
    {
        id: 46,
        name: "Cerdo Tipacay",
        price: 23900,
        category: "Especiales Grille",
        description: "Cerdo con vegetales al wok ACOMPAÑADO DE papa a la Francesa",
        image: "assets/imagenes/Especiales Grille/img53.jpg"
    },
    {
        id: 49,
        name: "Steak a la Parrilla",
        price: 23900,
        category: "Especiales Grille",
        description: "PIDELO CON Ensalada de la casa o Vegetales al wok",
        image: "assets/imagenes/Especiales Grille/img66.jpg"
    },
    {
        id: 93,
        name: "Mini Churrasco",
        price: 26900,
        category: "Especiales Grille",
        description: "Delicioso Corte de Chata. acompañado de Yuca y chimichurri, PIDELO con Ensalada de la casa o Vegetales al wok",
        image: "assets/imagenes/Especiales Grille/img82.jpg"
    },
    {
        id: 94,
        name: "Pechuga en Salsa de Champiñones",
        price: 28900,
        category: "Especiales Grille",
        description: "Acompañado de yuca frita y ensalada de la Casa",
        image: "assets/imagenes/Especiales Grille/img73.jpg"
    },
    {
        id: 95,
        name: "Pechuga Parmesana",
        price: 28900,
        category: "Especiales Grille",
        description: "Acompañado de tomate, ensalada de la casa y papa francesa.",
        image: "assets/imagenes/Especiales Grille/img70.jpg"
    },
    {
        id: 48,
        name: "Salteado del Atlántico",
        price: 31500,
        category: "Especiales Grille",
        description: "Cubos de Salmón salteados con vegetales al wok ACOMPAÑADOS con papa a la francesa",
        image: "assets/imagenes/Especiales Grille/img60.jpg"
    },
    {
        id: 91,
        name: "Costillas BBQ",
        price: 33900,
        category: "Especiales Grille",
        description: "350gr de Deliciosas costillas de Cerdo. bañadas en salsa bbq. Acompañado de Aros de Cebolla. Papa Francesa y ensalada de la casa",
        image: "assets/imagenes/Especiales Grille/img89.jpg"
    },
    {
        id: 96,
        name: "Punta de Anca",
        price: 40900,
        category: "Especiales Grille",
        description: "Acompañado de papa francesa. ensalada de aguacate y chimichurri",
        image: "assets/imagenes/Especiales Grille/img95.jpg"
    },
    {
        id: 89,
        name: "Bife de Chorizo",
        price: 41900,
        category: "Especiales Grille",
        description: "Acompañado de papa francesa. ensalada de la casa y chimichurri",
        image: "assets/imagenes/Especiales Grille/img79.jpg"
    },
    {
        id: 90,
        name: "Churrasco Argentino",
        price: 43900,
        category: "Especiales Grille",
        description: "Acompañado de Queso grille Chorizo Ranchero, Ensalada de la casa. Yuca frita y Chimichurri",
        image: "assets/imagenes/Especiales Grille/img92.jpg"
    },
    {
        id: 92,
        name: "Filet Mignon",
        price: 45900,
        category: "Especiales Grille",
        description: "Tierno de lomo fino de res bañada en salsa demi-glace. Acompañado de papa francesa. ensalada de la casa",
        image: "assets/imagenes/Especiales Grille/img86.jpg"
    },

    // --- A LA MARINERA ---
    {
        id: 3,
        name: "Mini Trucha",
        price: 22900,
        category: "A La Marinera",
        description: "Pidelo Con ensalada de la casa o Vegetales al Wok",
        image: "assets/imagenes/A La Marinera/img8.jpg"
    },
    {
        id: 2,
        name: "Filete de Merlusa",
        price: 23900,
        category: "A La Marinera",
        description: "Pidelo Con ensalada de la casa o Vegetales al Wok",
        image: "assets/imagenes/A La Marinera/img9.jpg"
    },
    {
        id: 1,
        name: "Bagre en Salsa Criolla",
        price: 33900,
        category: "A La Marinera",
        description: "Acompañado de Arroz, Ensalada de la casa, patacon y yuca frita",
        image: "assets/imagenes/A La Marinera/img13.jpg"
    },
    {
        id: 5,
        name: "Trucha al ajillo",
        price: 33900,
        category: "A La Marinera",
        description: "O tambien Pidelo en salsa de champiñones Acompañado de Ensalada de la casa o papa fracesa",
        image: "assets/imagenes/A La Marinera/img12.jpg"
    },
    {
        id: 4,
        name: "Salmon",
        price: 42900,
        category: "A La Marinera",
        description: "Pidelo en salsa de Maracuya o al Ajillo, Acompañado de ensalada de la casa, con pure de papa o papa a la francesa",
        image: "assets/imagenes/A La Marinera/img139.jpg"
    },

    // --- PASTAS DE LA CASA ---
    {
        id: 86,
        name: "Pasta Alfredo",
        price: 19900,
        category: "Pastas De La Casa",
        description: "Con jamón y Maiz Tierno ACOMPAÑADO de Pan de Ajo",
        image: "assets/imagenes/Pastas De La Casa/img131.jpg"
    },
    {
        id: 87,
        name: "Pasta Carbonara",
        price: 21900,
        category: "Pastas De La Casa",
        description: "Con tocineta y champiñones ACOMPAÑADO de Pan de Ajo",
        image: "assets/imagenes/Pastas De La Casa/img133.jpg"
    },
    {
        id: 85,
        name: "Pasta a la Marinera",
        price: 29900,
        category: "Pastas De La Casa",
        description: "ACOMPAÑADO de Pan de Ajo",
        image: "assets/imagenes/Pastas De La Casa/img120.jpg"
    },
    {
        id: 88,
        name: "Pasta de la Casa",
        price: 34900,
        category: "Pastas De La Casa",
        description: "Con cubos de Salmón y Langostinos",
        image: "assets/imagenes/Pastas De La Casa/img123.jpg"
    },

    // --- ESPECIALES WOK ---
    {
        id: 54,
        name: "Especial Jakimeshi Pollo",
        price: 21900,
        category: "Especiales Wok",
        description: "Mezcla de Pollo o lomo de res con arroz frito y vegetales",
        image: "assets/imagenes/Especiales Wok/img151.jpg"
    },
    {
        id: 53,
        name: "Especial Jakimeshi Lomo",
        price: 22900,
        category: "Especiales Wok",
        description: "Mezcla de Pollo o lomo de res con arroz frito y vegetales",
        image: "assets/imagenes/Especiales Wok/img152.jpg"
    },
    {
        id: 55,
        name: "Menu Infantil",
        price: 23900,
        category: "Especiales Wok",
        description: "Trozos de Pollo en salsa teriyaki Acompañado de arroz yakimeshi o pastas. Incluye Jugo y Helado NOTA: Este menu es solo para niños.",
        image: "assets/imagenes/Especiales Wok/img194.jpg"
    },
    {
        id: 50,
        name: "Beef Teriyaki",
        price: 24900,
        category: "Especiales Wok",
        description: "Lomo de res en salsa teriyaki Acompañado de Vegetales a la Plancha",
        image: "assets/imagenes/Especiales Wok/img157.jpg"
    },
    {
        id: 51,
        name: "Chiken Noodles",
        price: 24900,
        category: "Especiales Wok",
        description: "Pasta Ramel al wok con 200gr de pollo ACOMPAÑADO Champiñones, maiz tierno y Brocoli, Bañado en salsa teriyaki",
        image: "assets/imagenes/Especiales Wok/img161.jpg"
    },
    {
        id: 52,
        name: "Chiken Teriyaki",
        price: 24900,
        category: "Especiales Wok",
        description: "Pechuga de Pollo en salsa teriyaki ACOMPAÑADO de vegetales al wok",
        image: "assets/imagenes/Especiales Wok/img145.jpg"
    },
    {
        id: 56,
        name: "Teppanyaki Conection",
        price: 28900,
        category: "Especiales Wok",
        description: "Lomo de res y pechuga a la plancha, marinados en salsa teriyaki, acompañado de vegetales a la planchay arroz yakimechi",
        image: "assets/imagenes/Especiales Wok/img170.jpg"
    },
    {
        id: 59,
        name: "Tokio Mignon",
        price: 28900,
        category: "Especiales Wok",
        description: "200gr de Lomo con tocineta (libre de Grasa), Acompañado de Champiñones y arroz yakimeshi",
        image: "assets/imagenes/Especiales Wok/img148.jpg"
    },
    {
        id: 58,
        name: "Teriyaki Mixto",
        price: 33900,
        category: "Especiales Wok",
        description: "Langostinos, lomo de res, camarones, trozos de pollo. marinados en salsa teriyaki ACOMPAÑADO de vegetales a la plancha y Arroz Yakimeshi",
        image: "assets/imagenes/Especiales Wok/img164.jpg"
    },
    {
        id: 57,
        name: "Teppanyaki de Camarones",
        price: 34900,
        category: "Especiales Wok",
        description: "Vegetales al wok con camarones salteados",
        image: "assets/imagenes/Especiales Wok/img167.jpg"
    },

    // --- COMBOS TERIYAKI ---
    {
        id: 6,
        name: "Teriyaki Clásico",
        price: 64900,
        category: "Combos Teriyaki",
        description: "5 porciones con Lomo de res. trozos de pechuga y cerdo, con vegetales al wok y arroz yakimeshi",
        image: "assets/imagenes/Combos Teriyaki/img223.jpg"
    },
    {
        id: 8,
        name: "Teriyaki Familiar",
        price: 71900,
        category: "Combos Teriyaki",
        description: "5 porciones con Lomo de res, trozos de pechuga y cerdo con vegetales al wok y arroz yakimeshi Acompañado de Papa a la Francesa y Gaseosa",
        image: "assets/imagenes/Combos Teriyaki/img211.jpg"
    },
    {
        id: 7,
        name: "Teriyaki Especial",
        price: 79900,
        category: "Combos Teriyaki",
        description: "5 porciones con Camarones. Lomo de res. Trozos de pechuga y cerdo Acompañado de Papas a la Francesa",
        image: "assets/imagenes/Combos Teriyaki/img214.jpg"
    },

    // --- CREPES ---
    {
        id: 10,
        name: "Crepes de Dulce",
        price: 16900,
        category: "Crepes",
        description: "Fresas, banano, trozos de durazno crema de leche y Helado",
        image: "assets/imagenes/Crepes/img188.jpg"
    },
    {
        id: 9,
        name: "Champiñon y Pollo",
        price: 16900,
        category: "Crepes",
        description: "Trozos de Pollo, bañado en salsa de champiñon con queso mozarella",
        image: "assets/imagenes/Crepes/img185.jpg"
    },
    {
        id: 11,
        name: "Crepes Mixto",
        price: 17900,
        category: "Crepes",
        description: "Trozos de lomo y pollo. bañado en salsa de la casa, con queso mozarella",
        image: "assets/imagenes/Crepes/img191.jpg"
    },

    // --- WAFLES ---
    {
        id: 12,
        name: "Wafles con Fruta",
        price: 15900,
        category: "Wafles",
        description: "Crujiente por fuera y suave por dentro, decorado con frutas frescas, crema chantilly y miel maple",
        image: "assets/imagenes/Crepes/img197.jpg"
    },

    // --- BEBIDAS FRIAS ---
    {
        id: 120,
        name: "Masato",
        price: 5000,
        category: "Bebidas Frias",
        description: "",
        image: ""
    },
    {
        id: 121,
        name: "Rumis",
        price: 5000,
        category: "Bebidas Frias",
        description: "",
        image: ""
    },
    {
        id: 124,
        name: "Jugo de Naranja",
        price: 6000,
        category: "Bebidas Frias",
        description: "",
        image: ""
    },
    {
        id: 122,
        name: "Jugos en Agua",
        price: 6500,
        category: "Bebidas Frias",
        description: "",
        image: ""
    },
    {
        id: 126,
        name: "Limonada Natural",
        price: 6500,
        category: "Bebidas Frias",
        description: "",
        image: ""
    },
    {
        id: 127,
        name: "Limonada de Hierbabuena",
        price: 7000,
        category: "Bebidas Frias",
        description: "",
        image: ""
    },
    {
        id: 123,
        name: "Jugos en Leche",
        price: 7500,
        category: "Bebidas Frias",
        description: "",
        image: ""
    },
    {
        id: 125,
        name: "Milo Frio",
        price: 7500,
        category: "Bebidas Frias",
        description: "",
        image: ""
    },
    {
        id: 129,
        name: "Limonada Cerezada",
        price: 8500,
        category: "Bebidas Frias",
        description: "",
        image: ""
    },
    {
        id: 128,
        name: "Limonada de Coco",
        price: 11000,
        category: "Bebidas Frias",
        description: "",
        image: ""
    },

    // --- BEBIDAS FRIAS CON CAFE ---
    {
        id: 134,
        name: "Soda Pasión - Soda de Limón - Frutos Rojos",
        price: 8900,
        category: "Bebidas Frias con Cafe",
        description: "",
        image: ""
    },
    {
        id: 130,
        name: "Frappe (café o Mocca)",
        price: 9800,
        category: "Bebidas Frias con Cafe",
        description: "",
        image: ""
    },
    {
        id: 132,
        name: "Affogato",
        price: 9800,
        category: "Bebidas Frias con Cafe",
        description: "",
        image: ""
    },
    {
        id: 131,
        name: "Frapuccino",
        price: 11500,
        category: "Bebidas Frias con Cafe",
        description: "",
        image: ""
    },
    {
        id: 133,
        name: "Malteadas",
        price: 13900,
        category: "Bebidas Frias con Cafe",
        description: "",
        image: ""
    },

    // --- BEBIDAS CALIENTES ---
    {
        id: 114,
        name: "Aromatica Hierbabuena",
        price: 2500,
        category: "Bebidas Calientes",
        description: "",
        image: ""
    },
    {
        id: 97,
        name: "Americano Mediano 7onz.",
        price: 2700,
        category: "Bebidas Calientes",
        description: "",
        image: ""
    },
    {
        id: 112,
        name: "Latte Pequeño",
        price: 3000,
        category: "Bebidas Calientes",
        description: "",
        image: ""
    },
    {
        id: 98,
        name: "Americano Grande 9onz.",
        price: 3500,
        category: "Bebidas Calientes",
        description: "",
        image: ""
    },
    {
        id: 99,
        name: "Tinto Campesino 7onz.",
        price: 3500,
        category: "Bebidas Calientes",
        description: "",
        image: ""
    },
    {
        id: 101,
        name: "Expresso",
        price: 3500,
        category: "Bebidas Calientes",
        description: "",
        image: ""
    },
    {
        id: 100,
        name: "Tinto Campesino 9onz.",
        price: 4000,
        category: "Bebidas Calientes",
        description: "",
        image: ""
    },
    {
        id: 103,
        name: "Macchiato",
        price: 4000,
        category: "Bebidas Calientes",
        description: "",
        image: ""
    },
    {
        id: 102,
        name: "Expresso Doble",
        price: 4500,
        category: "Bebidas Calientes",
        description: "",
        image: ""
    },
    {
        id: 111,
        name: "Latte",
        price: 4500,
        category: "Bebidas Calientes",
        description: "",
        image: ""
    },
    {
        id: 113,
        name: "Aromatica de Frutas",
        price: 4500,
        category: "Bebidas Calientes",
        description: "",
        image: ""
    },
    {
        id: 115,
        name: "Te en leche",
        price: 4900,
        category: "Bebidas Calientes",
        description: "",
        image: ""
    },
    {
        id: 117,
        name: "Chocolate",
        price: 4900,
        category: "Bebidas Calientes",
        description: "",
        image: ""
    },
    {
        id: 104,
        name: "Capuchino de la casa",
        price: 6200,
        category: "Bebidas Calientes",
        description: "",
        image: ""
    },
    {
        id: 106,
        name: "Capuchino Italiano",
        price: 6200,
        category: "Bebidas Calientes",
        description: "",
        image: ""
    },
    {
        id: 116,
        name: "Milo Caliente",
        price: 6500,
        category: "Bebidas Calientes",
        description: "",
        image: ""
    },
    {
        id: 105,
        name: "Capuchino Baileys",
        price: 7900,
        category: "Bebidas Calientes",
        description: "",
        image: ""
    },
    {
        id: 107,
        name: "Capuchino Caramelo",
        price: 7900,
        category: "Bebidas Calientes",
        description: "",
        image: ""
    },
    {
        id: 108,
        name: "Capuchino Macadamia",
        price: 7900,
        category: "Bebidas Calientes",
        description: "",
        image: ""
    },
    {
        id: 109,
        name: "Capuchino con Amaretto",
        price: 7900,
        category: "Bebidas Calientes",
        description: "",
        image: ""
    },
    {
        id: 110,
        name: "Café Bomba",
        price: 7900,
        category: "Bebidas Calientes",
        description: "",
        image: ""
    },
    {
        id: 118,
        name: "Moccaccino",
        price: 8200,
        category: "Bebidas Calientes",
        description: "",
        image: ""
    },
    {
        id: 119,
        name: "Vino Caliente",
        price: 11500,
        category: "Bebidas Calientes",
        description: "",
        image: ""
    },

    // --- HORNEADOS ---
    {
        id: 77,
        name: "Pasabocas",
        price: 1900,
        category: "Horneados",
        description: "",
        image: ""
    },
    {
        id: 67,
        name: "Galleta de Avena",
        price: 2500,
        category: "Horneados",
        description: "",
        image: ""
    },
    {
        id: 84,
        name: "Trufas de Chocolate",
        price: 2500,
        category: "Horneados",
        description: "",
        image: ""
    },
    {
        id: 68,
        name: "Galleta de Chips de Chocolate",
        price: 2700,
        category: "Horneados",
        description: "",
        image: ""
    },
    {
        id: 71,
        name: "Galleta Infantil",
        price: 3200,
        category: "Horneados",
        description: "",
        image: ""
    },
    {
        id: 61,
        name: "Almojabana",
        price: 3500,
        category: "Horneados",
        description: "",
        image: ""
    },
    {
        id: 75,
        name: "Pan de Bono",
        price: 3500,
        category: "Horneados",
        description: "",
        image: ""
    },
    {
        id: 60,
        name: "Alfajor",
        price: 3600,
        category: "Horneados",
        description: "",
        image: ""
    },
    {
        id: 62,
        name: "Corazones",
        price: 3800,
        category: "Horneados",
        description: "",
        image: ""
    },
    {
        id: 69,
        name: "Galleta de Granola",
        price: 3800,
        category: "Horneados",
        description: "",
        image: ""
    },
    {
        id: 70,
        name: "Galleta Florentina de Mani",
        price: 3800,
        category: "Horneados",
        description: "",
        image: ""
    },
    {
        id: 64,
        name: "Croissant",
        price: 4000,
        category: "Horneados",
        description: "",
        image: ""
    },
    {
        id: 72,
        name: "Mantecada",
        price: 4000,
        category: "Horneados",
        description: "",
        image: ""
    },
    {
        id: 74,
        name: "Palito de Queso",
        price: 4000,
        category: "Horneados",
        description: "",
        image: ""
    },
    {
        id: 79,
        name: "Pastel Gloria",
        price: 4000,
        category: "Horneados",
        description: "",
        image: ""
    },
    {
        id: 81,
        name: "Rollo de Canela",
        price: 4000,
        category: "Horneados",
        description: "",
        image: ""
    },
    {
        id: 65,
        name: "Danesas",
        price: 4200,
        category: "Horneados",
        description: "",
        image: ""
    },
    {
        id: 63,
        name: "Croissant de Chocolate",
        price: 4500,
        category: "Horneados",
        description: "",
        image: ""
    },
    {
        id: 78,
        name: "Pastel Carne",
        price: 4600,
        category: "Horneados",
        description: "",
        image: ""
    },
    {
        id: 80,
        name: "Pastel Pollo",
        price: 4600,
        category: "Horneados",
        description: "",
        image: ""
    },
    {
        id: 76,
        name: "PAN DE LA ABUELA",
        price: 5000,
        category: "Horneados",
        description: "",
        image: ""
    },
    {
        id: 73,
        name: "Milhoja",
        price: 6000,
        category: "Horneados",
        description: "",
        image: ""
    },
    {
        id: 82,
        name: "Sandwich de jamón queso",
        price: 7500,
        category: "Horneados",
        description: "",
        image: ""
    },
    {
        id: 83,
        name: "Sandwich de Pollo",
        price: 8500,
        category: "Horneados",
        description: "",
        image: ""
    },
    {
        id: 66,
        name: "Domo mini Muffins (12 unid)",
        price: 15000,
        category: "Horneados",
        description: "",
        image: ""
    },

    // --- CERVEZAS ---
    {
        id: 136,
        name: "Club Colombia",
        price: 7900,
        category: "Cervezas",
        description: "",
        image: ""
    },
    {
        id: 135,
        name: "Corona",
        price: 9900,
        category: "Cervezas",
        description: "",
        image: ""
    },

    // --- POSTRES ---
    {
        id: 148,
        name: "Torta de Chocolate",
        price: 8000,
        category: "Postres",
        description: "",
        image: ""
    },
    {
        id: 149,
        name: "Torta Zanahoria",
        price: 8000,
        category: "Postres",
        description: "",
        image: ""
    },
    {
        id: 150,
        name: "Torta de Ciruela",
        price: 8000,
        category: "Postres",
        description: "",
        image: ""
    },
    {
        id: 151,
        name: "Torta de Queso con Mora",
        price: 8000,
        category: "Postres",
        description: "",
        image: ""
    },
    {
        id: 152,
        name: "Redvelvet",
        price: 8000,
        category: "Postres",
        description: "",
        image: ""
    },
    {
        id: 153,
        name: "Cheesecake Maracuya con Mora",
        price: 8000,
        category: "Postres",
        description: "",
        image: ""
    },
    {
        id: 154,
        name: "Toffee",
        price: 8000,
        category: "Postres",
        description: "",
        image: ""
    },
    {
        id: 155,
        name: "Cheecake Oreo",
        price: 8000,
        category: "Postres",
        description: "",
        image: ""
    },
    {
        id: 156,
        name: "Torta semilla de Amapola",
        price: 8000,
        category: "Postres",
        description: "",
        image: ""
    },
    {
        id: 157,
        name: "Tiramisú",
        price: 8000,
        category: "Postres",
        description: "",
        image: ""
    },
    {
        id: 158,
        name: "Tres Leches",
        price: 8000,
        category: "Postres",
        description: "",
        image: ""
    },

    // --- DESAYUNOS ---
    {
        id: 18,
        name: "Changua Sencilla",
        price: 8500,
        category: "Desayunos",
        description: "",
        image: "assets/imagenes/Desayunos/img130.jpg"
    },
    {
        id: 16,
        name: "Cereal",
        price: 8900,
        category: "Desayunos",
        description: "",
        image: "assets/imagenes/Desayunos/img97.jpg"
    },
    {
        id: 39,
        name: "Porción de Frutas",
        price: 8900,
        category: "Desayunos",
        description: "",
        image: "assets/imagenes/Desayunos/img96.jpg"
    },
    {
        id: 17,
        name: "Changua Especial",
        price: 10900,
        category: "Desayunos",
        description: "Con Almojabana y Queso",
        image: "assets/imagenes/Desayunos/img251.jpg"
    },
    {
        id: 27,
        name: "Huevos Escalfados",
        price: 11900,
        category: "Desayunos",
        description: "Acompañados de Jamón, queso y arepa con Mantequilla y Mermelada",
        image: "assets/imagenes/Desayunos/img33.jpg"
    },
    {
        id: 31,
        name: "Migao de Chocolate",
        price: 12900,
        category: "Desayunos",
        description: "",
        image: "assets/imagenes/Desayunos/img21.jpg"
    },
    {
        id: 28,
        name: "Huevos Jalapeños",
        price: 13500,
        category: "Desayunos",
        description: "Huevos batidos en mantequilla clarificada, queso mozarella. champiñon ahumado, bacón y jamón ahumado, con unos deliciosos chiles jalapeños",
        image: "assets/imagenes/Desayunos/img17.jpg"
    },
    {
        id: 29,
        name: "Huevos Rancheros Especiales",
        price: 13500,
        category: "Desayunos",
        description: "Huevos sumergidos en salsa ranchera con salchicha ranchera con arepa asada",
        image: "assets/imagenes/Desayunos/img39.jpg"
    },
    {
        id: 33,
        name: "Omelet de Pollo",
        price: 13500,
        category: "Desayunos",
        description: "Pollo salteado con finas hiervas.queso mozarella y champiñon",
        image: "assets/imagenes/Desayunos/img114.jpg"
    },
    {
        id: 24,
        name: "Fruti Granola",
        price: 13900,
        category: "Desayunos",
        description: "",
        image: "assets/imagenes/Desayunos/img95.jpg"
    },
    {
        id: 32,
        name: "Omelet de Carne",
        price: 13900,
        category: "Desayunos",
        description: "Carne desmechada. Maíz tierno, queso mozarella y tocineta",
        image: "assets/imagenes/Desayunos/img113.jpg"
    },
    {
        id: 34,
        name: "Omelet Especial",
        price: 13900,
        category: "Desayunos",
        description: "Maiz tierno, tocineta, champiñón queso mozarella. jamón, pollo",
        image: "assets/imagenes/Desayunos/img112.jpg"
    },
    {
        id: 35,
        name: "Omelet Vegetariano",
        price: 13900,
        category: "Desayunos",
        description: "Clara de huevo, aceite de Oliva espinaca, brocoli, champinon, , maiz tierno y queso",
        image: "assets/imagenes/Desayunos/img111.jpg"
    },
    {
        id: 37,
        name: "Parafait Miel/Granola",
        price: 13900,
        category: "Desayunos",
        description: "Frutal Cremoso y saludable. postre matutino en yogurth griego, acompañado de frutillas, melocotones bañados en miel natural y coulis de frutos rojos.",
        image: "assets/imagenes/Desayunos/img94.jpg"
    },
    {
        id: 19,
        name: "Chocolate Toffe",
        price: 14500,
        category: "Desayunos",
        description: "Pan de Bono. Queso Campesino Almojabana y Chocolate",
        image: "assets/imagenes/Desayunos/img258.jpg"
    },
    {
        id: 26,
        name: "Huevos al Nido",
        price: 14900,
        category: "Desayunos",
        description: "Huevos Fritos, tocineta y Papa Francesa",
        image: "assets/imagenes/Desayunos/img35.jpg"
    },
    {
        id: 25,
        name: "Huerto de Atun",
        price: 15900,
        category: "Desayunos",
        description: "Ensalada de lechuga con lomitos de Atún. acompañada de huevo cocido, tomates cherry. aguacate y queso",
        image: "assets/imagenes/Desayunos/img89.jpg"
    },
    {
        id: 42,
        name: "Wafles con Frutas",
        price: 15900,
        category: "Desayunos",
        description: "",
        image: "assets/imagenes/Desayunos/img75.jpg"
    },
    {
        id: 15,
        name: "Calentao Paisa",
        price: 16500,
        category: "Desayunos",
        description: "Frijol, arroz, chorizo, plátano, huevo frito y arepa",
        image: "assets/imagenes/Desayunos/img15.jpg"
    },
    {
        id: 22,
        name: "Desayuno Buenos Días",
        price: 16500,
        category: "Desayunos",
        description: "Delicioso desayuno al estilo texano. Huevos rancheros en mozarella, acompañado de frutas frescas, rodajas de pan aliñado y jugo de naranja natural",
        image: "assets/imagenes/Desayunos/img255.jpg"
    },
    {
        id: 30,
        name: "Jardin de Sabores",
        price: 16900,
        category: "Desayunos",
        description: "Ensalada de lechuga con Pollo a las finas hierbas corte en julianas, acompañada de huevo cocido, tomates cherry y láminas de palta",
        image: "assets/imagenes/Desayunos/img88.jpg"
    },
    {
        id: 20,
        name: "Croque Madame en Grano Noble",
        price: 17900,
        category: "Desayunos",
        description: "Pan multigranos con aguacate laminado, acompañados de exquisito croque madame, bañado en salsa holandesa y bacon ahumado",
        image: "assets/imagenes/Desayunos/img74.jpg"
    },
    {
        id: 38,
        name: "Pollo en Hogaza y Bechamel",
        price: 17900,
        category: "Desayunos",
        description: "Pan Ciabata - Crema de Aguacate Trozos de Pollo Tomate Cherry Huevo Cocido - Salsa Bechamel",
        image: "assets/imagenes/Desayunos/img56.jpg"
    },
    {
        id: 13,
        name: "Amor Perfecto",
        price: 18900,
        category: "Desayunos",
        description: "Fresco pan de Semillas - Queso Crema. Huevos Revueltos - Aguacate Fresco Yogurt Griego - Granola - Fresas Mora - Kiwy",
        image: "assets/imagenes/Desayunos/img53.jpg"
    },
    {
        id: 14,
        name: "Bisteck a Caballo",
        price: 18900,
        category: "Desayunos",
        description: "Carne en Salsa Criolla con huevo, arroz y arepa",
        image: "assets/imagenes/Desayunos/img36.jpg"
    },
    {
        id: 21,
        name: "Cumbre Italiana",
        price: 18900,
        category: "Desayunos",
        description: "Pan Focaccia - Crema de Aguacate Pollo Desmenuzado - Cebolla Salteada Huevos - Nutella - Banano Fresas",
        image: "assets/imagenes/Desayunos/img54.jpg"
    },
    {
        id: 23,
        name: "Extasis en Crocancia de Pan",
        price: 18900,
        category: "Desayunos",
        description: "Tajada de pan de Centeno esparcidas en cheese cream, con el frescar de la lechuga, la dulzura de los tomates cherry, la intesnidad del pimiento y la elegancia de la cebolla asada, acompañadas de champiñones, huevos pochados y crocancia de bacon.",
        image: "assets/imagenes/Desayunos/img71.jpg"
    },
    {
        id: 36,
        name: "Pancakes De la Casa",
        price: 18900,
        category: "Desayunos",
        description: "Huevos en omelette, acompañados con unos tiernos pancakes americanos, miel de maple, frutilla y durazno laminado.",
        image: "assets/imagenes/Desayunos/img13.jpg"
    },
    {
        id: 40,
        name: "Ritual Matutino de Sibarita",
        price: 19500,
        category: "Desayunos",
        description: "Caldo de costilla, tostadas con mantequilla, huevos revueltos al gusto de la abuela con la sinfonía de cebolla y tomate acompañado de un Chocolatico de molinillo con su espuma.",
        image: "assets/imagenes/Desayunos/img257.jpg"
    },
    {
        id: 41,
        name: "Tesoros de Salmón",
        price: 27900,
        category: "Desayunos",
        description: "Tostadas de guacamole con huevo cocido, abrazadas por el ahumado salmon del mar acompañadas de lechuga y tomates cherry.",
        image: "assets/imagenes/Desayunos/img72.jpg"
    },

    // --- VINOS ---
    {
        id: 169,
        name: "Vino Caliente",
        price: 11500,
        category: "Vinos",
        description: "",
        image: ""
    },
    {
        id: 168,
        name: "Copa De Vino",
        price: 16900,
        category: "Vinos",
        description: "",
        image: ""
    },
    {
        id: 162,
        name: "Viña Peña abernet Sauvignon",
        price: 59900,
        category: "Vinos",
        description: "",
        image: ""
    },
    {
        id: 163,
        name: "Sauvignon Blanco",
        price: 69000,
        category: "Vinos",
        description: "",
        image: ""
    },
    {
        id: 161,
        name: "Frontera Cabernet Sauvignon",
        price: 72900,
        category: "Vinos",
        description: "",
        image: ""
    },
    {
        id: 160,
        name: "Gato Negro Cabernet Sauvignon",
        price: 74900,
        category: "Vinos",
        description: "",
        image: ""
    },
    {
        id: 166,
        name: "Don Humberto Malbec",
        price: 74900,
        category: "Vinos",
        description: "",
        image: ""
    },
    {
        id: 167,
        name: "Cono sur bicicleta",
        price: 78900,
        category: "Vinos",
        description: "",
        image: ""
    },
    {
        id: 164,
        name: "Vino Espumoso Frances",
        price: 79000,
        category: "Vinos",
        description: "",
        image: ""
    },
    {
        id: 165,
        name: "Sauvignon Blanco",
        price: 79000,
        category: "Vinos",
        description: "",
        image: ""
    },
    {
        id: 159,
        name: "Casillero Del Diablo Cabernet Sauvignon",
        price: 79900,
        category: "Vinos",
        description: "",
        image: ""
    },

    // --- COCTELES ---
    {
        id: 144,
        name: "Amaretto Soul",
        price: 18900,
        category: "Cocteles",
        description: "",
        image: ""
    },
    {
        id: 145,
        name: "Amaretto, limón",
        price: 18900,
        category: "Cocteles",
        description: "",
        image: ""
    },
    {
        id: 143,
        name: "Mojito Oceanic",
        price: 20900,
        category: "Cocteles",
        description: "Ron, Convier, limón, soda",
        image: ""
    },
    {
        id: 138,
        name: "Tequila, convier, limón",
        price: 21900,
        category: "Cocteles",
        description: "",
        image: ""
    },
    {
        id: 139,
        name: "Tequila Sunrise",
        price: 21900,
        category: "Cocteles",
        description: "",
        image: ""
    },
    {
        id: 140,
        name: "Tequila, Naranja, Granadina",
        price: 21900,
        category: "Cocteles",
        description: "",
        image: ""
    },
    {
        id: 141,
        name: "Paloma Sierra",
        price: 21900,
        category: "Cocteles",
        description: "",
        image: ""
    },
    {
        id: 142,
        name: "Tequila, limón, Toronja",
        price: 21900,
        category: "Cocteles",
        description: "",
        image: ""
    },
    {
        id: 147,
        name: "Crema de Coco, Crema de Baileys, piña",
        price: 21900,
        category: "Cocteles",
        description: "",
        image: ""
    },
    {
        id: 137,
        name: "Margarita Sierra",
        price: 23900,
        category: "Cocteles",
        description: "",
        image: ""
    },
    {
        id: 146,
        name: "Piña Colada",
        price: 23900,
        category: "Cocteles",
        description: "",
        image: ""
    }
];