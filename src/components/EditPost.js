import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getPost, updatePost } from '../actions'

class EditPost extends Component {

	state = {
        title: '',
        body: ''
	}

	componentDidMount(){
        //let {id} = this.props.match.params
        const { postId } = this.props.location.state
        this.props.getPost(postId)
        console.log(postId)
	}

	componentDidUpdate(prevProps) {
	  // Typical usage (don't forget to compare props):
	  if (this.props.getPostData !== prevProps.getPostData) {
	    const post = this.props.getPostData.data
        this.setState({title: post.title})
        this.setState({body: post.body})
        console.log(this.state.title)
	  }
	}

	// handleChange = value => {
	// 	this.setState({ post: value })
    // }
    handleTitleChange = ({ target }) => {
        this.setState({ title: target.value })
    }

    handleBodyChange = ({ target }) => {
        this.setState({ body: target.value })
    }

	handleSubmit = e => {
        e.preventDefault()
        const title = this.getTitle.value;
        const body = this.getBody.value;
        const data = {
            title,
            body
        }
        this.props.updatePost(data, this.props.location.state.postId)
        //console.log(this.props.location.state.postId)
        this.props.history.push('/')
        }	

        render() {
            return (
                <div>
                    <div className='center'>
                        <h4>Update Post</h4>
                        <div className='container'>
                        <form className="col s12" style={{ marginTop: '70px' }} onSubmit={this.handleSubmit}>
                            <input 
                                type="text"  
                                onChange={this.handleTitleChange}
                                ref={(input) => this.getTitle = input}
                                defaultValue={this.state.title}
                                required
                                />
                            <input 
                                type="text"  
                                onChange={this.handleBodyChange}
                                ref={(input) => this.getBody = input}
                                defaultValue={this.state.body}
                                required
                                />
                            <div className='center'>
                                <button>update post</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            )
        }
}

const mapDispatchToProps = (dispatch) => {
	return {
		getPost: (id) => { dispatch(getPost(id))},
		updatePost: (updatedPost, id) => { dispatch(updatePost(updatedPost, id)) }
	}
}

const mapStateToProps = (state) => {
	return {
		getPostData: state.posts
	}
} 

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)