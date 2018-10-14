import React from 'react'
import Header from '../Header/Header'
import PostContainer from '../PostContainer/PostContainer'
import AppContainer from '../../AppContainer'
import { Subscribe } from 'unstated'

const PostsPage = () => (
  <Subscribe to={[AppContainer]}>
    {app => (
      <div className='posts-page'>
        <Header />
        {app.state.posts.map((post, index) => {
          return (
            <PostContainer
              post={post}
              index={index}
              searchInput={app.state.searchInput}
              key={post.imageUrl}
            />
          )
        })}
      </div>
    )}
  </Subscribe>
)

export default PostsPage
