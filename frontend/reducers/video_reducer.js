import { RECEIVE_VIDEOS, RECEIVE_VIDEO}  from  '../actions/video';
import { LOGOUT_CURRENT_USER} from '../actions/session';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type){
        case RECEIVE_VIDEOS:
            return action.videos;
        case RECEIVE_VIDEO:
            return Object.assign({}, state, {[action.video.id]: action.video})
        case LOGOUT_CURRENT_USER:
            return {};
        default: 
            return state;
    }
};
