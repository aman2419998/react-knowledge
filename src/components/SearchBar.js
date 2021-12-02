import React, { useState } from 'react'

const SearchBar = ( props ) => {

    const [ term, setTerm ] = useState( '' );

    const onSubmitClick = ( event ) => {
        event.preventDefault();
        props.onSubmit( term );
    }

    return (
        <div className="ui segment">
            <form onSubmit={ onSubmitClick } autoComplete="off" className="ui form">
                <div className="field">
                    <label htmlFor="search" >Search Term</label>
                    <input
                        type="text"
                        name="search"
                        value={ term }
                        onChange={ ( event ) => setTerm( event.target.value ) } />
                </div>
            </form>
        </div>
    )
}

export default SearchBar;
