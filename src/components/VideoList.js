import React from 'react'
import VideoListItem from './VideoListItem';

const VideoList = ( props ) => {

    const view = props.videos.map( data => <VideoListItem key={ data.id.videoId } onVideoListItemClick={ props.onVideoListItemClick } video={ data } /> );

    return ( 
        <div className="ui relaxed divided list">
            { view }
        </div>
     )
}

export default VideoList
