import { map } from 'lodash';
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPostAndUser } from '../redux/actions';
import PostAuthor from './PostAuthor';

const PostList = ( props ) => {

    useEffect( () => {
        props.fetchPostAndUser();
    }, [] );

    const renderListItems = map( props.posts, ( data, index ) => {
        return <div className="item" key={ index }>
            <i className="large github middle aligned icon"></i>
            <div className="content">
                <div className="header"> { data.title } </div>
                <div className="meta"> { data.body } </div>
                <h4> <PostAuthor userId={ data.userId } /> </h4>
            </div>
        </div>
    } )

    return (
        <div className="ui relaxed divided list">
            { renderListItems }
        </div>
    )
}

const mapStateToProps = ( state ) => {
    return { posts: state.POSTS }
}

const mapActionsToProps = {
    fetchPostAndUser
}

export default connect( mapStateToProps, mapActionsToProps )( PostList );
