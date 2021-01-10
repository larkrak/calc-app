import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


/* Equivalentes

const MathOperations = ( { onClickOperation, onClickEqual } ) => (
    <section className="math-operations">
        <Button type="oper" text="+" clickHandler={ onClickOperation } />
        <Button type="oper" text="-" clickHandler={ onClickOperation } />
        <Button type="oper" text="*" clickHandler={ onClickOperation } />
        <Button type="oper" text="/" clickHandler={ onClickOperation } />
        <Button type="oper" text="=" clickHandler={ onClickEqual } />
    </section>
    
)*/

const signos = ["+", "-", "*", "/"];

const renderButtons = onClickOperation => {


    const renderButton = signo => {

        return (
            <Button key={ signo }
                    text = { signo }
                    clickHandler = { onClickOperation }
            />
        )
    }
    return signos.map(renderButton)
}



const MathOperations = ( { onClickOperation, onClickEqual } ) => {

    return (
        <section className="math-operations">
            { renderButtons(onClickOperation) }
            <Button type="oper" text="=" clickHandler={ onClickEqual } />
        </section>
    )
}

MathOperations.propTypes = {
    onClickOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
}

export default MathOperations