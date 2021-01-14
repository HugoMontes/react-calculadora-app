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
            setStack(`${stack}${number}`)
        }}/>
        <Functions 
            onContentClear = {() => {
                console.log("Content Clear")
                // Llamar a la funcion setStack para asignarle una cadena vacia
                setStack('')
            }}
            onDelete = {() => {
                console.log("onDelete")
                // Eliminar el ultimo caracter 
                const newStack = stack.substring(0, stack.length - 1)
                setStack(newStack)
            }} />
        <MathOperations 
            onClickOperation = {operation => {
                console.log("Operacion: ", operation)
                // Concatenar el operador
                setStack(`${stack}${operation}`)
            }}
            onClickEqual = {equal => {
                console.log("Equal:", equal)
                // Concatenar simbolo igual
                setStack(`${stack}${equal}`)
            }} />
    </main>)
}

export default App