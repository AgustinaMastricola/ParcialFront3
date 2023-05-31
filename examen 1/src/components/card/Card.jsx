import React from 'react';
import './Card.css'

function Card({datos}) {
  return (
    <div className='card'>
      <h4>Estudiante: <span>{datos.name + ' ' + datos.lastname}</span> </h4>
      <p>Edad: {datos.age}</p>
      <p>Dato de contacto: {datos.phone}</p>
    </div>
  )
}
export default Card