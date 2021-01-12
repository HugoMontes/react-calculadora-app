// Importar React
import React from 'react'
// Importar PropTyptes
import PropTypes from 'prop-types'

// Componente funcional
// Componente que muestra un boton
const Button = ({text, clickHandler}) => (
    <button onClick={ () => clickHandler(text) }>
        <span>{text}</span>
    </button>
)


// Validar las propiedades
Button.propTypes = {
    text: PropTypes.string.isRequired, 
    clickHandler: PropTypes.func.isRequired
}

// Exportar el componente
export default Button