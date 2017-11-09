import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { startListeningToAuthChanges } from './actions/authentication';
import startListeningForCurrentUser from './actions/current-user';
import { startListeningForUserProfileChanges } from './actions/profile';
import { startListeningForUserProfileImageChanges } from './actions/user-profile-image';
import startListeningForAppUsers from './actions/app-users';
import { startListeningForProfileSocialMediaLinkChanges } from './actions/profile-social-media-links';
import startListeningForProfileChanges from './actions/app-profiles';
import startListeningForDoWhopDescriptions from './actions/dowhop-descriptions';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )
);
/* eslint-enable */

store.dispatch(startListeningToAuthChanges());
store.dispatch(startListeningForCurrentUser());
store.dispatch(startListeningForUserProfileChanges());
store.dispatch(startListeningForAppUsers());
store.dispatch(startListeningForUserProfileImageChanges());
store.dispatch(startListeningForProfileSocialMediaLinkChanges());
store.dispatch(startListeningForProfileChanges());
store.dispatch(startListeningForDoWhopDescriptions());

export default store;
