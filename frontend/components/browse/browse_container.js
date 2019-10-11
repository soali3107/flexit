import { connect } from 'react-redux'; 
import BrowseForm from './browse_form';
import { fetchVideo, fetchVideos } from '../../actions/video';

const mapStateToProps = state => {
    // debugger
    return{
    videos: Object.values(state.entities.videos)
}};

const mapDispatchToProps = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos()),
    fetchVideo: (id) => dispatch(fetchVideo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BrowseForm);