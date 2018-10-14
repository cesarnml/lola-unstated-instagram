import React from 'react'
import './Header.css'
import EndButtons from './EndButtons'
import Search from './Search'
import PropTypes from 'prop-types'
import AppContainer from '../../AppContainer'
import { Subscribe } from 'unstated'

const Header = () => (
  <Subscribe to={[AppContainer]}>
    {app => (
      <div className='header-container'>
        <div className='header-left'>
          <img
            className='icon'
            src={require('../../icons/insta_icon.png')}
            alt='Instagram Icon'
          />
          <img
            className='logo'
            src={require('../../icons/insta_logo.png')}
            alt='Instagram Logo'
          />
        </div>
        <div className='searchbar'>
          <Search />
          <input
            className='search-input'
            type='text'
            placeholder='Search'
            value={app.state.searchInput}
            onChange={app.searchChange}
          />
        </div>
        <div className='header-right'>
          <EndButtons />
          <div className='logout-btn' onClick={app.logout}>
            Log out
          </div>
        </div>
      </div>
    )}
  </Subscribe>
)

Header.propTypes = {
  searchInput: PropTypes.string
}
export default Header
