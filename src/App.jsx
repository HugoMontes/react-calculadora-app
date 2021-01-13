import React from 'react'
import Button from './components/Button/Button'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Result from './components/Result'

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
        {/* Utilizar el componente Functions adicionando las propiedades 
            funciones que correspondan */}
        <Functions 
            onContentClear = {() => console.log("Content Clear")}
            onDelete = {() => console.log("onDelete")} />
        {/* Adicionar las propiedades enviado las funciones que correspondan */}
        <MathOperations 
            onClickOperation = {operation => console.log("Operacion: ", operation)}
            onClickEqual = {equal => console.log("Equal:", equal)} />
    </main>)
}

export default App