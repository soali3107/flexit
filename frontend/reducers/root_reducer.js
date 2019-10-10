import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import entitiesReducer from './entities_reducer';

export default combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    // video: videosReducer
});

//Now create the form to create new users from the front end.
//Will need to make a container in components. Create 'session' folder in it.
// Create 'signup_container.js' and 'signup.jsx'