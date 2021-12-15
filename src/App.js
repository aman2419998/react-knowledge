import React, { useState } from 'react'
import UserCreate from './component/UserCreate'
import LanguageContex from './context/LanguageContex';

const App = () => {

    const [ language, setLanguage ] = useState( 'English' );

    return (
        <div className="ui container" >
            <h4> Please select a language :-
                <i className="flag us" onClick={ () => setLanguage( 'English' ) } />
                <i className="flag in" onClick={ () => setLanguage( 'Hindi' ) } />
            </h4>
            <LanguageContex.Provider value={ language } >
                <UserCreate />
            </LanguageContex.Provider>
        </div>
    )
}

export default App
