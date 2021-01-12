import React from 'react'
// Importar PropTypes
import PropTypes from 'prop-types'

const Result = ({ value }) => {
    console.log("Valor: ", value)
    return (
        <div className="result">
            {value}
        </div>
    )
}

// Realizar la validacion con PropTypes
// Definir un objeto con todas las propiedades a validar
// Indicar que llege un string a la propiedad value
// el cual es obligatorio
Result.propTypes = {
    value: PropTypes.string.isRequired
}

// Definir valor por defecto
Result.defaultProps = {
    value: "0"
}

export default Result
