// Importar los componentes
import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button/Button'

// Crear la constante para la funcion
// Este componente acepta dos parametros los cuales 
// son manejadores de eventos (Clear, Eliminar caracter)
const Functions = ({onContentClear, onDelete}) => (
    <section className="functions">
        <Button type="button-long-text" text="clear" clickHandler={onContentClear} />
        <Button text="&larr;" clickHandler={onDelete} />
    </section>
)

// Validar las propiedades
Functions.propTypes = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

// Exportar el componente
export default Functions