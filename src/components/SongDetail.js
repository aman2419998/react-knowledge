import React from 'react'
import { connect } from 'react-redux'

const SongDetail = ( { selectedSong } ) => {

    if ( !selectedSong ) {
        return <div className="ui message">
            <div className="header"> Please select a song </div>
        </div>
    }

    return (
        <div className="ui card">
            <div className="content">
                <div className="header"> { selectedSong.title } </div>
                <div className="description"> { selectedSong.duration } </div>
            </div>
        </div>
    )
}

const mapStateToProps = ( { selectedSong } ) => {
    return { selectedSong }
}

export default connect( mapStateToProps )( SongDetail );
