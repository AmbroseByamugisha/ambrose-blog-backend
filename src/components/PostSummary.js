import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
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
// ADD PAGINATION AND ORDER BY DATE - 
// USE CLASSES TO setState if need be
const PostSummary = (post) => {
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
    return (
        <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <Typography component={'span'}>
            <div key={post.id}>
                <h3>{post.post.title}</h3>
                {truncateString(post.post.body, 100)}
                {console.log(post.post.date.seconds)}
            </div>  
        </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
    )
}

export default PostSummary