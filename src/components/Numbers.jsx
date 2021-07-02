import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button/Button'

const numbers = [7,8,9,4,5,6,1,2,3,0]
//var arr = []
const renderButtons = onClickNumber => {
    /*
    for (let index = 0; index < numbers.length; index++) {
        arr.push(<Button type="number" text= { numbers[index].toString() } clickHandler= { onClickNumber } /> )
    }*/
    
    const renderButton = number => (
        <Button key={ number } 
        text={ number.toString() } 
        clickHandler={ onClickNumber } 
        />
    )

    //EQUIVALENTE
    
    // numbers.map( (number) => {

    //     return (
    //         <Button key={ number }
    //             text={ number.toString() }
    //             clickHandler={ onClickNumber }
    //         />
    //     )

    // } )

    return numbers.map(renderButton)
    //return arr
}

const Numbers = ({ onClickNumber }) => (
    <section className="numbers">
        { renderButtons(onClickNumber) }
    </section>
)

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}


export default Numbers