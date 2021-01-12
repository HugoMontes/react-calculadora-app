// Importar los componentes
import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

// Crear la constante para la funcion
// Incorporar las dos operaciones onClickOperation, onClickEqual
const MathOperations = ({onClickOperation, onClickEqual}) => (
    <section className="math-operations">
        <Button text="+" clickHandler={onClickOperation} />
        <Button text="-" clickHandler={onClickOperation} />
        <Button text="*" clickHandler={onClickOperation} />
        <Button text="/" clickHandler={onClickOperation} />
        <Button text="=" clickHandler={onClickEqual} />
    </section>
)

// Agregar las validaciones
MathOperations.propTypes = {
    onClickOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
}

// Exportar el componente
export default MathOperations

