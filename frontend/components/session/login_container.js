import { connect } from 'react-redux';
import { login } from '../../actions/session';
import SessionForm from './session_form';

const mapStateToProps = state => ({
    formType: "Sign In",
    errors: state.errors.session,
});

const mapDispatchToProps = dispatch => ({
    createSession: formUser => dispatch(login(formUser)),
    demoLogin: demoUser => dispatch(login(demoUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);