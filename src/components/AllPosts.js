import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import PostSummary from './PostSummary'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CreatePost from './CreatePost'
import '../index.css'

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

const postsQuery = {
  collection: 'posts',
  orderBy: ['date', 'desc'],
  limitTo: 10
}

function AllPosts() {
    const classes = useStyles()
  // Attach todos listener
  useFirestoreConnect(() => [postsQuery])

  // Get todos from redux state
  const posts = useSelector(({ firestore: { ordered } }) => ordered.posts)

  // Show a message while todos are loading
  if (!isLoaded(posts)) {
    return 'Loading'
  }

  // Show a message if there are no todos
  if (isEmpty(posts)) {
    return 'Todo list is empty'
  }

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
          <CreatePost />
                      
          { posts.map(post => {
        return (
          <div key={post.id}>
          <Link to={'/post/' + post.id} key={post.id} className="post-link">
            <PostSummary post={post} posts={posts} id={post.id} />
          </Link>
          </div>
        )
      })}
      
      </div>
  )
}

export default AllPosts