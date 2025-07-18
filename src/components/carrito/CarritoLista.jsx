import React from 'react'
import CarritoItem from './CarritoItem.jsx'
import '../../styles/Carrito.css'
import { toast } from 'react-toastify';
import { useCarrito } from '../../context/CarritoContext.jsx';
import { FaTrashAlt } from "react-icons/fa";


function CarritoLista() {
  const { carrito, handleEmptyCart } = useCarrito();
  const precioTotalItem = (carrito.reduce((total, item) => total + item.cantidad * item.precio, 0)).toFixed(2);

  return (
    <section className='contenedor-carrito centrar-contenedor' id='carrito'>
      <h2 className='titulo font-pangolin'>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <div className='item-carrito'>
          <p className='nombre-sin-items font-pangolin'>El carrito está vacío <span className='no-break'>:(</span></p>
        </div>
      ) : (
        <div className='lista-carrito'>
          {carrito.map((item) => (
            <CarritoItem key={item.id} item={item} />
          ))}
          <div className='footer-carrito font-lxgw-wenkai'>
            <p>Total: <span className='precio-total-item'>${precioTotalItem}</span></p>
            <div>
              <button className='boton-vaciar-carrito' onClick={() =>
                handleEmptyCart()
              }><FaTrashAlt /></button>
              <button className='boton-comprar-carrito' onClick={() => {
                toast.success("Gracias por su compra!");
                handleEmptyCart();
              }}>Comprar</button>
            </div>
          </div>
        </div>)}
    </section>
  )
}

export default CarritoLista