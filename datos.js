//const fs = require('fs');

// Datos de productos electrónicos
const productos = [
        { 
            nombre: "CASE - SPACE",
            tipo:"Estuche",
            referencia:"Xs, Xr, Xs max, 11, 11 pro, 11 pro Max, 12/12 pro, 12 pro Max, 13/14, 13 pro, 13 pro Max, 14 pro, 14 pro max, 15,15 pro, 15 pro max,Note 20 ultra,S23 ultra, 10C, 9A,12C, Edge 40",
            cantidad: Math.floor(Math.random() * 20) + 1,
            color:"Transparente",
            precio: "25.000",
            imagen:"../imagenes/img1.jpeg",
            agotado: false
        },
        { 
            nombre: "CASE - OSITO",
            tipo:"Estuche",
            referencia:"iPhone, Xr, 7 plus,11, 13, 14",
            cantidad: Math.floor(Math.random() * 20) + 1,
            color:"Blanco - Rosa.",
            precio: "25.000",
            imagen:"../imagenes/C2.jpeg",
            agotado: false
        },

  { 
            nombre: "CASE - CADENA",
            tipo:"Estuche",
            referencia:"A12, A13, Note 10, A14, A51, Moto g30, A34, E22i, G13, Note 12, A22 4G, Y9 prime, E30/e40, Note 9, E13 ,Note 8",            
            cantidad: Math.floor(Math.random() * 20) + 1,
            color:"Azul - Morado - Rosa.",
            precio: "25.000",
            imagen:"../imagenes/C3.jpeg",
            agotado: false
        },

  { 
            nombre: "CASE ACUARIO + CADENA",
            tipo:"Estuche",
            referencia:"S21 fe, A12, A13, A24, A34, S20 fe, A21S, Note 12, A14, Note 8, 12C",
            cantidad: Math.floor(Math.random() * 20) + 1,
            color:"Transparente.",
            precio: "25.000",
            imagen:"../imagenes/C4.jpeg",
            agotado: false
        },

  { 
            nombre: "CASE - PIEDRAS",
            tipo:"Estuche",
            referencia:"S21 fe, A12, A13, A24, A34, S20 fe, A21S, Note 12, A14, Note 8, 12C",
            cantidad: Math.floor(Math.random() * 20) + 1,
            color:"Negro - Azul - Plateado - Morado - Rosa - Amarillo.",
            precio: "25.000",
            imagen:"../imagenes/C5.jpeg",
            agotado: false
        },

  { 
            nombre: "CASE - LENTES",
            tipo:"Estuche",
            referencia:"13 pro Max, 13/14, 14/15 plus",
            cantidad: Math.floor(Math.random() * 20) + 1,
            color:"Rosa - Blanco - Verde - Azul",
            precio: "25.000",
            imagen:"../imagenes/C6.jpeg",
            agotado: false
        },

  { 
            nombre: "CASE - LINX",
            tipo:"Estuche",
            referencia:"A05, A15, A05S, Redmi A3, Note 13 pro, 13C, A14, A24",
            cantidad: Math.floor(Math.random() * 20) + 1,
            color:"Café - Azul - Morado - Verde",
            precio: "25.000",
            imagen:"../imagenes/C7.jpeg",
            agotado: false
        },

        { 
            nombre: "CASE - ASTRONAUTA",
            tipo:"Estuche",
            referencia:"XS MAX, 12, 12 pro, 13, 13 pro, 14, 14 pro, 14 pro Max ",
            cantidad: Math.floor(Math.random() * 20) + 1,
            color:"Plateado - Azul - Morado - Dorado",
            precio: "15.000",
            imagen:"../imagenes/C8.jpeg",
            agotado: false
        },

   { 
            nombre: "CASE - OREJITAS",
            tipo:"Estuche",
            referencia:"Hot30 play, S23 fe, Spark 10pro, Reno 10 5G, Moto g84, Spark GO 2024, 15 pro, 15 pro max, 14 pro max ",
            cantidad: Math.floor(Math.random() * 20) + 1,
            color:"Rosa - Azul - Amarillo",
            precio: "20.000",
            imagen:"../imagenes/C9.jpeg",
            agotado: false
        },

   { 
            nombre: "CASE - OSO",
            tipo:"Estuche",
            referencia:"15, 15 pro, 15 pro Max, 11 pro Max, Moto g30 ",
            cantidad: Math.floor(Math.random() * 20) + 1,
            color:"Café - Azul - Morado - Verde",
            precio: "20.000",
            imagen:"../imagenes/C10.jpeg",
            agotado: false
        },

   { 
            nombre: "CASE - ANILLO",
            tipo:"Estuche",
            referencia:"iPhone 15, iPhone11, iPhone 15 pro, Redmi 12, A21S, Note 12",
            cantidad: Math.floor(Math.random() * 20) + 1,
            color:"Rojo - Azul - Morado - Verde -Blanco - Negro",
            precio: "30.000",
            imagen:"../imagenes/C11.jpeg",
            agotado: false
        },

   { 
            nombre: "CASE - GUMI",
            tipo:"Estuche",
            referencia:"13C, A15, Moto g84, Spark 10 pro, Hot 30 play, S23 fe, Reno 10, Spark go 2024, 14 pro Max, 15 pro Max, 15 pro",
            cantidad: Math.floor(Math.random() * 20) + 1,
            color:"Café - Azul - Morado - Verde",
            precio: "30.000",
            imagen:"../imagenes/C12.jpeg",
            agotado: false
        },

   { 
            nombre: "CASE - SPACE MATTE",
            tipo:"Estuche",
            referencia:"11 pro Max, Note 11, S23 ultra, S22 ultra, S20 fe, Moto g30, Note 12 ",
            cantidad: Math.floor(Math.random() * 20) + 1,
            color:"Azul - Morado - Verde -Blanco - Negro",
            precio: "22.000",
            imagen:"../imagenes/C13.jpeg",
            agotado: false
        },

   { 
            nombre: "CASE - OSO CRISTAL",
            tipo:"Estuche",
            referencia:"Moto g54, Moto g84, iPhone 15, iPhone 15 pro, 11 pro Max ",
            cantidad: Math.floor(Math.random() * 20) + 1,
            color:"Multicolor",
            precio: "30.000",
            imagen:"../imagenes/C14.jpeg",
            agotado: false
        },

   { 
            nombre: "CASE - MAGSAFE",
            tipo:"Estuche",
            referencia:"11, 11 pro, 11 pro Max, 12/12pro, 12 pro Max, 13 pro Max, 13 pro, 13, 14 pro max, 14 pro , 14, 15 pro max, 15 pro, 15 ",
            cantidad: Math.floor(Math.random() * 20) + 1,
            color:"Rosa - Azul - Verde",
            precio: "30.000",
            imagen:"../imagenes/C15.jpeg",
            agotado: false
        },

   { 
            nombre: "CASE - JUN",
            tipo:"Estuche con borde ",
            referencia:"15, 15 pro, 15 pro Max, 14 / 13, 14 pro, 14 pro Max, 13 pro Max, 11 pro Max, 12/ 12 pro ",
            cantidad: Math.floor(Math.random() * 20) + 1,
            color:"Azul - Morado - Verde -Blanco - Negro",
            precio: "35.000",
            imagen:"../imagenes/C16.jpeg",
            agotado: false
        },

        {
            nombre: "CASE - ",
                        tipo:"Estuche ",
                        referencia:"15, 15 pro, 15 pro Max, 14 / 13, 14 pro, 14 pro Max, 13 pro Max, 11 pro Max, 12/ 12 pro ",
                        cantidad: Math.floor(Math.random() * 20) + 1,
                        color:"Azul - Morado - Verde -Blanco - Negro",
                        precio: Math.floor(Math.random() * 2000) + 990,
                        imagen:"../imagenes/C17.jpg",
                        agotado: false
            },
            
            {
            nombre: "CASE - ",
                        tipo:"Estuche ",
                        referencia:"15, 15 pro, 15 pro Max, 14 / 13, 14 pro, 14 pro Max, 13 pro Max, 11 pro Max, 12/ 12 pro ",
                        cantidad: Math.floor(Math.random() * 20) + 1,
                        color:"Azul - Morado - Verde -Blanco - Negro",
                        precio: Math.floor(Math.random() * 2000) + 990,
                        imagen:"../imagenes/C18.jpg",
                        agotado: false
            },
            
            {
            nombre: "CASE - ",
                        tipo:"Estuche ",
                        referencia:"15, 15 pro, 15 pro Max, 14 / 13, 14 pro, 14 pro Max, 13 pro Max, 11 pro Max, 12/ 12 pro ",
                        cantidad: Math.floor(Math.random() * 20) + 1,
                        color:"Azul - Morado - Verde -Blanco - Negro",
                        precio: Math.floor(Math.random() * 2000) + 990,
                        imagen:"../imagenes/C19.jpg",
                        agotado: false
            },
            
            {
            nombre: "CASE - ",
                        tipo:"Estuche ",
                        referencia:"15, 15 pro, 15 pro Max, 14 / 13, 14 pro, 14 pro Max, 13 pro Max, 11 pro Max, 12/ 12 pro ",
                        cantidad: Math.floor(Math.random() * 20) + 1,
                        color:"Azul - Morado - Verde -Blanco - Negro",
                        precio: Math.floor(Math.random() * 2000) + 990,
                        imagen:"../imagenes/C20.jpg",
                        agotado: false
            },
            
            {
            nombre: "CASE - ",
                        tipo:"Estuche ",
                        referencia:"15, 15 pro, 15 pro Max, 14 / 13, 14 pro, 14 pro Max, 13 pro Max, 11 pro Max, 12/ 12 pro ",
                        cantidad: Math.floor(Math.random() * 20) + 1,
                        color:"Azul - Morado - Verde -Blanco - Negro",
                        precio: Math.floor(Math.random() * 2000) + 990,
                        imagen:"../imagenes/C21.jpg",
                        agotado: false
            },
            
            {
            nombre: "CASE - ",
                        tipo:"Estuche ",
                        referencia:"15, 15 pro, 15 pro Max, 14 / 13, 14 pro, 14 pro Max, 13 pro Max, 11 pro Max, 12/ 12 pro ",
                        cantidad: Math.floor(Math.random() * 20) + 1,
                        color:"Azul - Morado - Verde -Blanco - Negro",
                        precio: Math.floor(Math.random() * 2000) + 990,
                        imagen:"../imagenes/C22.jpg",
                        agotado: false
            },
            
            {
            nombre: "CASE - ",
                        tipo:"Estuche ",
                        referencia:"15, 15 pro, 15 pro Max, 14 / 13, 14 pro, 14 pro Max, 13 pro Max, 11 pro Max, 12/ 12 pro ",
                        cantidad: Math.floor(Math.random() * 20) + 1,
                        color:"Azul - Morado - Verde -Blanco - Negro",
                        precio: Math.floor(Math.random() * 2000) + 990,
                        imagen:"../imagenes/C23.jpg",
                        agotado: false
            },
            
            {
            nombre: "CASE - ",
                        tipo:"Estuche ",
                        referencia:"15, 15 pro, 15 pro Max, 14 / 13, 14 pro, 14 pro Max, 13 pro Max, 11 pro Max, 12/ 12 pro ",
                        cantidad: Math.floor(Math.random() * 20) + 1,
                        color:"Azul - Morado - Verde -Blanco - Negro",
                        precio: Math.floor(Math.random() * 2000) + 990,
                        imagen:"../imagenes/C24.jpg",
                        agotado: false
            },
            
            {
            nombre: "CASE - ",
                        tipo:"Estuche ",
                        referencia:"15, 15 pro, 15 pro Max, 14 / 13, 14 pro, 14 pro Max, 13 pro Max, 11 pro Max, 12/ 12 pro ",
                        cantidad: Math.floor(Math.random() * 20) + 1,
                        color:"Azul - Morado - Verde -Blanco - Negro",
                        precio: Math.floor(Math.random() * 2000) + 990,
                        imagen:"../imagenes/C25.jpg",
                        agotado: false
            },
            {
                nombre: " DISEÑOS AIR PODS ",
                tipo: "Audífonos",
                referencia: "Serie 3, Pro, Pro 2G",
                cantidad: Math.floor(Math.random() * 20) + 1,
                color:" Azul - Morado - Verde -Blanco - Negro",
                precio: "35.000",
                imagen:"../imagenes/A26.jpeg",
                agotado: false
    },
    
    {
                nombre: " DISEÑOS AIR PODS ",
                tipo: "Audífonos",
                referencia: "Serie 3 - Pro - Pro 2G",
                cantidad: Math.floor(Math.random() * 20) + 1,
                color:" Azul - Morado - Verde -Blanco - Negro",
                precio: "35.000",
                imagen:"../imagenes/A27.jpeg",
                agotado: false
    },
    
    {
                nombre: " DISEÑOS AIR PODS ",
                tipo: "Audífonos",
                referencia: "Serie 3",
                cantidad: Math.floor(Math.random() * 20) + 1,
                color:" Azul - Morado - Verde -Blanco - Negro",
                precio: "35.000",
                imagen:"../imagenes/A28.jpg",
                agotado: false
    },
    
    {
                nombre: " DISEÑOS AIR PODS ",
                tipo: "Audífonos",
                referencia: "Serie 2 - Pro - Pro 2G",
                cantidad: Math.floor(Math.random() * 20) + 1,
                color:" Azul - Morado - Verde -Blanco - Negro",
                precio: "35.000",
                imagen:"../imagenes/A29.jpg",
                agotado: false
    },
    
    {
                nombre: " DISEÑOS AIR PODS ",
                tipo: "Audífonos",
                referencia: "Serie 3 - Pro - Pro 2G",
                cantidad: Math.floor(Math.random() * 20) + 1,
                color:" Azul - Morado - Verde -Blanco - Negro",
                precio: "35.000",
                imagen:"../imagenes/A30.jpg",
                agotado: false
    },
    
    {
                nombre: " DISEÑOS AIR PODS ",
                tipo: "Audífonos",
                referencia: "Serie 3",
                cantidad: Math.floor(Math.random() * 20) + 1,
                color:" Azul - Morado - Verde -Blanco - Negro",
                precio: "35.000",
                imagen:"../imagenes/A31.jpg",
                agotado: false
    },
    
    {
                nombre: " DISEÑOS AIR PODS ",
                tipo: "Audífonos",
                referencia: "Serie 1",
                cantidad: Math.floor(Math.random() * 20) + 1,
                color:" Azul - Morado - Verde -Blanco - Negro",
                precio: "35.000",
                imagen:"../imagenes/A32.jpg",
                agotado: false
    },
    
    {
                nombre: " DISEÑOS AIR PODS ",
                tipo: "Audífonos",
                referencia: "Serie 2",
                cantidad: Math.floor(Math.random() * 20) + 1,
                color:" Azul - Morado - Verde -Blanco - Negro",
                precio: "35.000",
                imagen:"../imagenes/A33.jpg",
                agotado: false
    },
    
    {
                nombre: " DISEÑOS AIR PODS ",
                tipo: "Audífonos",
                referencia: "Serie 3 - Pro",
                cantidad: Math.floor(Math.random() * 20) + 1,
                color:" Azul - Morado - Verde -Blanco - Negro",
                precio: "35.000",
                imagen:"../imagenes/A34.jpg",
                agotado: false
    },
    
    {
                nombre: " DISEÑOS AIR PODS ",
                tipo: "Audífonos",
                referencia: "Serie 2 - Pro 2G",
                cantidad: Math.floor(Math.random() * 20) + 1,
                color:" Azul - Morado - Verde -Blanco - Negro",
                precio: "35.000",
                imagen:"../imagenes/CR35.jpg",
                agotado: false
    },  

    {
        nombre: " DISEÑOS AIR PODS ",
        tipo: "Audífonos",
        referencia: "Serie 2 - Pro 2G",
        cantidad: Math.floor(Math.random() * 20) + 1,
        color:" Azul - Morado - Verde -Blanco - Negro",
        precio: "35.000",
        imagen:"../imagenes/CR36.jpeg",
        agotado: false
},  

{
        nombre: " DISEÑOS AIR PODS ",
        tipo: "Audífonos",
        referencia: "Serie 2 - Pro 2G",
        cantidad: Math.floor(Math.random() * 20) + 1,
        color:" Azul - Morado - Verde -Blanco - Negro",
        precio: "35.000",
        imagen:"../imagenes/CR37.jpeg",
        agotado: false
},  

{
        nombre: " DISEÑOS AIR PODS ",
        tipo: "Audífonos",
        referencia: "Serie 2 - Pro 2G",
        cantidad: Math.floor(Math.random() * 20) + 1,
        color:" Azul - Morado - Verde -Blanco - Negro",
        precio: "35.000",
        imagen:"../imagenes/CR38.jpeg",
        agotado: false
},  

{
        nombre: " DISEÑOS AIR PODS ",
        tipo: "Audífonos",
        referencia: "Serie 2 - Pro 2G",
        cantidad: Math.floor(Math.random() * 20) + 1,
        color:" Azul - Morado - Verde -Blanco - Negro",
        precio: "35.000",
        imagen:"../imagenes/CR39.jpeg",
        agotado: false
},  

{
        nombre: " DISEÑOS AIR PODS ",
        tipo: "Audífonos",
        referencia: "Serie 2 - Pro 2G",
        cantidad: Math.floor(Math.random() * 20) + 1,
        color:" Azul - Morado - Verde -Blanco - Negro",
        precio: "35.000",
        imagen:"../imagenes/CR40.jpeg",
        agotado: false
},  

{
        nombre: " DISEÑOS AIR PODS ",
        tipo: "Audífonos",
        referencia: "Serie 2 - Pro 2G",
        cantidad: Math.floor(Math.random() * 20) + 1,
        color:" Azul - Morado - Verde -Blanco - Negro",
        precio: "35.000",
        imagen:"../imagenes/CR41.jpeg",
        agotado: false
},  

{
        nombre: " DISEÑOS AIR PODS ",
        tipo: "Audífonos",
        referencia: "Serie 2 - Pro 2G",
        cantidad: Math.floor(Math.random() * 20) + 1,
        color:" Azul - Morado - Verde -Blanco - Negro",
        precio: "35.000",
        imagen:"../imagenes/P42.jpeg",
        agotado: false
},  

{
        nombre: " DISEÑOS AIR PODS ",
        tipo: "Audífonos",
        referencia: "Serie 2 - Pro 2G",
        cantidad: Math.floor(Math.random() * 20) + 1,
        color:" Azul - Morado - Verde -Blanco - Negro",
        precio: "35.000",
        imagen:"../imagenes/P43.jpeg",
        agotado: false
},  

{
        nombre: " DISEÑOS AIR PODS ",
        tipo: "Audífonos",
        referencia: "Serie 2 - Pro 2G",
        cantidad: Math.floor(Math.random() * 20) + 1,
        color:" Azul - Morado - Verde -Blanco - Negro",
        precio: "35.000",
        imagen:"../imagenes/P44.jpeg",
        agotado: false
},  

{
        nombre: " DISEÑOS AIR PODS ",
        tipo: "Audífonos",
        referencia: "Serie 2 - Pro 2G",
        cantidad: Math.floor(Math.random() * 20) + 1,
        color:" Azul - Morado - Verde -Blanco - Negro",
        precio: "35.000",
        imagen:"../imagenes/P45.jpeg",
        agotado: false
},  

{
        nombre: " DISEÑOS AIR PODS ",
        tipo: "Audífonos",
        referencia: "Serie 2 - Pro 2G",
        cantidad: Math.floor(Math.random() * 20) + 1,
        color:" Azul - Morado - Verde -Blanco - Negro",
        precio: "35.000",
        imagen:"../imagenes/P46.jpg",
        agotado: false
},  

{
        nombre: " DISEÑOS AIR PODS ",
        tipo: "Audífonos",
        referencia: "Serie 2 - Pro 2G",
        cantidad: Math.floor(Math.random() * 20) + 1,
        color:" Azul - Morado - Verde -Blanco - Negro",
        precio: "35.000",
        imagen:"../imagenes/CM47.jpg",
        agotado: false
},  

{
        nombre: " DISEÑOS AIR PODS ",
        tipo: "Audífonos",
        referencia: "Serie 2 - Pro 2G",
        cantidad: Math.floor(Math.random() * 20) + 1,
        color:" Azul - Morado - Verde -Blanco - Negro",
        precio: "35.000",
        imagen:"../imagenes/CM48.jpg",
        agotado: false
},  

{
        nombre: " DISEÑOS AIR PODS ",
        tipo: "Audífonos",
        referencia: "Serie 2 - Pro 2G",
        cantidad: Math.floor(Math.random() * 20) + 1,
        color:" Azul - Morado - Verde -Blanco - Negro",
        precio: "35.000",
        imagen:"../imagenes/CM49.jpg",
        agotado: false
},  

{
        nombre: " DISEÑOS AIR PODS ",
        tipo: "Audífonos",
        referencia: "Serie 2 - Pro 2G",
        cantidad: Math.floor(Math.random() * 20) + 1,
        color:" Azul - Morado - Verde -Blanco - Negro",
        precio: "35.000",
        imagen:"../imagenes/CM50.jpg",
        agotado: false
},  
           
 ];


 function marcarAgotados() {
    productos.forEach(producto => {
        if (producto.cantidad === 0) {
            producto.agotado = true;
        }
    });
}

marcarAgotados();






