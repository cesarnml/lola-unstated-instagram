import React, { Component, Fragment } from 'react'
import Login from '../Login/Login'

const authenticate = App => class Authenticate extends Component {
  constructor () {
    super()
    this.state = {
      loggedIn: Boolean(localStorage.getItem('loggedIn')),
      username: '',
      password: ''
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  }

  login = () => {
    if (this.state.username.trim() && this.state.password.trim()) {
      this.setState({
        loggedIn: true
      })
      localStorage.setItem('username', this.state.username)
      localStorage.setItem('loggedIn', true)
    } else {
      alert('Please enter a username and password')
    }
  }

  logout = () => {
    this.setState({
      loggedIn: false,
      username: '',
      password: ''
    })
    localStorage.removeItem('username')
    localStorage.setItem('loggedIn', false)
  }

  renderContent = () => {
    const { username, password } = this.state
    return this.state.loggedIn
      ? <App />
      : <Login
        login={this.login}
        username={username}
        password={password}
        handleChange={this.handleChange}
        />
  }

  render () {
    return (
      <Fragment>
        {this.renderContent()}
      </Fragment>
    )
  }
}

export default authenticate
