import React, { useState } from 'react'
import Convert from './Convert';
import Dropdown from './Dropdown'

const languageOptions = [
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Chinese',
        value: 'zh'
    }
]

const Translate = () => {

    const [ selectedOption, setSelectedOption ] = useState( languageOptions[ 0 ] );
    const [ text, setText ] = useState( '' );

    return (
        <>
            <div>
                <label className="ui label"> Enter Text </label>
                <div className="ui fluid input">
                    <input
                        id="text"
                        type="text"
                        value={ text }
                        onChange={ ( event ) => setText( event.target.value ) } />
                </div>
            </div>
            <Dropdown
                label="Select Language"
                items={ languageOptions }
                selectedOption={ selectedOption }
                setSelectedOption={ setSelectedOption } />
            <Convert language={ selectedOption } text={ text } />
        </>
    )
}

export default Translate
