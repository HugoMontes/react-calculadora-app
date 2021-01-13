// Importar los componentes
import React from 'react'
import Proptypes from 'prop-types'
import Button from './Button/Button'

// Crear la constante para la funcion
// Agregar el parametro una funcion onClickNumber destructurandolo
const Numbers = ({onClickNumber}) => (
    <section className="numbers">
        <Button text="1" clickHandler={onClickNumber} />
        <Button text="2" clickHandler={onClickNumber} />
        <Button text="3" clickHandler={onClickNumber} />
        <Button text="4" clickHandler={onClickNumber} />
        <Button text="5" clickHandler={onClickNumber} />
        <Button text="6" clickHandler={onClickNumber} />
        <Button text="7" clickHandler={onClickNumber} />
        <Button text="8" clickHandler={onClickNumber} />
        <Button text="9" clickHandler={onClickNumber} />
        <Button text="0" clickHandler={onClickNumber} />
    </section>
)

// Validar las propiedades
Numbers.propTypes = {
    onClickNumber: Proptypes.func.isRequired
}
// Exportar el componente
export default Numbers