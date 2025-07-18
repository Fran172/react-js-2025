import React, { useState } from 'react'
import { useAdmin } from '../../context/AdminContext';
import { IoMdClose } from "react-icons/io";
import '../../styles/Formulario.css'


function FormAgregar() {
  const { agregarProducto, handleClose } = useAdmin();
  const [producto, setProducto] = useState({
    nombre: "",
    precio: "",
    stock: "",
    imagen: "",
    descripcion: ""
  })
  const [errores, setErrores] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setProducto({ ...producto, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    agregarProducto(producto)
    setProducto({
      nombre: "",
      precio: "",
      stock: "",
      imagen: "",
      descripcion: ""
    })
  }



  return (
    <>
      <section id='formAgregar' className='formulario font-pangolin centrar-contenedor'>
        <div className='d-flex justify-content-end'>
          <button className='formulario-close' onClick={() => handleClose()}>
            <IoMdClose />
          </button>
        </div>
        <h2 className='titulo'>Agregar Producto</h2>
        <form className='formulario-form' onSubmit={handleSubmit}>
          <label htmlFor='nombreAgregar' className='formulario-label'>Nombre:</label>
          <input type="text" id='nombreAgregar' name='nombre' className='formulario-input' value={producto.nombre || ""} onChange={handleChange} required />
          {errores.nombre && <p style={{ color: "red" }}>{errores.nombre}</p>}

          <label htmlFor='precioAgregar' className='formulario-label'>Precio:</label>
          <input type="number" id='precioAgregar' name='precio' className='formulario-input' value={producto.precio || ""}
            onChange={handleChange} required min="0" />
          {errores.precio && <p style={{ color: "red" }}>{errores.precio}</p>}

          <label htmlFor='stockAgregar' className='formulario-label'>Stock:</label>
          <input type="number" id='stockAgregar' name='stock' className='formulario-input' value={producto.stock || ""}
            onChange={handleChange} required min="0" />
          {errores.stock && <p style={{ color: "red" }}>{errores.stock}</p>}

          <label htmlFor='imagenAgregar' className='formulario-label'>Imagen URL:</label>
          <input type="url" id='imagenAgregar' name='imagen' className='formulario-input' value={producto.imagen || ""}
            onChange={handleChange} required />
          {errores.imagen && <p style={{ color: "red" }}>{errores.imagen}</p>}

          <label htmlFor='descripcionAgregar' className='formulario-label'>Descripción:</label>
          <textarea id='descripcionAgregar' name='descripcion' className='formulario-textarea' value={producto.descripcion || ""} onChange={handleChange} required />
          {errores.descripcion && <p style={{ color: "red" }}>{errores.descripcion}</p>}

          <button type='submit' className='formulario-enviar'>Agregar</button>
        </form>
      </section>
    </>
  )
}

export default FormAgregar