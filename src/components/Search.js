import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Search.css'

const Search = () => {

    const [ term, setTerm ] = useState( 'programming' );
    const [ debounceTerm, setDebounceTerm ] = useState( term );
    const [ result, setResult ] = useState( [] );
    const [ loading, setLoading ] = useState( '' );

    useEffect( () => {
        const timerId = setTimeout( () => {
            setDebounceTerm( term );
        }, 1000 );

        return () => {
            clearTimeout( timerId );
        }
    }, [ term ] )

    useEffect( () => {
        const search = async () => {
            setLoading( 'loading' );
            const { data } = await axios.get( 'https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            } );
            setResult( data.query.search );
            setLoading( '' );
        }

        if ( term ) {
            search();
        }

    }, [ debounceTerm ] );

    const noDataFound = !result.length ? <div className="ui message">
        <div className="header">
            <i className="close icon" />
            No Data Found
        </div>
    </div> : null

    const searchResults = result.map( ( data, index ) => {
        return <div key={ index } className="ui segment">
            <h3 className="header"> { data.title } </h3>
            <div className="searchResult__content" >
                <div className="description" dangerouslySetInnerHTML={ { __html: data.snippet } }>
                </div>
                <a href={ `https://en.wikipedia.org?curid=${ data.pageid }` } className="ui button">
                    Go
                </a>
            </div>
        </div>
    } );

    return (
        <>
            <div className="searchInput ui category search">
                <label htmlFor="search"> Search Term </label>
                <div className={ `ui icon fluid input ${ loading }` }>
                    <input
                        value={ term }
                        type="text"
                        id="search"
                        onChange={ ( event ) => setTerm( event.target.value ) } />
                    <i className="search icon"></i>
                </div>
            </div>
            { noDataFound }
            { searchResults }
        </>
    )
}

export default Search
