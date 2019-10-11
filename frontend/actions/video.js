import {getVideos, getVideo} from '../util/video';

export  const RECEIVE_VIDEOS  =  'RECEIVE_VIDEOS';
export  const RECEIVE_VIDEO  =  'RECEIVE_VIDEO';

const receiveVideos = (videos) =>  ({
    type: RECEIVE_VIDEOS,
    videos
});

const receiveVideo = video => ({
    type: RECEIVE_VIDEO,
    video
});

export const fetchVideos = () => dispatch => (
    (getVideos().then(videos => 
        dispatch(receiveVideos(videos))
        ))
);

export const fetchVideo = (id) => dispatch => (
    (getVideo(id).then(video =>
        dispatch(receiveVideo(video))
    ))
);