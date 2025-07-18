import React, { createContext, useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';

const AdminContext = createContext()

export function AdminProvider({ children }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [openEditor, setOpenEditor] = useState(false);
  const [seleccionado, setSeleccionado] = useState(null);

  useEffect(() => {
    fetch("https://6834f7f2cd78db2058bfe772.mockapi.io/2025-react-js/productos")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setProductos(data);
          setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.error('Error buscando data', error)
        setError(true);
        setLoading(false);
      });
  }, []);

  const handleOpenAdd = () => {
    setOpenAdd(true)
    setOpenEditor(false)
  }

  const handleOpenEditor = () => {
    setOpenAdd(false)
    setOpenEditor(true)
  }

  const handleClose = () => {
    setOpenAdd(false)
    setOpenEditor(false)
  }

  const cargarProductos = async () => {
    try {
      const respuesta = await fetch('https://6834f7f2cd78db2058bfe772.mockapi.io/2025-react-js/productos')
      const data = await respuesta.json()
      setProductos(data)
    } catch (error) {
      console.log("Error al cargar productos", error);
    }
  }

  const agregarProducto = async (producto) => {
    try {
      const respuesta = await fetch('https://6834f7f2cd78db2058bfe772.mockapi.io/2025-react-js/productos', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(producto)
      })
      if (!respuesta.ok) { throw new Error("Error al agregar producto") }
      // const data = await respuesta.json()
      toast.success("Producto agregado");
      handleClose();
      cargarProductos()
    } catch (error) {
      console.log(error.message);
    }
  }

  const actualizarProducto = async (producto) => {
    try {
      const respuesta = await fetch(`https://6834f7f2cd78db2058bfe772.mockapi.io/2025-react-js/productos/${producto.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(producto)
      })
      if (!respuesta.ok) { throw new Error("Error al actualizar producto") }
      // const data = await respuesta.json()
      toast.success("Producto actualizado");
      handleClose();
      setSeleccionado(null);
      cargarProductos();
    } catch (error) {
      console.log(error.message);
    }
  }

  const eliminarProducto = async (id) => {
      try {
        const respuesta = await fetch(`https://6834f7f2cd78db2058bfe772.mockapi.io/2025-react-js/productos/${id}`, {
          method: "DELETE"
        })
        if (!respuesta.ok) { throw new Error("Error al eliminar producto") }
        toast.success("Producto eliminado");
        cargarProductos();
      } catch (error) {
        console.log(error.message);
      }
  }

  return (
    <AdminContext.Provider value={{ productos, setProductos, loading, setLoading, openAdd, handleOpenAdd, openEditor, handleOpenEditor, handleClose, agregarProducto, eliminarProducto, actualizarProducto, seleccionado, setSeleccionado }}>
      {children}
    </AdminContext.Provider>
  )
}

export const useAdmin = () => useContext(AdminContext);