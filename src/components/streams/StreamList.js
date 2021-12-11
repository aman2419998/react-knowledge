import { map } from 'lodash';
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { fetchStreams, deleteStream } from '../../redux/actions'

const StreamList = ( props ) => {

    useEffect( () => {
        props.fetchStreams();
    }, [] );

    const RenderList = () => {
        return map( props.streams, ( data, index ) => {
            return <div key={ index } className="item">
                <RenderEditDeleteButton id={ data.id } userId={ data.userId } />
                <i className="large camera middle aligned icon"></i>
                <div className="content">
                    <a className="header"> { data.title } </a>
                    <div className="description"> { data.description } </div>
                </div>
            </div>
        } );
    }

    const RenderCreateButton = () => {
        return (
            props.auth.userId ? <Link to="/stream/create" className="ui right floated primary button" >
                Create Stream
            </Link> : null
        );
    }

    const RenderEditDeleteButton = ( { id, userId } ) => {
        return (
            props.auth.userId === userId ? <div className="ui right floated content">
                <Link to={ `/stream/edit/${ id }` } className="ui purple button" >
                    Edit
                </Link>
                <button onClick={ () => props.deleteStream( id ) } className="ui red button" >
                    Delete
                </button>
            </div> : null
        );
    }

    return (
        <React.Fragment>
            <div className="ui relaxed divided list">
                <RenderList />
            </div>
            <RenderCreateButton />
        </React.Fragment>
    )
}

const mapStateToProps = ( state ) => {
    return {
        streams: Object.values( state.streams ),
        auth: state.Authentication
    };
}

const mapActionToProps = {
    fetchStreams,
    deleteStream
}

export default connect( mapStateToProps, mapActionToProps )( StreamList )
