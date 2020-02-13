import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

const PostDetails = (props) => {
    const {post} = props
    if(post){
    return (
        <div className="post">
          {post ? post.map((post) => (!post.editing ?
        <div key={post.id}>
          <h3>{post.title}</h3>
          <h5>{post.body}</h5>
          <button>Delete</button>
        </div> : null
        )): <h3>Loading...</h3>
          }
        </div>
    )} else {
      return (
        <div className="container center">
          <p>Loading post...</p>
        </div>
      )
    }
}

// CREATE A LOADING STATE FOR DATA FETCHING
// COZ THE STATE RELOADS AS SERVER REFRESHES
// AND DATA IN THAT STATE DOES NOT EXIST
const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const posts = state.firestore.ordered.posts
    const post = posts ? posts.filter(post=>post.id===id) : null
    return {
      post_id: id,
      post: post
    }
  }
  export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
      collection: 'posts'
    }])
  )(PostDetails)