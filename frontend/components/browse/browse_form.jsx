import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import BrowseTop from './browse_top';
import VideoIndexItem from './video_index_item';

class  BrowseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {videos: []}
        // this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount(){
        // debugger
        this.props.fetchVideos();
    }
    render (){
        const firstVideo  =  this.props.videos[0] || {};
        // debugger
        const videos = this.props.videos.slice(1).map(video =>  {
            return <VideoIndexItem key={video.id} video={video} />
        } );
        // debugger
        return (
            <div  className="browse">
                <BrowseTop video={firstVideo}/>
                <ul className="browse-bottom">
                    {videos}
                </ul>
            </div>
        )
    }
}

export default BrowseForm;