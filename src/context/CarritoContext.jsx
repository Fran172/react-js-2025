import React, { createContext, useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';

const CarritoContext = createContext()

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  })
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);
  const [total, setTotal] = useState(0);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
    setTotal(sumaTotal(carrito));
  }, [carrito]);

  useEffect(() => {
    fetch('https://6834f7f2cd78db2058bfe772.mockapi.io/2025-react-js/productos')
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setTimeout(() => {
          setProductos(datos)
          setCargando(false)
        }, 2000);
      })
      .catch((error) => {
        console.error('error', error)
        setError(true);
        setCargando(false);
      });
  }, []);

  const sumaTotal = (cart) => {
    return cart.reduce((suma, item) => suma + item.cantidad, 0);
  }

  const productosFiltrados = productos?.filter((producto) => producto?.nombre.toLowerCase().includes(busqueda.toLowerCase()));

  const handleAddToCart = (prod, addCant) => {
    if (prod.stock < addCant) {
      toast.warning(`${prod.nombre} sin stock suficiente`);
      return
    }
    let nuevoCarrito;
    const productoEnCarrito = carrito.find((item) => item.id === prod.id);
    if (productoEnCarrito) {
      if (productoEnCarrito.cantidad + addCant > prod.stock) {
        toast.warning(`${prod.nombre} sin stock suficiente`);
        return
      }
      nuevoCarrito = carrito.map((item) => {
        if (item.id === prod.id) {
          return { ...item, cantidad: item.cantidad + addCant }
        } else {
          return item
        }
      })
    } else {
      nuevoCarrito = [...carrito, { ...prod, cantidad: addCant }];
    }
    toast.success(`Se agregó ${addCant} ${prod.nombre} al carrito`);
    setCarrito(nuevoCarrito);
    setTotal(sumaTotal(nuevoCarrito));
  }

  const handleRemoveFromCart = (prod, removeCant) => {
    const eliminarProducto = removeCant >= prod.cantidad;
    let nuevoCarrito;
    if (eliminarProducto) {
      nuevoCarrito = carrito.filter((item) => item.id !== prod.id);
      toast(`${prod.nombre} fue removido del carrito`);
    } else {
      nuevoCarrito = carrito.map((item) => {
        if (item.id === prod.id) {
          toast(`Se removió ${removeCant} ${prod.nombre} del carrito`);
          return { ...item, cantidad: item.cantidad - removeCant }
        } else {
          return item
        }
      })
    }
    setCarrito(nuevoCarrito);
    setTotal(sumaTotal(nuevoCarrito));
  }

  const handleEmptyCart = () => {
    setCarrito([]);
    setTotal(0);
  }

  if (error) {
    return <NotFound texto="no se han podido cargar los productos" />
  }


  return (
    <CarritoContext.Provider value={{ carrito, productos, cargando, error, total, handleEmptyCart, handleAddToCart, handleRemoveFromCart, busqueda, setBusqueda, productosFiltrados }}>
      {children}
    </CarritoContext.Provider>
  )
}

export const useCarrito = () => useContext(CarritoContext);