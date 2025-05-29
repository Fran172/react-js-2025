import React from 'react';
import ProductoItem from './ProductoItem.jsx'
import '../../style/Producto.css'

function ProductosLista({productos, handleAddToCart}) {
  return (
    <section className='contenedor-productos' id='productos'>
      <h2 className='titulo font-pangolin'>Productos</h2>
      <div>
        {productos
          .filter(producto => producto.stock > 0)
          .map((producto) => (
              <ProductoItem key={producto.id} producto={producto} onAddToCart={handleAddToCart}/>
          ))
        }
      </div>
    </section>
  )
}

export default ProductosLista