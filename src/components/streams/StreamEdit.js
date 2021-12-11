import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import StreamForm from './StreamForm'
import { fetchStream, editStream } from '../../redux/actions'
import { pick } from 'lodash'

const streamEdit = ( props ) => {

    const { match: { params } } = props;

    useEffect( () => {
        props.fetchStream( params.id )
    }, [] );

    const onSubmit = ( values ) => {
        props.editStream( params.id, values );
    }

    if ( !props.stream ) {
        return <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading</div>
        </div>
    }

    return (
        <div>
            <h1>Edit Stream</h1>
            <StreamForm onSubmit={ onSubmit } initialValues={ pick( props.stream, 'title', 'description' ) } />
        </div>
    )
}

const mapStateToProps = ( state, ownProps ) => {
    return { stream: state.streams[ ownProps.match.params.id ] }
}

const mapActionToProps = { fetchStream, editStream }

export default connect( mapStateToProps, mapActionToProps )( streamEdit )
