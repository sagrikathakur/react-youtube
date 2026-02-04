import React, { useState } from 'react'
import './Video.css'
import { useParams } from 'react-router-dom'
import { videoData } from '../../data'
import { Link } from 'react-router-dom'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import video from '../../assets/video.mp4'

const Video = () => {
  const { videoId } = useParams();
  const currentVideo = videoData.find(v => v.id === parseInt(videoId)) || videoData[0];
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [likes, setLikes] = useState(15234);
  const [isLiked, setIsLiked] = useState(false);
  const [commentText, setCommentText] = useState('');

  const comments = [
    { id: 1, user: "TechEnthusiast", avatar: currentVideo.channelImg, text: "This is absolutely amazing! Can't wait for more content like this.", time: "2 days ago", likes: 234 },
    { id: 2, user: "CodeMaster99", avatar: videoData[1]?.channelImg, text: "Great explanation, really helped me understand the concept better.", time: "1 week ago", likes: 156 },
    { id: 3, user: "DigitalNomad", avatar: videoData[2]?.channelImg, text: "Been waiting for this video! You never disappoint 🔥", time: "3 days ago", likes: 89 },
    { id: 4, user: "CreativeMinds", avatar: videoData[3]?.channelImg, text: "Please make a follow-up video on this topic!", time: "5 days ago", likes: 67 }
  ];

  const handleLike = () => {
    if (!isLiked) {
      setLikes(likes + 1);
      setIsLiked(true);
    } else {
      setLikes(likes - 1);
      setIsLiked(false);
    }
  };

  return (
    <div className="play-container">
      <div className="play-video">
        <video src={video} controls autoPlay muted></video>

        <div className="video-info-section">
          <h3 className="video-title">{currentVideo.title}</h3>

          <div className="video-details-row">
            <div className="channel-info">
              <img src={currentVideo.channelImg} alt="" className="channel-avatar" />
              <div className="channel-text">
                <p className="channel-name">{currentVideo.channel}</p>
                <span className="subscribers">1.2M subscribers</span>
              </div>
              <button
                className={`subscribe-btn ${isSubscribed ? 'subscribed' : ''}`}
                onClick={() => setIsSubscribed(!isSubscribed)}
              >
                {isSubscribed ? 'Subscribed' : 'Subscribe'}
              </button>
            </div>

            <div className="action-buttons">
              <div className={`action-btn like-btn ${isLiked ? 'active' : ''}`} onClick={handleLike}>
                <img src={like} alt="like" />
                <span>{likes.toLocaleString()}</span>
              </div>
              <div className="action-btn">
                <img src={dislike} alt="dislike" />
              </div>
              <div className="action-btn">
                <img src={share} alt="share" />
                <span>Share</span>
              </div>
              <div className="action-btn">
                <img src={save} alt="save" />
                <span>Save</span>
              </div>
            </div>
          </div>
        </div>

        <div className="description-box">
          <div className="desc-stats">
            <span>{currentVideo.views}</span>
            <span>{currentVideo.time}</span>
          </div>
          <p className="desc-text">
            Welcome to this amazing video! In this content, we explore fascinating topics that will blow your mind.
            Don't forget to like, subscribe, and hit the bell icon for more awesome content!
            <br /><br />
            #youtube #trending #viral #content
          </p>
        </div>

        <div className="comments-section">
          <h4>{comments.length} Comments</h4>

          <div className="add-comment">
            <img src={currentVideo.channelImg} alt="" className="comment-avatar" />
            <input
              type="text"
              placeholder="Add a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
          </div>

          <div className="comments-list">
            {comments.map(comment => (
              <div className="comment" key={comment.id}>
                <img src={comment.avatar} alt="" className="comment-avatar" />
                <div className="comment-content">
                  <div className="comment-header">
                    <span className="comment-user">@{comment.user}</span>
                    <span className="comment-time">{comment.time}</span>
                  </div>
                  <p className="comment-text">{comment.text}</p>
                  <div className="comment-actions">
                    <img src={like} alt="like" />
                    <span>{comment.likes}</span>
                    <img src={dislike} alt="dislike" />
                    <span className="reply-btn">Reply</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="right-sidebar">
        <h4>Related Videos</h4>
        {videoData.filter(v => v.id !== parseInt(videoId)).map(video => (
          <Link to={`/video/${video.id}/${video.id}`} key={video.id} className="side-video-card">
            <div className="side-thumbnail">
              <img src={video.thumbnail} alt={video.title} />
              <span className="side-duration">{video.duration}</span>
            </div>
            <div className="side-video-info">
              <h5>{video.title}</h5>
              <p>{video.channel}</p>
              <p>{video.views} • {video.time}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Video
