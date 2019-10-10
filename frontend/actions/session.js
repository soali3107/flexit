import {postUser, deleteSession, postSession, demoLogin} from '../util/session';

//want to receive current user & logout current user. 
// Make sure that the we get proper errors in reducer.
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

//Action creators:Return plain js object with a type and  some kind of payload.
const receiveCurrentUser = user  =>({
    //JS object
    type: RECEIVE_CURRENT_USER,
    //Take in user as payload (keyword user and value whatever properties user has)
    user
});

//Doesn't need to take in values
const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});
//thunk action creators.
//Log user in. Create form later.
export const createNewUser = formUser => dispatch => (postUser(formUser)
    .then(user => (dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const login = formUser => dispatch => (postSession(formUser)
    .then(user => (dispatch(receiveCurrentUser(user))),
    err => (dispatch(receiveErrors(err.responseJSON))
    ))
);

export const logout = () => dispatch => deleteSession()
.then(() => dispatch(logoutCurrentUser()));

// export const demoLogin = () => dispatch => (demoLogin()) 
//We now need to create information in our state to store information (reducer)