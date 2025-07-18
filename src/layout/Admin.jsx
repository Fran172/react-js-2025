import React, { useEffect, useRef } from 'react';
import { useAdmin } from '../context/AdminContext';
import FormAgregar from '../components/formularios/FormAgregar';
import FormEdicion from '../components/formularios/FormEdicion';
import NavAdmin from '../components/admin/NavAdmin';
import PaginaLista from '../components/admin/PaginaLista';


function Admin() {
  const { openAdd, handleOpenAdd, openEditor, seleccionado } = useAdmin();
  const openRef = useRef(null);

  useEffect(() => {
    if (openAdd || openEditor) {
      openRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [openAdd, openEditor]);

  return (
    <>
      <NavAdmin />
      <h1 className='titulo principal centrar-contenedor' style={{ borderWidth: "5px" }}>Panel Administrativo</h1>
      <PaginaLista />

      <div ref={openRef} style={{ backgroundColor: '#28b467', margin: "0", marginTop: "35px", padding: "35px" }}>
        {!openAdd && !openEditor ? (
          <div className='d-flex justify-content-center'>
            <button
              onClick={handleOpenAdd}
              style={{
                fontSize: "24px",
                backgroundColor: "#28b467",
                padding: "0.5rem 3rem",
                margin: "50px",
                border: "4px outset #48d688",
                borderRadius: "20px",
                cursor: "pointer"
              }}
            >Agregar producto nuevo</button>
          </div >
        ) : openAdd ? (
          <FormAgregar />
        ) : (
          <FormEdicion productoSeleccionado={seleccionado} />
        )}
      </div>
    </>
  );
};

export default Admin;