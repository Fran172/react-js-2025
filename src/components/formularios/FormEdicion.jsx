import React, { useEffect, useState } from 'react'
import { useAdmin } from '../../context/AdminContext';
import { IoMdClose } from "react-icons/io";
import '../../styles/Formulario.css'


function FormEdicion({ productoSeleccionado }) {
  const { actualizarProducto, handleClose } = useAdmin();
  const [producto, setProductos] = useState(productoSeleccionado)

  useEffect(() => {
    setProductos(productoSeleccionado)
  }, [productoSeleccionado])

  const handleChange = (e) => {
    const { name, value } = e.target
    setProductos({ ...producto, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    actualizarProducto(producto);
  }

  return (
    <>
      <section id='formEdicion' className='formulario font-pangolin centrar-contenedor'>
        <div className='d-flex justify-content-end'>
          <button className='formulario-close' onClick={() => handleClose()}>
            <IoMdClose />
          </button>
        </div>
        <h2 className='titulo'>Editar Producto</h2>
        <form className='formulario-form' onSubmit={handleSubmit}>
          <label htmlFor='idEdicion' className='formulario-label'>ID:</label>
          <input type="number" name='id' id='idEdicion' className='formulario-input' value={producto.id || ""} onChange={handleChange} readOnly />

          <label htmlFor='nombreEdicion' className='formulario-label'>Nombre:</label>
          <input type="text" name='nombre' id='nombreEdicion' className='formulario-input' value={producto.nombre || ""} onChange={handleChange} required />

          <label htmlFor='precioEdicion' className='formulario-label'>Precio:</label>
          <input type="number" name='precio' id='precioEdicion' className='formulario-input' value={producto.precio || ""} onChange={handleChange} required min="0" step="0.01" />

          <label htmlFor='stockEdicion' className='formulario-label'>Stock:</label>
          <input type="number" name='stock' id='stockEdicion' className='formulario-input' value={producto.stock || ""} onChange={handleChange} required min="0" />

          <label htmlFor='imagenEdicion' className='formulario-label'>Imagen URL:</label>
          <input type="url" name='imagen' id='imagenEdicion' className='formulario-input' value={producto.imagen || ""} onChange={handleChange} required />

          <label htmlFor='descripcionEdicion' className='formulario-label'>Descripción:</label>
          <textarea name='descripcion' id='descripcionEdicion' className='formulario-textarea' value={producto.descripcion || ""} onChange={handleChange} required />

          <button type='submit' className='formulario-enviar'>Guardar Cambios</button>
        </form>
      </section>
    </>
  )
}

export default FormEdicion