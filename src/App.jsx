/* eslint no-eval: 0 */
import React, { useState } from 'react'
import words from 'lodash.words'
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

    // Separar los valores numericos de los operadores
    const items = words(stack, /[^-^+^*^/]+/g)

    // Obtenemos el ultimo valor ingresado del array
    // siempre que este array tenga por lo menos un 
    // valor caso contrario retorna 0
    const value = items.length > 0 ? items[items.length-1] : "0"

    // Mostrar la salida de la funcion words
    console.log("Renderizacion de App ", items)
    return (
    <main className='react-calculator'>
        {/* Mostrar el valor convertido en cadena */}
        <Result value={value} />        
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
                if(stack.length > 0){
                    console.log("onDelete")
                    // Eliminar el ultimo caracter 
                    const newStack = stack.substring(0, stack.length - 1)
                    setStack(newStack)
                }
            }} />
        <MathOperations 
            onClickOperation = {operation => {
                console.log("Operacion: ", operation)
                // Concatenar el operador
                setStack(`${stack}${operation}`)
            }}
            onClickEqual = {equal => {
                console.log("Equal:", equal)
                // En lugar de mostrar = mostrar el resultado
                // eval() permite evaluar la operacion
                setStack(eval(stack).toString())
            }} />
    </main>)
}

export default App