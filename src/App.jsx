import React from 'react'
import Result from './components/Result'
import Button from './components/Button'
import MathOperations from './components/MathOperations'


import './App.css'

//generacion de la fuente del componente

const App = () => {
    
    const clickHandlerFunction = (text) => {
        console.log(text)
    }

    return ( 
    <main className='react-calculator'>
        <Result />
        <div className="grid"> 
            <div className="numbers">
                <Button type="number" text={ "1" } clickHandler={ clickHandlerFunction } />
                <Button type="number" text={ "2" } clickHandler={ clickHandlerFunction } />
                <Button type="number" text={ "3" } clickHandler={ clickHandlerFunction } />
                <Button type="number" text={ "4" } clickHandler={ clickHandlerFunction } />
                <Button type="number" text={ "5" } clickHandler={ clickHandlerFunction } />
                <Button type="number" text={ "6" } clickHandler={ clickHandlerFunction } />
                <Button type="number" text={ "7" } clickHandler={ clickHandlerFunction } />
                <Button type="number" text={ "8" } clickHandler={ clickHandlerFunction } />
                <Button type="number" text={ "9" } clickHandler={ clickHandlerFunction } />
                <Button type="number" text={ "0" } clickHandler={ clickHandlerFunction } />
                
            </div>
        
            <MathOperations 
                onClickOperation = { (operation) =>
                    console.log("Operation: ", operation)
                }
                onClickEqual = { (equal) => 
                    console.log("Equal: ", equal)
                }

            
            />
            <div className="functions">
                <button>clear</button>
                <button>r</button>
            </div>

        </div>
    </main> )
}



export default App
