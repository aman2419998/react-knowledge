import React, { useEffect } from 'react'
import Modal from '../Modal'
import { deleteStream, fetchStream } from '../../redux/actions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import history from '../../history';

const StreamDelete = ( props ) => {

    const { match: { params } } = props;

    useEffect( () => {
        props.fetchStream( params.id )
    }, [] );

    const RenderModalActions = () => {
        return (
            <React.Fragment>
                <div className="ui red button" onClick={ () => props.deleteStream( params.id ) } >Delete</div>
                <Link to="/" className="ui cancel button">Cancel</Link>
            </React.Fragment>
        )
    }

    const RenderModalContent = () => {
        return (
            <p>
                Are you sure you want to delete the stream?
                { props.stream && <b> { props.stream.title } </b> }
            </p>
        )
    }

    return (
        <div>
            <Modal
                title="Delete Stream"
                content={ <RenderModalContent /> }
                actions={ <RenderModalActions /> }
                onDismiss={ () => history.push( '/' ) } />
        </div>
    )
}

const mapStateToProps = ( state, ownProps ) => {
    return { stream: state.streams[ ownProps.match.params.id ] }
}

const mapActionToProps = { deleteStream, fetchStream }

export default connect( mapStateToProps, mapActionToProps )( StreamDelete );
