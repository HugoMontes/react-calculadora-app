// Importar useState usando destructuring
import React, { useState } from 'react'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'

import './App.css'

const App = () => {
    // Array Destructuring
    // 1er posicion: "stack" valor (que inicialmente es el valor por defecto)
    // 2da posicion: "setStack" funcion que me va a permitir modificar el valor por defecto
    const[stack, setStack] = useState("")
    // Mostrar un mensaje que indica la renderizacion de la app
    console.log("Renderizacion de App");
    return (
    <main className='react-calculator'>
        {/* Mostrar el texto obtenido "" */}
        <Result value={stack} />        
        {/* Usar setStack enviando el valor a mostrar */}
        <Numbers onClickNumber = {number => {
            console.log("Click en number", number)
            setStack(number)
        }}/>
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