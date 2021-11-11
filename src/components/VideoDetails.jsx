
export function VideoDetails({ video }) {

    if (!video) {
        return <div>Loading...</div>
    }


    const videoSrc = `https://youtube.com/embed/${video.id.videoId}`

    return (
        <div>

            <div className="ui embed">

                <iframe title="video player" src={videoSrc} style={{ marginBottom: '20px' }} />
            </div>
            <div className="segment">



                <h4 className="ui header" style={{ marginTop: '20px' }}> {video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}