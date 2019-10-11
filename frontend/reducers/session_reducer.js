import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER}  from '../actions/session';

const _nullSession = {currentUser: null};
export default (state = _nullSession, action) =>{
    Object.freeze(state);
    switch (action.type) {
        case  RECEIVE_CURRENT_USER:
            //We don;t have to worry what the state was before. No need to worry about old current user.
            return Object.assign({}, {currentUser: action.user });
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
};

//after creating sessionReducer, import it to the root reducer.
// Create 'signup_container.js' and 'signup.jsx'