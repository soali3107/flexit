import React from 'react';


const BrowseTop = (props) =>{
    // debugger
    return (
        <video className="browse-first-video" poster={props.video.photo} controls>
            <source src={props.video.video} type="video/mp4" />
        </video>
    )

};

export default  BrowseTop;