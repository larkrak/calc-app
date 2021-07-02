/* eslint no-eval: 0 */
import React, { useState } from 'react'
import Result from './components/Result'
import words from 'lodash.words'
import MathOperations from './components/MathOperations'
import FuncOperations from './components/Functions'
import './App.css'
import Numbers from './components/Numbers'

//generacion de la fuente del componente

const App = () => {

    const [stack, setStack] = useState("")

    const items = words(stack, /[^-^+^*^/]+/g)

    const value = items.length >0 ? items[items.length - 1] : 0

    return ( 
    <main className='react-calculator'>
        <Result value={ value }  />
        <div className="grid"> 
            <div className="numbers">
                <Numbers onClickNumber = { (number)  => {
                    setStack(`${stack}${number}`)
                }
            }
                />
            </div>
        
            <MathOperations 
                onClickOperation = { (operation) =>
                    setStack(`${stack}${operation}`)
                }
                onClickEqual = { (equal) => 
                    setStack(eval(stack).toString())
                }
            />
            
            <FuncOperations
                onClickClear = { (func) => 
                    setStack("")
                }
                onClickR = { (func) => 
                    setStack(stack.length > 0 ? stack.substring(0, stack.length - 1) : '')
                } 
            />

        </div>
    </main> )
}



export default App
