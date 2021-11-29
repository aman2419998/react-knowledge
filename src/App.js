import React, { Component } from 'react'
import youtubeApi from './api/youtubeApi';
import SearchBar from './components/SearchBar'
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

export default class App extends Component {

    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onSubmitHandler( 'Reactjs Conference' );
    }

    onSubmitHandler = async ( data ) => {
        const result = await youtubeApi.get( '/search', {
            params: {
                q: data
            }
        } );

        this.setState( { videos: result.data.items, selectedVideo: result.data.items[ 0 ] } );
    };

    onVideoListItemClick = video => {
        this.setState( {
            selectedVideo: video
        } )
    };

    render () {
        return (
            <div className="ui container" style={ { marginTop: '10px' } }>
                <SearchBar onSubmit={ this.onSubmitHandler } />
                <div className="ui grid">
                    <div className="eleven wide column">
                        <VideoDetail video={ this.state.selectedVideo } />
                    </div>
                    <div className="five wide column">
                        <VideoList videos={ this.state.videos } onVideoListItemClick={ this.onVideoListItemClick } />
                    </div>
                </div>
            </div>
        )
    }
}
