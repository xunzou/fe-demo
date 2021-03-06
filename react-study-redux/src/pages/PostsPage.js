import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {fetchPosts} from '../store/actions/postsActions';
import {Post } from '../components/Post';


const PostsPage = ({dispatch,loading,posts,hasErrors}) => {
  console.log(dispatch,loading,posts,hasErrors)

  useEffect( () => {
    dispatch(fetchPosts())
  },[dispatch])

  const renderPosts = () => {
    if(loading) return <p>加载中……</p>
    if(hasErrors) return <p>靠，出错了</p>
    return posts.map( post => <Post key={post.id} post={post} isList />)
  }

  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  )
}

const mapStateToProps = state => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors,
})

export default  connect(mapStateToProps)(PostsPage);