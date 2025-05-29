# Pre-Entrega de Proyecto
Aplicación de e-commerce desarrollado con ReactJS para un curso de Talento Tech.

## Caracteristicas
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
