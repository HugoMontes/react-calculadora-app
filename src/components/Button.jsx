// Importar React
import React from 'react'
import PropTypes from 'prop-types'
// Importar el archivo css
import './Button.css'

// Componente funcional
// Componente que muestra un boton
const Button = ({type, text, clickHandler}) => (
    <button className={type} onClick={ () => clickHandler(text) }>
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