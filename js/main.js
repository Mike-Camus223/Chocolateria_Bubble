//CODIGO PRINCIPAL Y FUNCIONES//

//ARRAY VACIA PARA ALMACENAR DATOS//

let carrito = [];

// FUNCIONES//

//AGREGAR PRODUCTO AL ARRAY //
function AgregarProducto(index) {
    carrito.push(productos[index]);
    mostrarCarrito();
}

// VACIAR CARRITO //

function vaciarCarrito() {
    carrito = [];
    mostrarCarrito();
}

// FUNCION DE COMPRA DEL CARRITO Y ALERT //

function comprar() {
    vaciarCarrito();
    alert("¡Muchas gracias por comprar en la CandyShop!");
}

// FUNCION PARA MOSTRAR LOS PRODUCTOS DEL CARRITO//

function mostrarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const total = document.getElementById('total');


    listaCarrito.innerHTML = '';

    let totalPrecio = 0;
    

// MOSTRAR CADA PRODUCTO DEL CARRO //

    carrito.forEach(producto => {
        const item = document.createElement('li');
        item.textContent = `${producto.nombre} - $${producto.precio}`;
        listaCarrito.appendChild(item);

        totalPrecio += producto.precio;
    });

    total.textContent = `$${totalPrecio}`;
}

