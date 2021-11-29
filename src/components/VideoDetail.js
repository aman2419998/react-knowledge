import React from 'react'

const VideoDetail = ( props ) => { 

    if( !props.video ) {
        return <p>Loading...</p>
    }

    const { snippet } = props.video

    return (
        <div>
            <iframe title="YoutubeVideo" src={ `https://www.youtube.com/embed/${ props.video.id.videoId }` } width="100%" height="415" ></iframe>
            <div className="ui segment" >
                <div className="content">
                    <h3 className="header"> { snippet.title } </h3>
                    <div className="description">
                        <p> { snippet.description } </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoDetail
