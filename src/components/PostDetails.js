import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { useFirestore } from 'react-redux-firebase'
//import './Todo.css'
import { Redirect, Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import moment from 'moment'
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
  collection: 'posts'
}


function PostDetail(props) {
  const classes = useStyles()
  const id = props.match.params.id
  // Attach todos listener
  useFirestoreConnect(() => [postsQuery])

  // Get todos from redux state
  const posts = useSelector(({ firestore: { ordered } }) => ordered.posts)

  const post = useSelector(
    ({ firestore: { data } }) => data.posts && data.posts[id]
  )

  const firestore = useFirestore()
  // Show a message while todos are loading
  if (!isLoaded(posts)) {
    return 'Loading'
  }

  // Show a message if there are no todos
  if (isEmpty(posts)) {
    return 'There are no posts'
  }

  if (isEmpty(post)){
    return (
      <Redirect
          to={{
            pathname: "/"
          }}
        />
    )
  }
  

//   function toggleDone() {
//     firestore.update(`posts/${id}`, { done: !post.done })
//   }

  function deleteTodo() {
    return firestore.delete(`posts/${id}`)
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
      <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            
          </Grid>
          <Grid item xs>
            <Typography component={'span'}>
            
            <div>
                <h5 className="ps-title">{post.title}</h5>
                <p className="ps-body">{post.body}</p>
                <Typography variant="caption" display="block" gutterBottom className="ps-date">
                {moment(post.date.toDate()).calendar()}
                </Typography>
                    <span className="delete-icon" onClick={deleteTodo}>
                      <DeleteOutlinedIcon />
                    </span>
                    <Link to={{
                        pathname: '/update_post',
                        state: {postId: id,
                                postTitle: post.title,
                                postBody: post.body}
                      }}>
                      <i className='material-icons edit'>edit</i>
                    </Link>  
            </div>  
        </Typography>
          </Grid>
        </Grid>
        </Paper>
      
    </div>
  )
}

// PostDetail.propTypes = {
//   id: PropTypes.string.isRequired
// }

export default PostDetail