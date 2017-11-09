// @flow

import { database, auth } from '../../firebase';
// import { ADD_DOWHOP_DESCRIPTION, UPDATE_DOWHOP_DESCRIPTION, REMOVE_DOWHOP_DESCRIPTION } from './actions';
import { ADD_DOWHOP_DESCRIPTION } from './actions';

const doWhopDescriptionsRef = database.ref('DoWhopDescriptions');

// const cleanDowhopDescriptions = () => {
//   doWhopDescriptionsRef
//     .once('value')
//     .then(snapshot => {
//       snapshot.forEach(childSnapshot => {
//         const childKey = childSnapshot.key;
//         const childData = childSnapshot.val();
//         const doWhopDescriptionRef = doWhopDescriptionsRef.child(childKey);
//         // Delete desc without pushKey
//         if (childKey === 'null' || childKey === 'undefined') doWhopDescriptionRef.remove();
//         // Delete desc without pushkey value - These are reviews only desc
//         if (typeof childData.doWhopDescriptionKey === 'undefined') doWhopDescriptionRef.remove();
//         // Write default summer date if no date is present
//         if (typeof childData.createdAt === 'undefined') doWhopDescriptionRef.update({ createdAt: '2017-06-08--12:00' });
//       });
//     })
//     .catch(error => console.log('DOWHOPDESCRIPTION CLEAN UP ERROR ', error));
// };

const addDoWhopDescription = dowhopDescriptions => ({
  type: ADD_DOWHOP_DESCRIPTION,
  payload: dowhopDescriptions
});

// const updateDoWhopDescription = changeDoWhopDescription => ({
//   type: UPDATE_DOWHOP_DESCRIPTION,
//   payload: changeDoWhopDescription,
//   metadata: changeDoWhopDescription.dowhopDescriptionKey
// });

// const removeDoWhopDescription = changeDoWhopDescription => ({
//   type: REMOVE_DOWHOP_DESCRIPTION,
//   payload: changeDoWhopDescription,
//   metadata: changeDoWhopDescription.dowhopDescriptionKey
// });

const startListeningForDoWhopDescriptions = () => (dispatch: Function) => {
  auth.onAuthStateChanged(user => {
    if (user) {
      // cleanDowhopDescriptions();
      doWhopDescriptionsRef.on('child_added', snapshot => dispatch(addDoWhopDescription(snapshot.val())));
      // doWhopDescriptionRef.on('child_changed', snapshot => dispatch(updateDoWhopDescription(snapshot.val())));
      // doWhopDescriptionRef.on('child_removed', snapshot => dispatch(removeDoWhopDescription(snapshot.val())));
    }
  });
};

export default startListeningForDoWhopDescriptions;
