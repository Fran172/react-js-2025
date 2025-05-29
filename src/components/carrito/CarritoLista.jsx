import React from 'react'
import CarritoItem from './CarritoItem.jsx'
import '../../style/Carrito.css'

function CarritoLista({carritoLista, handleAddToCart, handleRemoveFromCart, onEmptyCart}) {
  const precioTotal = (carritoLista.reduce((total, item) => total + item.cantidad * item.precio, 0)).toFixed(2);
  return (
    <section className='contenedor-carrito centrar-contenedor' id='carrito'>
      <h2 className='titulo font-pangolin'>Carrito de Compras</h2>
      {carritoLista.length === 0 ? (
        <div className='item-carrito'>
          <p className='titulo-sin-items font-pangolin'>El carrito está vacío :(</p>
        </div>
      ) : (
      <div className='lista-carrito'>
        {carritoLista.map((item) => (
          <CarritoItem key={item.id} item={item} onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart}/>
        ))}
        <div className='footer-carrito font-lxgw-wenkai'>
          <p>Total: <span className='precio-total-item'>${precioTotal}</span></p>
          <div>
            <button className='boton-vaciar-carrito' onClick={() =>
              onEmptyCart()
            }>🗑</button>
            <button className='boton-comprar-carrito' onClick={() => {
              alert("Productos comprados!");
              onEmptyCart();
            }}>Comprar</button>
          </div>
        </div>
      </div>)}
    </section>
  )
}

export default CarritoLista