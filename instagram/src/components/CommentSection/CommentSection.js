import React from 'react'
import './CommentSection.css'
import moment from 'moment'
import PropTypes from 'prop-types'
import AppContainer from '../../AppContainer'
import { Subscribe } from 'unstated'

const CommentSection = ({ post, index }) => (
  <Subscribe to={[AppContainer]}>
    {app => (
      <div className='comments-container'>
        {post.comments.map(comment => {
          return (
            <div className='comment' key={comment.text}>
              <span className='user'>{comment.username}&nbsp;</span>
              {comment.text}
            </div>
          )
        })}
        <div className='timestamp'>
          {moment(post.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow()}
        </div>
        <div className='add-comment'>
          <form id={index} onSubmit={app.addComment}>
            <input
              className='comment-input'
              type='text'
              placeholder='Add a comment...'
              value={app.state.commentInput}
              onChange={app.commentChange}
            />
          </form>
          <img
            className='elipses'
            src={require('../../icons/insta_dots.png')}
            alt='more options button'
          />
        </div>
      </div>
    )}
  </Subscribe>
)

CommentSection.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}
export default CommentSection
