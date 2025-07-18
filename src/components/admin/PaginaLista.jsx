import React, { useState } from 'react';
import { useAdmin } from '../../context/AdminContext';
import "../../styles/producto.css";
import imagenLoading from '../../assets/loading.gif'
import IndicePaginas from './IndicePaginas';
import PaginaItem from './PaginaItem';

function PaginaLista() {
  const { productos, loading } = useAdmin();

  const productosPorPagina = 6;
  const [paginaActual, setPaginaActual] = useState(1);
  const indiceUltimoProducto = paginaActual * productosPorPagina;
  const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
  const productosActuales = productos.slice(indicePrimerProducto, indiceUltimoProducto);
  const totalPaginas = Math.ceil(productos.length / productosPorPagina);
  const cambiarPagina = (numeroPagina) => setPaginaActual(numeroPagina);

  return (
    <section className='contenedor-productos' id='productosPaginados'>
      <h2 className="titulo font-pangolin">Todos los Productos</h2>
      {loading ? (
        <img src={imagenLoading} alt="loading" style={{ display: "block", margin: "auto" }} />
      ) : (


        <div className='lista-productos'>
          <div className="container">
            <div className="row">
              <IndicePaginas
                totalPaginas={totalPaginas}
                paginaActual={paginaActual}
                cambiarPagina={cambiarPagina}
              />
              {productosActuales.map((producto) => (
                <PaginaItem key={producto.id} producto={producto} />
              ))}
              <IndicePaginas
                totalPaginas={totalPaginas}
                paginaActual={paginaActual}
                cambiarPagina={cambiarPagina}
              />
            </div>
          </div>
        </div>


      )}
    </section>
  )
}

export default PaginaLista;