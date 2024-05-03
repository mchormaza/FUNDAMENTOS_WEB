const lista_productosContainer = document.getElementById("lista_productos");

productos.forEach(producto => {
    const productoHTML = `
        <div class="producto">
            <img src="${producto.imagen}" alt="${producto.nombre}"></img>
            <h3>${producto.nombre}</h3>
            <p>Tipo: ${producto.tipo}</p>
            <p>Referencia: ${producto.referencia}</p>
            <p>Color: ${producto.color}</p>
            <p>Precio: $${producto.precio}</p>
            <p>Cantidad disponible: ${producto.cantidad}</p>
            <p>Disponible: ${producto.agotado ? 'Agotado' : 'Si'}</p>
        </div>
    `;
    lista_productosContainer.innerHTML += productoHTML;
});

