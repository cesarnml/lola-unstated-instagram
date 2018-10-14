import React from 'react'
import AppContainer from '../../AppContainer'
import { Subscribe } from 'unstated'
import PropTypes from 'prop-types'

const HeartButton = ({ index, liked }) => (
  <Subscribe to={[AppContainer]}>
    {app => (
      <div className='heart-container'>
        <svg
          onClick={app.likePost}
          className='heart-button'
          xmlns='http://www.w3.org/2000/svg'
          width='30'
          height='30'
          viewBox='0 0 24 24'
          stroke={liked ? '#ff3144' : 'black'}
          strokeWidth='1'
          strokeLinecap='round'
          strokeLinejoin='round'
          cursor='pointer'
        >
          <path
            id={index}
            fill={liked ? '#ff3144' : 'white'}
            d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'
          />
        </svg>
      </div>
    )}
  </Subscribe>
)

HeartButton.propTypes = {
  index: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired
}

export default HeartButton
