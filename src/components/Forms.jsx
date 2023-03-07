import React, { useState } from 'react'
import Card from './Card'


const Form = () => {
    const [user, setUser] = useState({
        nombre: '',
        pais: '',
        carreraUniversitaria: ''
    })
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(user.nombre.length > 3 && user.nombre.startsWith(" ") ==false && user.carreraUniversitaria.length>6 ) {
            setShow(true)
            setError(false)
        } else {
            setError(true)
        }

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Nombre y Apellido:</label>
            <input type="text" value={user.nombre} onChange={(e) => setUser({...user, nombre: e.target.value})}/>
            <label>Pais:</label>
            <input type="text" value={user.pais} onChange={(e) => setUser({...user,pais: e.target.value})}/>
            <label>Carrera universitaria:</label>
            <input type="text" value={user.carreraUniversitaria} onChange={(e) => setUser({...user,carreraUniversitaria: e.target.value})}/>
           
            
            <button>Enviar</button>
            {error && 'Por favor chequea que la informacion sea correcta'}
        </form>
        {show  && <Card nombre={user.nombre} carreraUniversitaria={user.carreraUniversitaria} pais={user.pais}/>}
        
       
       
    </div>
  )
}

export default Form