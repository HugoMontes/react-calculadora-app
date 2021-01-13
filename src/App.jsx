import React from 'react'
/* import Button from './components/Button/Button' */
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'

import './App.css'

const App = () => {
    /*
    const clickHandlerFunction = text => {
        console.log("Button.clickHandler", text);
    }
    */
    return (
    <main className='react-calculator'>
        <Result />        
        {/* Utilizar el componente Numbers adicionando la propiedad 
            onClickNomber el cual muestra un mensaje por consola */}
        <Numbers onClickNumber = {number => console.log("Click en number", number) }/>
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