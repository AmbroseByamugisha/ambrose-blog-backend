import React from 'react'
import CreatePost from './CreatePost'
import AllPosts from './AllPosts'
import { connect } from 'react-redux'

function Home(props){
    const { auth } = props
    return (
        <div>
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