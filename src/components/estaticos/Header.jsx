import React from 'react'
import backgroundImage from '../../assets/background_01.jpg';

function Header() {
  const estiloTitulo = {
    backgroundColor: "#70ad4798",
    padding: "15px",
    backdropFilter: "blur(5px)"
  }
  const estiloHeader = {
    backgroundImage: `url(${backgroundImage})`,
    padding: "10px",
    textAlign: "center",
    color: "white"
  };


  return (
    <header style={estiloHeader}>
      <h1 style={estiloTitulo}>FrutiClick!</h1>
    </header>
  )
}

export default Header