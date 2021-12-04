import React from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions';

const Songs = ( props ) => {

    const onSelectButtonClick = ( payload ) => props.selectSong( payload );

    const renderSongListItem = props.songs.map( ( data, index ) => {
        return <div className="item" key={ index }>
            <div className="right floated content">
                <div className="ui button" onClick={ () => onSelectButtonClick( data ) } > Select </div>
            </div>
            <div className="content">
                <div className="header"> { data.title } </div>
                <div className="description" > { data.duration } </div>
            </div>
        </div>
    } )

    return (
        <div className="ui relaxed divided list">
            { renderSongListItem }
        </div>
    )
}

const mapStateToProps = ( { songs } ) => {
    return { songs };
}

export default connect( mapStateToProps, { selectSong } )( Songs );
