import React from 'react';
import ProductoItem from './ProductoItem.jsx'
import loading from '../../assets/loading.gif'
import '../../styles/Producto.css'
import { useCarrito } from '../../context/CarritoContext.jsx';
import { FaSearch } from 'react-icons/fa';

function ProductosLista() {
  const { cargando, productosFiltrados, busqueda, setBusqueda } = useCarrito()

  return (
    <>
      <section className='contenedor-productos' id='productos'>
        <h2 className='titulo font-pangolin'>Productos</h2>
        {cargando ? (
          <img src={loading} alt="loading" style={{ display: "block", margin: "auto" }} />
        ) : (
          <>
            <div className="contenedor-busqueda input-group mb-3">
              <span className="input-group-text"><FaSearch /></span>
              <div className="form-floating">
                <input className="input-busqueda form-control" type="text" id="floatingInputGroup1" placeholder="Buscar..." value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
                <label htmlFor="floatingInputGroup1">Buscar...</label>
              </div>
            </div>

            <div className='lista-productos'>
              <div className='container'>
                <div className='row'>
                  {productosFiltrados
                    .filter(producto => producto.stock > 0)
                    .map((producto) => (
                      <ProductoItem key={producto.id} producto={producto} />
                    ))
                  }
                </div>
              </div>
            </div>
          </>)
        }
      </section>
    </>
  )
}

export default ProductosLista