import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import SessionForm from './session_form';
// import { connect } from 'http';
//Don't have signup yet => Create a quick skeleton. 
const mapStateToProps = state => ({
    formType: "#/signup",
    // errors: errors.session
});
//Now we have container that is going to give us a function 
//called createNewUser in our props, in our signup.
const mapDispatchToProps = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser)),
});

//we don't need any parts of the state. W?
export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
//Ready to do signup component. Create constructor (to keep track of local state)