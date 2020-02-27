import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
//import { useFirestore } from 'react-redux-firebase'
//import './Todo.css'
import Paper from '@material-ui/core/Paper';
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

function PostSummary({ id }) {
  const classes = useStyles()

  const truncateString = (str, num) => {
    // If the length of str is less than or equal to num
    // just return str--don't truncate it.
    if (str.length <= num) {
      return str
    }
    // Return str truncated with '...' concatenated to the end of str.
    return str.slice(0, num) + '...'
  }
  const post = useSelector(
    ({ firestore: { data } }) => data.posts && data.posts[id]
  )
  //const firestore = useFirestore()

//   function toggleDone() {
//     firestore.update(`posts/${id}`, { done: !post.done })
//   }

//   function deleteTodo() {
//     return firestore.delete(`posts/${id}`)
//   }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            
          </Grid>
          <Grid item xs>
            <Typography component={'span'}>
         
            <div key={post.id}>
                <h5 className="ps-title">{post.title}</h5>
                <p className="ps-body">{truncateString(post.body, 50)}</p>
                <Typography variant="caption" display="block" gutterBottom className="ps-date">
                {moment(post.date.toDate()).calendar()}
                </Typography>
            </div> 
            </Typography>
          </Grid>
        </Grid>
        </Paper>
        
    </div>
  )
}

PostSummary.propTypes = {
  id: PropTypes.string.isRequired
}

export default PostSummary