import React from 'react'
import CommentSection from '../CommentSection/CommentSection'
import HeartButton from './HeartButton.js'
import './PostContainer.css'
import PropTypes from 'prop-types'

const PostContainer = ({ post, index, searchInput }) => (
  <div
    className={post.username.includes(searchInput) ? 'post-container' : 'hide'}
  >
    <div className='user-info'>
      <img
        className='user-thumbnail'
        src={post.thumbnailUrl}
        alt='user thumbnail'
      />
      <div className='username'>{post.username}</div>
    </div>
    <img src={post.imageUrl} alt='post' />
    <div className='image-reaction'>
      <HeartButton index={index} liked={post.liked} />
      <img
        className='reaction-icon'
        src={require('../../icons/insta_comment.png')}
        alt='comment button'
      />
    </div>
    <div className='likes'>{post.likes} likes</div>
    <CommentSection post={post} index={index} />
  </div>
)

PostContainer.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  searchInput: PropTypes.string.isRequired
}

export default PostContainer
