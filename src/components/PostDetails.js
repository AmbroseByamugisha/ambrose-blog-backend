import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { deletePost, editPost } from '../actions'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 900,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

const PostDetails = (props) => {
    const classes = useStyles()
    const {post, deletePost, auth} = props
    if(post){
    return (
        
        //
        <div className={classes.root}>
        <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            {/* <Avatar>W</Avatar> */}
          </Grid>
          <Grid item xs>
            <Typography component={'span'}>
            {/*start */}
            <div className="post">
          {post.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <h5>{post.body}</h5>
          {auth.uid ? <div>
            <Link className='secondary-content' to='/' onClick={ () => deletePost(post.id) }>
							<i className='material-icons delete'>delete</i>
						</Link>
            <Link className='secondary-content' to={{
              pathname: '/update_post',
              state: {postId: post.id}
            }}>
            <i className='material-icons edit'>edit</i>
            </Link>
          </div>: null}
          </div> 
        ))
          }
        </div>    
            {/* end */} 
        </Typography>
          </Grid>
        </Grid>
        </Paper>
    </div>
        //
    )} 
    else {
      return(
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location,
                     isdeleted: false }
          }}
        />
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
      post: post,
      auth: state.firebase.auth
    }
  }

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (post_id) => { dispatch(deletePost(post_id))},
    editPost: (post_id) => { dispatch(editPost(post_id))}
  }
}
  
  
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{
    collection: 'posts'
  }])
)(PostDetails)