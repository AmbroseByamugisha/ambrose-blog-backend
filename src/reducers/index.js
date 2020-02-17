import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import posts from './posts';
import auth from './auth'

export default combineReducers({
  posts,
  auth,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});