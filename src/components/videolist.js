import React from 'react';
import VideoListItem from './videolistitem';

const VideoList = (props)=>{
  const videos = props.videos;
  const onVideoSelect = props.onVideoSelect;
  const videoItems = props.videos.map(video => <VideoListItem video={video} onVideoSelect = {props.onVideoSelect} key={video.etag} />)
  return (
    <ul className='col-md-4 list-group'>
      {videoItems}
    </ul>
  )
}

export default VideoList;