import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ type, text, clickHandler }) => (
    <button className={ type } onClick={ () => clickHandler(text) }>
        <span>{ text }</span>
    </button>
)

// Equivalentes

// const Button = ({ type, text, clickHandler }) => {
//     return (
//         <button className={ type } onClick={ () => {
//             console.log("Click en el boton")
//             clickHandler(text)
//         }}>
//             <span>{ text }</span>
//         </button>
//     )
// }

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}

export default Button

