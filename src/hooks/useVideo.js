import { useEffect, useState } from 'react'
import youtubeApi from '../api/youtubeApi';

const useVideo = ( defaultTerm ) => {

    const [ videos, setVideos ] = useState( [] );

    useEffect( () => {
        fetchVideos( defaultTerm );
    }, [] );


    const fetchVideos = async ( data ) => {
        const result = await youtubeApi.get( '/search', {
            params: {
                q: data
            }
        } );
        setVideos( result.data.items );
    };

    return [ videos, fetchVideos ];
}

export default useVideo
