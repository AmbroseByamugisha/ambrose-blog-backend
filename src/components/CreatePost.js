import React, { Component } from 'react'
import { addPost } from '../actions'
import { connect } from 'react-redux'

class CreatePost extends Component {
    state = { body: "", title: "", editing: false}
    
    handleTitleChange = ({ target }) => {
        this.setState({ title: target.value })
    }

    handleBodyChange = ({ target }) => {
        this.setState({ body: target.value })
    }

    // post title input and truncate the body
    handleSubmit = (event) => {

        const { dispatch } = this.props
        //const { body, title } = this.state
        
        dispatch(addPost(this.state))
        console.log(this.state)
        event.preventDefault()
        }
        render() {
            return(
                <div>
                <form>
                <input onChange={this.handleTitleChange} placeholder="post title"  name="title" required />
                <textarea onChange={this.handleBodyChange} placeholder="What's on your mind"  name="body" required></textarea>
                <button onClick={this.handleSubmit}>Submit</button>
                </form>
                </div>
            )
        }

}

export default connect()(CreatePost)