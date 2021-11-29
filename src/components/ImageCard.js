import React, { Component } from 'react'

export default class ImageCard extends Component {

    constructor ( props ) {
        super( props );

        this.state = { span: 0 }

        this.imageRef = React.createRef();
    }

    componentDidMount () {
        this.imageRef.current.addEventListener( 'load', () => {
            this.setState( {
                span: Math.ceil( this.imageRef.current.clientHeight / 10 )
            } );
        } );
    }

    render () {
        const { description, urls } = this.props;
        return (
            <img style={{ gridRowEnd: `span ${ this.state.span }` }} ref={ this.imageRef } alt={ description } src={ urls.regular } />
        )
    }
}
