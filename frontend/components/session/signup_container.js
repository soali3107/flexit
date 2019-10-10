import { connect } from 'react-redux';
import { createNewUser, login } from '../../actions/session';
import SessionForm from './session_form';
import React from 'react';

// import { connect } from 'http';
//Don't have signup yet => Create a quick skeleton. 
const mapStateToProps = state => ({
    formType: "Sign  Up",
    errors: state.errors.session,
    // errors: errors.session
});
//Now we have container that is going to give us a function 
//called createNewUser in our props, in our signup.
const mapDispatchToProps = dispatch => ({
    createSession: formUser => dispatch(createNewUser(formUser)),
    demoLogin: demoUser => dispatch(login(demoUser))
});

//we don't need any parts of the state. W?
export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
//Ready to do signup component. Create constructor (to keep track of local state)