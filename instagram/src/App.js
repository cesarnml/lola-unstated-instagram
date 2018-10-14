import React, { Component } from 'react'
import './App.css'
import PostsPage from './components/PostsPage/PostsPage'
import authenticate from './components/Authentication/Authenticate'
class App extends Component {
  render () {
    return <PostsPage />
  }
}

export default authenticate(App)
