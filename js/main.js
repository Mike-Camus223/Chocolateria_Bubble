// //CODIGO PRINCIPAL Y FUNCIONES//

// //ARRAY VACIA PARA ALMACENAR DATOS//

let carrito = [];

// FUNCIONES

function cargarCarrito() {
  const carritoContainer = document.getElementById('productos-container');
  carritoContainer.innerHTML = '';

  carrito.forEach(producto => {
    const productDiv = document.createElement('div');
    productDiv.className = 'carrito-canvas-divisor';
    productDiv.dataset.id = producto.id;
    
    productDiv.innerHTML = `
      <div class="carrito-canvas-img-base">
        <img src="${producto.img}" alt="${producto.nombre}" class="carrito-canvas-img">
      </div>
      <div class="carrito-canvas-info">
        <div class="carrito-canvas-base-titu">
          <h3 class="carrito-titu">${producto.nombre}</h3>
        </div>
        <div class="carrito-canvas-descri-base">
          <p class="carrito-canvas-descri">${producto.descripcion}</p>
        </div>
        <div class="contador-base">
          <button class="boton-vaciar" onclick="eliminarProducto(${producto.id})">Eliminar</button>
        </div>
        <div class="precio-base">
          <p class="precio-carro">$${producto.precio}</p>
        </div>
      </div>
    `;
    
    carritoContainer.appendChild(productDiv);
  });

  actualizarTotal();
}

function agregarProducto(index) {
  const producto = productos[index];
  carrito.push(producto);
  cargarCarrito();
}

function eliminarProducto(id) {
  carrito = carrito.filter(producto => producto.id !== id);
  cargarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  cargarCarrito();
}

function comprar() {
  if (carrito.length === 0) {
    alert("¡Oops No hay nada en el carrito!");
  } else {
    const totalGastado = carrito.reduce((total, producto) => total + producto.precio, 0);
    vaciarCarrito();
    alert(`¡Gracias por comprar en la CandyShop! Su gasto total fue de: $${totalGastado}. También, su ID de pedido es: ${Date.now()}`);
  }
}

function actualizarTotal() {
  const total = document.getElementById('total');
  const totalPrecio = carrito.reduce((total, producto) => total + producto.precio, 0);
  total.textContent = `$${totalPrecio}`;
}

window.onload = cargarCarrito;