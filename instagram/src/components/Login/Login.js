import React from 'react'
import './Login.css'

const Login = props => (
  <div className='login'>
    <div className='login-container'>
      <img
        className='login-logo'
        src={require('../../icons/insta_logo.png')}
        alt='Instagram Logo'
      />
      <input
        name='username'
        className='login-input'
        type='text'
        placeholder='Phone number, username, or email'
        onChange={props.handleChange}
      />
      <input
        name='password'
        className='login-input'
        type='password'
        placeholder='Password'
        onChange={props.handleChange}
      />
      <div className='login-btn' onClick={props.login}>
        Log in
      </div>
    </div>
  </div>
)

export default Login
