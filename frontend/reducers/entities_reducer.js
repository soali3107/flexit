import { combineReducers } from 'redux';

import videosReducer from './video_reducer';
import usersReducer from './users_reducer';

export default combineReducers({
    videos: videosReducer,
    users: usersReducer
})