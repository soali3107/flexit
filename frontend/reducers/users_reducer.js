import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            //We don;t have to worry what the state was before. No need to worry about old current user.
            return Object.assign({}, {[action.user.id]: action.user });
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};