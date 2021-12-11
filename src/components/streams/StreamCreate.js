import React from 'react'
import { connect } from 'react-redux'
import StreamForm from './StreamForm'
import { createStream } from '../../redux/actions'

const StreamCreate = ( props ) => {

    const onSubmit = ( values ) => {
        props.createStream( values );
    }

    return (
        <div>
            <h1>Create Stream</h1>
            <StreamForm onSubmit={ onSubmit } />
        </div>
    )
}

const mapActionToProps = { createStream }

export default connect( null, mapActionToProps )( StreamCreate )
