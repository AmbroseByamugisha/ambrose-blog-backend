export const add_post = (data) => {
    return {
        type: 'ADD_POST',
        data
    }
}

export const add_post_error = (err) => {
    return {
        type: 'ADD_POST',
        err
    }
}

export const delete_post = (post_id) => {
	return {
		type: 'DELETE_POST',
		id: post_id
	}
}

export const addPost = (post) => {
	return (dipatch, getState, {getFirestore}) => {

		const firestore = getFirestore()
		firestore.collection('posts').add({
			...post, date: new Date()
		}).then(() => {
			dipatch(add_post(post))
		}).catch((err) => {
			dipatch(add_post_error(err))
		})
	}
}

export const edit_post = (post_id) => {
    return {
        type: 'EDIT_POST',
        id: post_id
    }
}

export const update_post = (post_id, data) => {
    return {
        type: 'UPDATE_POST',
        id: post_id,
        data
    }
}

export const deletePost = (post_id) => {
	return (dispatch, getState, {getFirestore}) => {

		const firestore = getFirestore()
		firestore.collection('posts').doc(post_id).delete()
		.then(dispatch(delete_post(post_id)));
	}
}

export const toggleIsDeleted = () => {
	return {
		type: 'TOGGLE_IS_DELETED'
	}
}

export const editPost = (id) => {
	return {
		type: 'EDIT_POST',
		id: id
	}
}

export const updatePost = (updatedPost, id) => {
	return (dispatch, getState, { getFirestore }) => {

		const firestore = getFirestore()
		firestore.collection('posts').doc(id).update({
			...updatedPost
		});
	}
}

export const get_post = (id, data) => {
	return{
		type: 'GET_POST',
		id: id,
		data:data
	}
}

export const getPost = (postID) => {
	return (dispatch, getState, { getFirestore }) => {

		const firestore = getFirestore()
		firestore.collection('posts').doc(postID).get().then((doc) => {
			if(doc.exists){
				const data = doc.data()
				dispatch(dispatch(get_post(postID, data)))	
			}else{
				console.log('does not exist')
			}
			
		})
	}
}