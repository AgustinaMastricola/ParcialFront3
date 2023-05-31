import React from 'react'
import './Form.css'

function Form({handleSubmit, setEstudiante}) {
  const onBlurName = (e) => setEstudiante((estudiante)=>({...estudiante, name: e.target.value}));
  const onBlurLastName = (e) => setEstudiante((estudiante)=>({...estudiante, lastname: e.target.value}));
  const onBlurAge = (e) => setEstudiante((estudiante)=>({...estudiante, age: e.target.value}));
  const onBlurPhone = (e) => setEstudiante((estudiante)=>({...estudiante, phone: e.target.value}));
  return (
    <form className='form' onSubmit={handleSubmit}>
      <label>Nombre </label>
      <input type="text" onBlur={onBlurName} />
      <label>Apellido </label>
      <input type="text" onBlur={onBlurLastName}/>
      <label>Edad </label>
      <input type="number" onBlur={onBlurAge}/>
      <label>Telefono </label>
      <input type="tel" onBlur={onBlurPhone}/>
      <button>ENVIAR</button>
    </form>
  )
}
export default Form