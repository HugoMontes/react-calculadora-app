// Importar useState usando destructuring
import React, { useState } from 'react'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'

import './App.css'

const App = () => {
    // Crear una constante el cual es un array 
    // que contiene una cadena y una funcion
    // en principio la cadena esta vacia
    const arrayTextoFuncionModificaTexto = useState("")
    // Obtener el texto "" y la funcion
    // 1er posicion: valor (que inicialmente es el valor por defecto)
    const texto = arrayTextoFuncionModificaTexto[0]
    // 2da posicion: funcion que me va a permitir modificar el valor por defecto
    const funcionModificaTexto = arrayTextoFuncionModificaTexto[1]
    // Mostrar un mensaje que indica la renderizacion de la app
    console.log("Renderizacion de App");
    return (
    <main className='react-calculator'>
        {/* Mostrar el texto obtenido "" */}
        <Result value={texto} />        
        {/* Usar funcionModificaTexto enviando el valor a mostrar */}
        <Numbers onClickNumber = {number => {
            console.log("Click en number", number)
            funcionModificaTexto(number)
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