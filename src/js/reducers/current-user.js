// @flow

import { ADD_CURRENT_USER, REMOVE_CURRENT_USER } from '../actions/actions';

export default function currentUserReducer(state: Object = {}, action: Object) {
  switch (action.type) {
    case ADD_CURRENT_USER:
      return {
        displayName: action.displayName,
        uid: action.uid,
        email: action.email,
        photoURL: action.photoURL,
        isAdmin: action.isAdmin
      };
    case REMOVE_CURRENT_USER:
      return {
        displayName: '',
        uid: '',
        email: '',
        photoURL: '',
        isAdmin: ''
      };
    default:
      return state;
  }
}
