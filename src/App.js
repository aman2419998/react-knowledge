import React, { Component } from 'react'
import unsplash from './api/unsplash';
import ImageViewer from './components/ImageViewer';
import SearchBar from './components/SearchBar'

export default class App extends Component {

    state = { images: [] };

    onSubmitHandler = async ( data ) => {
        const result = await unsplash.get( '/search/photos', {
            params: {
                query: data
            }
        } );
        this.setState( { images: result.data.results } );
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={ this.onSubmitHandler } />
                <ImageViewer images={ this.state.images } />
            </div>
        )
    }
}
