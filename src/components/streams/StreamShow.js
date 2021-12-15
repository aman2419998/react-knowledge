import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchStream } from '../../redux/actions'

const StreamShow = ( props ) => {

    const { match: { params }, stream } = props;

    useEffect( () => {
        props.fetchStream( params.id )
    }, [] );

    if ( !stream ) {
        return <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading</div>
        </div>
    }

    return (
        <div className="ui card">
            <div className="image">
                <img src="http://via.placeholder.com/640x360" />
            </div>
            <div className="content">
                <a className="header"> { stream.title } </a>
                <div className="description">
                    { stream.description }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ( state, ownProps ) => {
    return { stream: state.streams[ ownProps.match.params.id ] }
}

const mapActionToProps = { fetchStream }

export default connect( mapStateToProps, mapActionToProps )( StreamShow )
