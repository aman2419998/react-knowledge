import React from 'react'

const Link = ( { href, className, children } ) => {

    const onClick = ( event ) => {

        if(  event.metaKey || event.ctrlKey ) {
            return;
        }

        event.preventDefault();
        window.history.pushState( { }, '', href );

        const navEvent = new PopStateEvent( 'popstate' );
        window.dispatchEvent( navEvent );
    }

    return (
        <a href={ href } onClick={ onClick } className={ className }> { children } </a>
    )
}

export default Link
