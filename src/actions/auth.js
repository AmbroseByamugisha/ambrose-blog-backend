import * as actions from './actionTypes';

export const signUp = data => async (
    dispatch,
    getState,
    { getFirebase, getFirestore }
  ) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    dispatch({ type: actions.AUTH_START });
    try {
      const res = await firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password);
  
      // Send the verfication email
      const user = firebase.auth().currentUser;
      await user.sendEmailVerification();
  
      await firestore
        .collection('users')
        .doc(res.user.uid)
        .set({
          firstName: data.firstName,
          lastName: data.lastName,
        });
      dispatch({ type: actions.AUTH_SUCCESS });
    } catch (err) {
      dispatch({ type: actions.AUTH_FAIL, payload: err.message });
    }
    dispatch({ type: actions.AUTH_END });
  };