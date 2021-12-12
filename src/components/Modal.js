import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ( props ) => {

    const RenderModal = () => {
        return <div onClick={ props.onDismiss } className="ui dimmer modals visible active">
            <div className="ui standard modal visible active" onClick={ ( event ) => event.stopPropagation() } >
                <div className="header"> { props.title } </div>
                <div className="content">
                    { props.content }
                </div>
                <div className="actions">
                    { props.actions }
                </div>
            </div>
        </div>
    }

    return ReactDOM.createPortal( <RenderModal />, document.getElementById( 'modal' ) );
}

export default Modal
