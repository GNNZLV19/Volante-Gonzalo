import React from 'react'

const Card = ({nombre, pais,carreraUniversitaria}) => {

 
  return (
    <div>
        <h3>{nombre}, te postulaste para las olimpiadas de : {carreraUniversitaria} en el pais {pais} </h3>
    
    </div>
  )
}

export default Card