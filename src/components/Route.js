import { useEffect, useState } from "react"

const Route = ( { path, children } ) => {

    const [ current, setCurrent ] = useState( window.location.pathname );

    useEffect( () => {

        const onLocationChange = () => {
            console.log('location Change')
            setCurrent( window.location.pathname );
        }
        
        window.addEventListener( 'popstate', onLocationChange );

        return () => {
            window.removeEventListener( 'popstate', onLocationChange );
        }

    }, [] ); 

    return ( current === path ? children : null )
}

export default Route
