import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const FuncOperations = ({ onClickClear, onClickR }) => {

    return(
        <section className="functions-operators">
            <Button type="functions" text="Clear" clickHandler = { onClickClear } />
            <Button type="functions" text="&larr;" clickHandler = { onClickR }/>
        </section>
    )

}

FuncOperations.propTypes = {
    onClickClear: PropTypes.func.isRequired,
    onClickR: PropTypes.func.isRequired
}

export default FuncOperations 