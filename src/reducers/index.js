import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import posts from './posts';

export default combineReducers({
  posts,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});