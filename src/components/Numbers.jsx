// Importar los componentes
import React from 'react'
import Proptypes from 'prop-types'
import Button from './Button/Button'

// Generar un array origen con los 
// numeros de cada boton de forma ordenada
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// Crear un funcion
// que renderize parte de nuestro componente
// La funcion recibe un parametro onClickNumber
const renderButtons = onClickNumber => {
    // Iterar numbers y transformar en un componente Button
    const renderButton = number => (
        <Button key={number} text={number.toString()} clickHandler={onClickNumber} />
    )
    // retornar usando la funcion map
    return numbers.map(renderButton)
}

// Crear la constante para la funcion
// Agregar el parametro una funcion onClickNumber destructurandolo
const Numbers = ({onClickNumber}) => (
    <section className="numbers">
        {
            // Invocar a la funcion para generar los botones
            renderButtons(onClickNumber)
        }
    </section>
)

// Validar las propiedades
Numbers.propTypes = {
    onClickNumber: Proptypes.func.isRequired
}
// Exportar el componente
export default Numbers