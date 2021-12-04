import { combineReducers } from 'redux'

const songsReducer = ( ) => {
    return [
        {
            title: 'Humnava Mere',
            duration: '4:20'
        },
        {
            title: 'Humnava Mere ( Jubin )',
            duration: '3:20'
        },
        {
            title: 'Travis Scott',
            duration: '6:20'
        },
        {
            title: 'Highest in the room',
            duration: '2:20'
        }
    ]
}

const selectedSongReducer = ( selectedSong = null, action ) => {

    if ( action.type === 'SELECT_SONG' ) {
        return action.payload
    }

    return selectedSong;
}

export default combineReducers( {
    songs: songsReducer,
    selectedSong: selectedSongReducer
} );