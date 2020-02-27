import React from 'react'
import { useForm } from 'react-hook-form'
import { useFirestore } from 'react-redux-firebase'
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
      maxWidth: 400,
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
    },
  }));
  

const EditPost = (props) => {
    const classes = useStyles()
    const { register, handleSubmit, errors } = useForm()
    const firestore = useFirestore()
    // function updatePost() {
    //     firestore.update(`posts/${id}`, data)
    // }
    const onSubmit = data => {
        firestore.update(`posts/${props.location.state.postId}`, data)
        const returnToPostPage = () => props.history.push('/post/' + props.location.state.postId)
        returnToPostPage()
    }

    //console.log(watch('example'))

    return(
        <div className={classes.root}>
      <Paper className={classes.paper}>
      <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            
          </Grid>
          <Grid item xs>
            <Typography component={'span'}>
    
        <div>
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input name="title" defaultValue={props.location.state.postTitle} ref={register} required />
            {/* include validation with required or other standard HTML validation rules */}
            <textarea name="body" defaultValue={props.location.state.postBody} ref={register({ required: true })}></textarea>
            {/* errors will return when field validation fails  */}
            <input type="submit" />
            {errors.body && <p>This field is required</p>}
        </form>
            
        </div>
        </Typography>
          </Grid>
        </Grid>
        </Paper>
      
    </div>
    )
}

export default EditPost