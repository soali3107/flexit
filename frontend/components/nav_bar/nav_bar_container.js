// Video 7 (1:02) importing logout action from session action file allow us to create a button for user to logout.
//msP: Pass down current user from state to navbar component.
//mdp: passing down logout component.

import { connect } from 'react-redux';
import { logout } from '../../actions/session';
import NavBar from './nav_bar';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    // demoLogin: demoUser => dispatch(login(demoUser))
});

export default connect(null, mapDispatchToProps)(NavBar);