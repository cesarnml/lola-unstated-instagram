import { Container } from 'unstated'
import dummyData from './dummy-data'

class AppContainer extends Container {
  state = {
    posts: dummyData,
    commentInput: '',
    searchInput: ''
  }

  fetchState = () => {
    this.setState({ posts: dummyData }, () => this.state.posts)
  }

  searchChange = event => {
    this.setState({
      searchInput: event.target.value
    })
  }

  commentChange = event => {
    this.setState({
      commentInput: event.target.value
    })
  }

  addComment = event => {
    event.preventDefault()
    const newPosts = this.state.posts.map((post, i) => {
      if (event.target.id === i.toString() && this.state.commentInput.trim()) {
        post.comments.push({
          username: localStorage.getItem('username'),
          text: this.state.commentInput
        })
        return post
      } else {
        return post
      }
    })
    this.setState({
      posts: newPosts,
      commentInput: ''
    })
  }

  likePost = event => {
    this.setState({
      posts: this.state.posts.map((post, i) => {
        if (event.target.id === i.toString()) {
          Object.assign(post, { liked: !post.liked })
          post.liked
            ? Object.assign(post, { likes: post.likes + 1 })
            : Object.assign(post, { likes: post.likes - 1 })
          return post
        } else {
          return post
        }
      })
    })
  }
}

export default AppContainer
