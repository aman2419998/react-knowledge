import axios from "axios";

const KEY = 'AIzaSyC37VGOuoqWDAI2YMiFhoRqEb0zeN_A3hQ';

export default axios.create( {
    baseURL: 'https://www.googleapis.com/youtube/v3', 
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
} );