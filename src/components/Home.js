import React from 'react'
import AllPosts from './AllPosts'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Home(){
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {/* {auth.uid ? <CreatePost /> : null} */}
            <AllPosts />
        </div>
    )
}

export default connect()(Home)