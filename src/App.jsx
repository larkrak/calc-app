import React, { useState } from 'react'
import Result from './components/Result'
import MathOperations from './components/MathOperations'
import FuncOperations from './components/Functions'
import './App.css'
import Numbers from './components/Numbers'

//generacion de la fuente del componente

const App = () => {

    const arrayTextoFuncionModificaTexto = useState("")

    // 1er posicion: valor que inicialmente es el valor por defecto
    const texto = arrayTextoFuncionModificaTexto[0]

    // 2da posicion: funcion que me va a permitir modificar el valor por defecto
    const funcionModificaTexto = arrayTextoFuncionModificaTexto[1]

    return ( 
    <main className='react-calculator'>
        <Result value={ texto }  />
        <div className="grid"> 
            <div className="numbers">
                <Numbers onClickNumber = { (number)  => {
                    console.log(number)

                    funcionModificaTexto(number)

                }
            }
                />
            </div>
        
            <MathOperations 
                onClickOperation = { (operation) =>
                    console.log("Operation: ", operation)
                }
                onClickEqual = { (equal) => 
                    console.log("Equal: ", equal)
                }
            />
            
            <FuncOperations
                onClickClear = { (func) => 
                    console.log("Funct: ", func)
                }
                onClickR = { (func) => 
                    console.log("Funct: ", func)
                } 
            />

        </div>
    </main> )
}



export default App
