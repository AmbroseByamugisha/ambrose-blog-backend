import React, {useState} from 'react'
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
  

const CreatePost = (props) => {
    const classes = useStyles()
    //const { register, handleSubmit, errors } = useForm()
    const firestore = useFirestore()
    // function updatePost() {
    //     firestore.update(`posts/${id}`, data)
    // }

    //console.log(watch('example'))
    const [inputTitleVal, changeTitleInput] = useState('')
    const { handleSubmit, register, errors } = useForm()
    function resetTitleInput() {
        changeTitleInput('')
    }
    function onInputTitleChange(e) {
        return changeTitleInput(e && e.target && e.target.value)
    }
    const [inputBodyVal, changeBodyInput] = useState('')

    function resetBodyInput() {
        changeBodyInput('')
    }
    function onInputBodyChange(e) {
        return changeBodyInput(e && e.target && e.target.value)
    }

    function addTodo() {
        return firestore
          .collection('posts')
          .add({ title: inputTitleVal, 
                 body: inputBodyVal,
                 date: new Date() })
      }
    

    return(
        <div className={classes.root}>
        <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
                
            </Grid>
            <Grid item xs>
                <Typography component={'span'}>
        
            <div>
                <div style={{ marginBottom: '2rem' }}>
                    <h4>New Post</h4>
                    <input value={inputTitleVal} name="title" onChange={onInputTitleChange} ref={register({ required: true })}/>
                    {errors.title && <p>This field is required</p>}
                    <textarea value={inputBodyVal} name="body" onChange={onInputBodyChange} ref={register({ required: true })}></textarea>
                    {errors.body && <p>This field is required</p>}
                    <button onClick={handleSubmit(addTodo)}>Add</button>
                    <button onClick={resetTitleInput}>Cancel Title</button>
                    <button onClick={resetBodyInput}>Cancel Body</button>
                </div>
            </div>
            </Typography>
            </Grid>
            </Grid>
            </Paper>
        
    </div>
    )
}

export default CreatePost