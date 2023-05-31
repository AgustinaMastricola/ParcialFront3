import React from 'react'
import './Tarjeta.css'

function Tarjeta({name, date, colorFondo, colorLetra}) {
  return (
    <div className="tarjeta" style={{ backgroundColor: colorFondo, color: colorLetra}}>
      <h2>Invitacion cumpleaños de {name}</h2>
      <p>El dia {date}</p>
      <p>Te esperamos!</p>
    </div>
  )
}

export default Tarjeta
