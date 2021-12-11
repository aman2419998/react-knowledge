import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signIn, signOut } from '../redux/actions'

class GoogleAuth extends Component {

    componentDidMount () {
        gapi.load( 'client:auth2', () => {
            gapi.client.init( {
                clientId: '208684626070-dprum8mu03dej5i0rbj4qe1b85a9vvgc.apps.googleusercontent.com',
                scope: 'email'
            } ).then( () => {
                this.auth = gapi.auth2.getAuthInstance();
                this.onAuthChange( this.auth.isSignedIn.get() );
                this.auth.isSignedIn.listen( this.onAuthChange )
            } );
        } )
    }

    onAuthChange = isSignedIn => {
        if ( isSignedIn ) {
            this.props.signIn( this.auth.currentUser.get().getId() );
        } else {
            this.props.signOut( null );
        }
    }

    renderLogoutButton = () => {
        return <div className="ui labeled button" onClick={ ( ) => this.auth.signOut() } tabIndex="0">
            <div className="ui red button">
                <i className="google icon"></i> Logout
            </div>
        </div>
    }

    renderLoginButton = () => {
        return <div className="ui labeled button" onClick={ ( ) => this.auth.signIn() } tabIndex="0">
            <div className="ui primary button">
                <i className="google icon"></i> Login
            </div>
        </div>
    }

    renderButtons = () => {
        const { authentication } = this.props;
        if ( authentication.isSignedIn ) {
            return this.renderLogoutButton();
        } else if ( authentication.isSignedIn === null ) {
            return null;
        } else {
            return this.renderLoginButton()
        }
    }

    render () {
        return ( this.renderButtons() )
    }
}

const mapStateToProps = ( state ) => {
    return {
        authentication: state.Authentication
    }
}

const mapActionToProps = { signIn, signOut }

export default connect( mapStateToProps, mapActionToProps )( GoogleAuth );
