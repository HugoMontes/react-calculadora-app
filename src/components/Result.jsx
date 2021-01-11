import React from 'react'

const Result = ({ value }) => {
    console.log("Valor: ", value)
    return (
        <div className="result">
            {value}
        </div>
    )
}

export default Result
