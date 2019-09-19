import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  } else {
    const videoSrc = `https://youtube.com/embed/${video.id.videoId}`
    return (
      <div className="video-detail">
        <div className="ui embed">
          <iframe src={videoSrc} title="video player" />
        </div>

        <div className="ui segment">
          <h1 className="ui header">{video.snippet.title}</h1>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
  }
};

export default VideoDetail;
