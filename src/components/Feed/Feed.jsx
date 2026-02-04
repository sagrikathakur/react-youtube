import React from 'react'
import './Feed.css'
import { Link } from 'react-router-dom'
import { videoData } from '../../data'

const Feed = () => {
  return (
    <div className="feed">
      {videoData.map((video) => (
        <Link
          to={`/video/${video.id}/${video.id}`}
          key={video.id}
          className="video-card"
        >
          <div className="thumbnail-container">
            <img src={video.thumbnail} alt={video.title} className="thumbnail" />
            <span className="duration">{video.duration}</span>
          </div>
          <div className="video-info">
            <img src={video.channelImg} alt={video.channel} className="channel-icon" />
            <div className="video-details">
              <h3 className="video-title">{video.title}</h3>
              <p className="channel-name">{video.channel}</p>
              <p className="video-meta">
                {video.views} • {video.time}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Feed
