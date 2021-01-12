import React from 'react'
import Result from './components/Result'
// Importar el componente button
import Button from './components/Button'

import './App.css'

const App = () => {
    // Crear una funcion para enviarla en la propiedad clickHandler
    // La funcion simplemente por el momento muestra un texto
    const clickHandlerFunction = text => {
        console.log("Button.clickHandler", text);
    }

    return (
    <main className='react-calculator'>
        <Result />        
        <div className="numbers">
            <Button text="1" clickHandler={clickHandlerFunction} />
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>0</button>
        </div>
        <div className="functions">
            <button>clear</button>
            <button>r</button>
        </div>
        <div className="math-operations">
            <button>+</button>
            <button>-</button>
            <button>*</button>
            <button>/</button>
            <button>=</button>
        </div>
    </main>)
}

export default App