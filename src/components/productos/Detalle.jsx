import React from 'react'
import { useCarrito } from '../../context/CarritoContext';
import loading from '../../assets/loading.gif'
import '../../styles/Detalle.css'

function Detalle({ producto }) {
  const { cargando } = useCarrito();
  return (
    <>
      <section className="card mb-3 detalle-card centrar-contenedor font-lxgw-wenkai">
        {cargando ? (
          <img src={loading} alt="loading" style={{ display: "block", margin: "auto" }} />
        ) : (
          <div className="row g-0">
            <div className="col-md-4">
              <img src={producto.imagen} className="img-fluid rounded" alt={producto.nombre} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title detalle-clave font-pangolin" style={{ fontSize: "2rem" }}>{producto.nombre}</h5>
                <p className="card-text detalle-valor">{producto.descripcion}</p>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item" style={{ backgroundColor: "#6FAD47" }}>
                    <span className='detalle-clave'>Precio: </span>
                    <span className='detalle-valor'>${producto.precio}</span>
                  </li>
                  <li class="list-group-item" style={{ backgroundColor: "#6FAD47" }}>
                    <span className='detalle-clave'>Stock: </span>
                    <span className='detalle-valor'>{producto.stock}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="card-footer"><small className="text-muted">ID: {producto.id}</small></div>
          </div>
        )}
      </section>
    </>
  )
}

export default Detalle