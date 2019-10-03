import { combineReducers } from 'redux';
import sessionReducer from './session';

export default combineReducers({
    session: sessionReducer,
});

//Now create the form to create new users from the front end.
//Will need to make a container in components. Create 'session' folder in it.
// Create 'signup_container.js' and 'signup.jsx'