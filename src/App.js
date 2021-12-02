import React, { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import useVideo from './hooks/useVideo';

const App = () => {

    const [ videos, fetchVideos ] = useVideo( 'Reactjs Conference' );
    const [ selectedVideo, setSelectedVideo ] = useState( null );

    useEffect( () => {
        setSelectedVideo( videos[ 0 ] );
    }, [ videos ] )

    return (
        <div className="ui container" style={ { marginTop: '10px' } }>
            <SearchBar onSubmit={ fetchVideos } />
            <div className="ui grid">
                <div className="eleven wide column">
                    <VideoDetail video={ selectedVideo } />
                </div>
                <div className="five wide column">
                    <VideoList videos={ videos } onVideoListItemClick={ setSelectedVideo } />
                </div>
            </div>
        </div>
    )
}

export default App;
