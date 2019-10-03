import { connect } from 'react-redux';
import { login } from '../../actions/session';
import SessionForm from './session_form';

const mapStateToProps = state => ({
    formType: "#/login",
});

const mapDispatchToProps = dispatch => ({
    login: formUser => dispatch(login(formUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);