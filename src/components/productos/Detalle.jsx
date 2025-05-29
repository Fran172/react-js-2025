import React from 'react'
import '../../style/Detalle.css'

function Detalle({producto}) {
  return (
    <>
        <section className='detalle centrar-contenedor'>
            {producto ? (
                <>
                    <p className='detalle-p'>Producto: <span>{producto.titulo}</span></p>
                    <p className='detalle-p'>ID: <span>{producto.id}</span></p>
                    <p className='detalle-p'>Descripción: <span>{producto.descripcion}</span></p>
                    <p className='detalle-p'>Precio: <span>${producto.precio}</span></p>
                    <p className='detalle-p'>Stock: <span>{producto.stock}</span></p>
                </>
            ) : (<p>Producto no encontrado</p>)}
        </section>
    </>
  )
}

export default Detalle