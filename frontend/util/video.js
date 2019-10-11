export const getVideos = () => {
    return $.ajax({
        url: 'api/videos',
        method: 'GET',
        // data
    })
};

export const getVideo = id => {
    return $.ajax({
        method: 'GET',
        url: `api/video/${id}`
    })
}