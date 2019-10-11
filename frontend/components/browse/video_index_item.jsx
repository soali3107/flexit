import React from 'react';

const VideoIndexItem = (props) => {
    // debugger
    return( 
        <video poster={props.video.photo} className="browse-other-videos"controls>
            <source src={props.video.video} type="video/mp4" />
        </video>
    );
};

export default VideoIndexItem;