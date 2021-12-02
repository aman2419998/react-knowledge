import React, { useState } from 'react'

const Accordion = ( props ) => {

    const [ activeIndex, setActiveIndex ] = useState( null );

    const view = props.items.map( ( item, index ) => {

        const active = activeIndex === index ? 'active' : '';

        return <React.Fragment key={ index }>
            <div className={ `title ${ active }` } onClick={ ( ) => setActiveIndex( index ) }>
                <i className="dropdown icon"></i>
                { item.title }
            </div>
            <div className={ `content ${ active }` } >
                <p> { item.content } </p>
            </div>
        </React.Fragment>
    } );

    return (
        <div style={{ marginTop: '10px' }} className="ui styled fluid accordion" >
            { view }
        </div>
    )
}

export default Accordion
