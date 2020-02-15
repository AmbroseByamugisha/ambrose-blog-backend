import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom'
import PostSummary from './PostSummary'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 3),
    },
    paper: {
      maxWidth: 400,
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
    },
  }));

const AllPosts = (props) => {
    const classes = useStyles();
    const {posts} = props
    //posts.sort(function(a,b){return a.post.date.seconds-b.post.date.seconds}) 
    return (
        <div className={classes.root}>
      { posts ? posts.map(post => {
        return (
          <Link to={'/post/' + post.id} key={post.id}>
            <PostSummary post={post} posts={posts} />
          </Link>
        )
      }): <h3>Loading...</h3>}
    </div>
    )
}

const mapStateToProps = (state) => {

    return {
        //postsList: state.posts.posts,
      posts: state.firestore.ordered.posts
    }
  }

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'posts'
    }])
)(AllPosts)