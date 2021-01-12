// Importar React
import React from 'react'


// Componente funcional
// Componente que muestra un boton
const Button = ({text, clickHandler}) => {
    return (
        <button onClick={ () => {
            console.log("onClick en el Button")
            // Invocar a la funcion obtenida enviando text
            clickHandler(text)
        }}>
            <span>{text}</span>
        </button>
    )
}

// Exportar el componente
export default Button