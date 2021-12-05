import { find } from 'lodash'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from "../redux/actions"

const PostAuthor = ( props ) => {

    const { user } = props;

    if ( !user ) {
        return <></>;
    }

    return ( <> { user.name } </> )
}

const mapStateToProps = ( state, ownProps ) => {
    const user = find( state.USERS, ( data ) => data.id === ownProps.userId );
    return { user }
}

const mapActionsToProps = {
    fetchUser
}

export default connect( mapStateToProps, mapActionsToProps )( PostAuthor )
