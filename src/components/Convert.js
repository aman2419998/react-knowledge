import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Convert = ( { language, text } ) => {

    const [ translated, setTranslated ] = useState( '' );

    useEffect( () => {
        const googleTranslateApi = async () => {
            const { data } = await axios.post( 'https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: text,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            } );
            setTranslated( data.data.translations[ 0 ].translatedText );
        }

        if ( text ) {
            const timerId = setTimeout( () => {
                googleTranslateApi(); // run api from localhost:3000
            }, 1000 );

            return () => {
                clearTimeout( timerId );
            }
        }

    }, [ text, language ] )

    return (
        <h1>
            { translated }
        </h1>
    )
}

export default Convert
