import React, { Component } from 'react'

export default class SearchBar extends Component {

    state = { term: '' }

    onSubmitClick = ( event ) => {
        event.preventDefault();
        this.props.onSubmit( this.state.term );
    }

    render () {
        return (
            <div className="ui segment">
                <form onSubmit={ this.onSubmitClick } autoComplete="off" className="ui form">
                    <div className="field">
                        <label htmlFor="search" >Search Term</label>
                        <input
                            type="text"
                            name="search"
                            value={ this.state.term }
                            onChange={ ( e ) => this.setState( { term: e.target.value } ) } />
                    </div>
                </form>
            </div>
        )
    }
}
