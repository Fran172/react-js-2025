import React from 'react'
import '../../style/Header.css'

function Header() {
  const estilo = { backgroundColor: "#FFAD27", padding: "10px", textAlign: "center", color: "white" }
  return (<>
      <header style={estilo}> <h1>FrutiClick!</h1> </header>
  </>)
  }

export default Header