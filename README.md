# Pre-Entrega de Proyecto
Aplicación de e-commerce desarrollado con ReactJS para un curso de Talento Tech.

## Características
1. Funcionalidad básica de carrito de compras.
	- Lista los productos comprados
	- Maneja estado del carrito con useState
	- Botones para agregar y sacar productos del carrito
	- Muestra precio unitario, cantidades y total
2. Se conecta a una API que prove información sobre los productos
	- Usa fetch en useEffect para traer productos
	- Maneja estados de carga y error
	- Guarda productos en un estado
3. Utiliza rutas estáticas, dinámicas y protegidas
	- Configura rutas con react-router-dom
	- Separa componentes y layouts
	- Puede navegar entre layouts
	- Restringe acceso no autorizado a vista de admin
4. Optimización de Diseño y Responsividad
    - Bootstrap para adaptar el contenido a distintas pantallas
    - React Toastify para notificaciones
    - React Icons para agregar iconos en botones y elementos
5. Funcionalidad básica de admin:
    - Agregar producto
    - Editar producto
    - Eliminar producto
6. Uso de Context API para evitar props anidadas

## Vista previa del proyecto
- [Ver en Netlify](https://celebrated-kulfi-3ad8d5.netlify.app/)
