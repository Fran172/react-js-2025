import React from 'react';
import "../../styles/Producto.css"

function IndicePaginas({ totalPaginas, paginaActual, cambiarPagina }) {
  return (
    <div className="d-flex justify-content-center my-4">
      {Array.from({ length: totalPaginas }, (_, index) => (
        <button
          key={index + 1}
          className={`btn mx-1 ${paginaActual === index + 1 ? "btn-success" : "btn-outline-success"}`}
          onClick={() => cambiarPagina(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default IndicePaginas;