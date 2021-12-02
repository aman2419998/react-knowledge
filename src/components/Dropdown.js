import React, { useEffect, useRef, useState } from 'react'

const Dropdown = ( props ) => {

    const { items, selectedOption, setSelectedOption } = props;
    const [ open, setOpen ] = useState( false );
    const ref = useRef();

    const dropdownItemsView = items.map( ( data, index ) => {
        return <React.Fragment key={ index }>
            {
                selectedOption.value !== data.value ? <div className="item"
                    onClick={ () => setSelectedOption( data ) }
                    data-value={ data.value }> { data.label }
                </div> : null
            }
        </React.Fragment>;
    } );

    useEffect( () => {
        const onBodyClick = ( event ) => {
            if ( !ref.current.contains( event.target ) ) {
                setOpen( false );
            }
        };
        document.body.addEventListener( 'click', onBodyClick, { capture: true } );

        return () => {
            document.body.removeEventListener( 'click', onBodyClick, { capture: true } );
        }
    }, [] );

    return (
        <div style={{ marginTop: '10px' }}>
            <label className="ui label"> { props.label } </label>
            <div ref={ ref } className={ `ui selection fluid dropdown ${ open ? 'active visible' : '' }` }
                onClick={ () => setOpen( !open ) } >
                <i className="dropdown icon"></i>
                <div className="text"> { selectedOption.label } </div>
                <div className={ `menu ${ open ? 'transition visible' : '' }` }>
                    { dropdownItemsView }
                </div>
            </div>
        </div>
    )
}

export default Dropdown
