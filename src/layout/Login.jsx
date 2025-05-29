import React from 'react'
import Header from '../components/estaticos/Header.jsx'
import Nav from '../components/estaticos/Nav.jsx'
import Footer from '../components/estaticos/Footer.jsx'
import WIP from '../assets/WIP.png'

function Admin() {
  return (
    <>
        <Header/>
        <Nav/>
        <p style={{color:"black", fontSize:"48px"}}>Login</p>
        <img src={WIP} alt="WIP" />
        <Footer/>
    </>
  )
}

export default Admin