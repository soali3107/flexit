import React from 'react';

const VideoIndexItem = (props) => {
    // debugger
    return( 
        <video width="320" height="240" controls>
            <source src={props.video.video} type="video/mp4" />
        </video>
    );
};

export default VideoIndexItem;