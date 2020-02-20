import React from 'react'
import CreatePost from './CreatePost'
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

function Home(props){
    const { auth } = props
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {auth.uid ? <CreatePost /> : null}
            <AllPosts />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Home)