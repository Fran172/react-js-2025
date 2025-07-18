import React, { useState } from 'react';
import { toast } from 'react-toastify';
import '../../styles/Formulario.css'

function FormContacto() {
  const [nombre, setNombre] = useState('');
  const [mail, setMail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  function manejarEnvio(evento) {
    evento.preventDefault();
    if (!nombre || !mail || !mensaje) {
      setError('*Por favor complete todos los campos');
      return;
    }
    toast.success(`Formulario enviado, gracias ${nombre}!`);
    setError('');
    setNombre('')
    setMail('')
    setMensaje('')
  }

  return (
    <>
      <section className='formulario font-pangolin centrar-contenedor'>
        <h2 className='titulo'>Contacto</h2>
        <form className='formulario-form' onSubmit={manejarEnvio}>
          {error && <div className="" style={{ color: 'darkred', marginBottom: '10px' }}>{error}</div>}
          <input type="text" className='formulario-input' value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre..." required />
          <input type="email" className='formulario-input' value={mail} onChange={(e) => setMail(e.target.value)} placeholder="Mail..." required />
          <textarea className='formulario-textarea' rows={8} name="mensaje" id="mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)} placeholder='Escriba su mensaje o consulta...' required></textarea>
          <button type="submit" className='formulario-enviar'>Enviar</button>
        </form>
      </section>
    </>
  );
}

export default FormContacto;