import React from 'react'
import Result from './components/Result'
import MathOperations from './components/MathOperations'
import FuncOperations from './components/Functions'
import './App.css'
import Numbers from './components/Numbers'

//generacion de la fuente del componente

const App = () => {
    return ( 
    <main className='react-calculator'>
        <Result  />
        <div className="grid"> 
            <div className="numbers">
                <Numbers onClickNumber = {( number => 
                    console.log(number)
                )}
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
