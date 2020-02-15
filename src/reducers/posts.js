const initialState = {posts: [
    {id: 1, title: "post one", body: "vdfdf"}   
],
isdeleted: false,
isEditing: false}
  
export default (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_POST':
            return {
                ...state,
                posts:state.posts.concat([action.data])
            }
            
        case 'DELETE_POST':
            return {
                ...state,
                isdeleted: true
            }
        case 'GET_POST':
            return {
                ...state,
                data:action.data
            }
        case 'TOGGLE_IS_DELETED':
            return {
                ...state,
                isdeleted: false
            }
        default:
            return state;
    }
}
