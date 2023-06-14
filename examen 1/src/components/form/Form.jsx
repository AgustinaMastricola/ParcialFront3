import React from 'react'
import './Form.css'

function Form({handleSubmit, setEstudiante}) {
  const handleBlur = (e) => {
    setEstudiante((prevStudent) => ({...prevStudent, [e.target.name]: e.target.value}))
  }
  return (
    <form className='form' onSubmit={handleSubmit}>
      <label>Nombre </label>
      <input name="name" type="text" onBlur={handleBlur} />
      <label>Apellido </label>
      <input name="lastname" type="text" onBlur={handleBlur}/>
      <label>Edad </label>
      <input name="age" type="number" onBlur={handleBlur}/>
      <label>Telefono </label>
      <input name="phone" type="tel" onBlur={handleBlur}/>
      <button>ENVIAR</button>
    </form>
  )
}
export default Form