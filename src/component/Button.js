import React from 'react'
import LanguageContex from '../context/LanguageContex'

const Button = () => {

    const renderButton = ( value ) => {
        const BUTTON_TEXT = value === 'English' ? 'Submit' : 'Bhar Do';
        return (
            <button className="ui primary button" > { BUTTON_TEXT } </button>
        )
    }

    return (
        <LanguageContex.Consumer>
            { renderButton }
        </LanguageContex.Consumer>
    )
}

export default Button
