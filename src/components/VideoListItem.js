import React from 'react'
import './VideoListItem.css'

const VideoListItem = ( props ) => {

    const { snippet } = props.video

    return (
        <div onClick={ ( ) => props.onVideoListItemClick( props.video ) } className="item video-list-item">
            <img className="ui image" src={ snippet.thumbnails.medium.url } />
            <div className="content">
                <div className="header"> { snippet.title } </div>
            </div>
        </div>
    )
}

export default VideoListItem
