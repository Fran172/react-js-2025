import React, { useState, useEffect } from 'react';
import { useAdmin } from '../../context/AdminContext';
import "../../styles/producto.css"

function PaginaItem({ producto }) {
  const { handleOpenEditor, setSeleccionado, eliminarProducto } = useAdmin();
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  const [timer, setTimer] = useState(null);

  const handleEliminarClick = () => {
    setMostrarConfirmacion(true);
    const newTimer = setTimeout(() => { setMostrarConfirmacion(false) }, 5000);
    setTimer(newTimer);
  };

  const handleCancelar = () => {
    setMostrarConfirmacion(false);
    if (timer) {
      clearTimeout(timer);
      setTimer(null);
    }
  };

  const handleConfirmarEliminar = () => {
    if (timer) {
      clearTimeout(timer);
      setTimer(null);
    }
    eliminarProducto(producto.id);
    setMostrarConfirmacion(false);
  };

  useEffect(() => {
    return () => { if (timer) clearTimeout(timer) }
  }, [timer]);

  return (
    <div key={producto.id} className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card card-producto font-pangolin h-100">
        <img src={producto.imagen} className="card-img-top img-fluid" alt={producto.nombre} />
        <h5 className="nombre-producto card-title">{producto.nombre}</h5>
        <p className="precio-producto card-text">${producto.precio}</p>
        <button className='boton-editar-producto' onClick={() => {
          setSeleccionado(producto);
          handleOpenEditor();
        }}>
          Editar
        </button>
        {!mostrarConfirmacion ? (
          <button className='boton-eliminar-producto' onClick={handleEliminarClick}>
            Eliminar
          </button>
        ) : (
          <div>
            <p className='parrafo-confirmacion'>¿Está seguro de eliminar el producto?</p>
            <button className='boton-eliminar-producto' onClick={handleConfirmarEliminar}>
              Eliminar
            </button>
            <button className='boton-cancelar' onClick={handleCancelar}>
              Cancelar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PaginaItem;