import React from 'react'
import CreatePost from './CreatePost'
import AllPosts from './AllPosts'

function Home(){
    return (
        <div>
            <CreatePost />
            <AllPosts />
        </div>
    )
}

export default Home