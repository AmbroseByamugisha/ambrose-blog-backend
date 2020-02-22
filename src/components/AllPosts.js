import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom'
import PostSummary from './PostSummary'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../index.css'
import CreatePost from './CreatePost'

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

// KEEP THE LINK TO THE POST, NOT THE WHOLE SPACE AROUND THE POST  
const AllPosts = (props) => {
    const classes = useStyles();
    const {posts, auth} = props
    //posts.sort(function(a,b){return a.post.date.seconds-b.post.date.seconds}) 
    return (
        <div className={classes.root}>
        <Grid container spacing={3}>
        <Grid item xs>
          
        </Grid>
        <Grid item xs={6}>
          <p className="heading-1">Personal blog by <a href ="https://github.com/ambrosebyamugisha" className="github-link">Ambrose Byamugisha</a> </p>
        </Grid>
        <Grid item xs>
          
        </Grid>
      </Grid>
      {auth.uid ? <CreatePost /> : null}
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
      posts: state.firestore.ordered.posts,
      auth: state.firebase.auth
    }
  }

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'posts', orderBy: ['date', 'desc']
    }])
)(AllPosts)