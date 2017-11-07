// @flow

import { auth, database } from '../../firebase';
import { ADD_CURRENT_USER, REMOVE_CURRENT_USER } from './actions';

// TODO
// add action REMOVE_CURRENT_USER on logout
const addCurrentUser = user => ({
  type: ADD_CURRENT_USER,
  displayName: user.displayName,
  uid: user.uid,
  email: user.email,
  photoURL: user.photoURL,
  isAdmin: user.isAdmin
});

const removeCurrentUser = () => ({
  type: REMOVE_CURRENT_USER
});

const startListeningForCurrentUser = () => (dispatch: Function) => {
  auth.onAuthStateChanged(user => {
    if (user) {
      const userRef = database.ref('app_users').child(user.uid);
      userRef.on('value', snapshot => {
        if (snapshot.val()) dispatch(addCurrentUser(snapshot.val()));
      });
    } else {
      dispatch(removeCurrentUser());
    }
  });
};

export default startListeningForCurrentUser;
