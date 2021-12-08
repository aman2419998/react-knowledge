import React from 'react'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
    const errors = {};
    
    if ( !values.title ) {
        errors.title = 'Required'
    } else if ( values.title.length > 15 ) {
        errors.title = 'Must be 15 characters or less'
    }

    if ( !values.description ) {
        errors.description = 'Required'
    } else if ( values.description.length > 15 ) {
        errors.description = 'Must be 15 characters or less'
    }

    return errors
}

const RenderError = ( { touched, error } ) => {
    if ( touched && error ) {
        return <div className="ui error message" >
            <div className="ui bulleted list">
                <div className="item"> { error } </div>
            </div>
        </div>
    }
    return null;
}

const renderField = ( { input, label, type, meta } ) => {
    const fieldClassName = `field ${ meta.touched && meta.error ? 'error' : '' }`
    return <div className={ fieldClassName } >
        <label>{ label }</label>
        <div>
            <input { ...input } placeholder={ label } type={ type } />
            <RenderError { ...meta } />
        </div>
    </div>
};

const onSubmitClick = values => console.log( values );

const streamCreate = ( props ) => {

    const { handleSubmit, valid } = props;

    return (
        <form onSubmit={ handleSubmit( onSubmitClick ) } className="ui form error" autoComplete="off" >
            <Field
                name="title"
                type="text"
                component={ renderField }
                label="Enter Title"
            />
            <Field
                name="description"
                type="text"
                component={ renderField }
                label="Enter Description"
            />
            <button className="ui primary button" type="submit" disabled={ !valid }>
                Submit
            </button>
        </form>
    )
}

export default reduxForm( {
    form: 'streamCreate',
    validate
} )( streamCreate )
