import React from 'react'
import LanguageContex from '../context/LanguageContex'

const Field = () => {

    const renderField = ( value ) => {
        const LABEL = value === 'English' ? 'Name' : 'Naam'
        return (
            <div className="field">
                <label> { LABEL } </label>
                <input type="text" />
            </div>
        )
    }

    return (
        <LanguageContex.Consumer>
            { renderField }
        </LanguageContex.Consumer>
    )
}

export default Field
