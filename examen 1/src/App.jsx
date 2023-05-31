import React, { useState } from 'react'
import './App.css'
import Form from './components/form/Form'
import Card from './components/card/Card'

let contador = 0;
function App() {
  //Estados
  const [estudiante, setEstudiante] = useState({
    name:'',
    lastname:'',
    age:'',
    phone: null,
  })
  const [showCard, setShowCard] = useState(false)
  const [error, setError] = useState(false)

  //Handle
  const handleSubmit = (e) => {
    e.preventDefault()
    if(estudiante.name.trim().length >= 3 && estudiante.lastname.length >=6){
      contador++
      setError(false)
      setShowCard(true)
    } else {
      setShowCard(false)
      setError(true)
    }
  }
  return (
    <>
      <h1>Cargar Estudiante</h1>
      <Form handleSubmit={handleSubmit} setEstudiante={setEstudiante}/>
      {showCard && <Card datos={estudiante}/>}
      {error && <p style={{color:"rgb(198, 43, 43)"}}>Por favor chequea que la información sea correcta</p>}
    </>
  )
}
export default App
