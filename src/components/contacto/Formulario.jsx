import React, { useState } from 'react';
import '../../style/Formulario.css'

function Formulario() {
	const [nombre, setNombre] = useState('');
	const [mail, setMail] = useState('');

	function manejarEnvio(evento) {
		evento.preventDefault();
		alert(`Formulario enviado por: ${nombre}`);
	}
	
    return (
        <>
            <section className='contenedor-form font-pangolin centrar-contenedor'>
            <h2 className='titulo'>Contacto</h2>
                <form onSubmit={manejarEnvio}>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre..."/>
                    <input type="email" value={mail} onChange={(e) => setMail(e.target.value)} placeholder="Mail..."/>
                    <textarea rows={8} name="mensaje" id="mensaje" placeholder='Escriba su mensaje o consulta...'></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </section>
        </>
	);
}

export default Formulario;