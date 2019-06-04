export const newContact = contact => {
  return (dispatch, { getFirebase, getFirestore }) => {
    // get async call to database
    const firestore = getFirestore();
    firestore
      .collection('contact-submissions')
      .add({
        ...contact,
        dateSubmitted: new Date()
      })
      .then(() => {
        dispatch({
          type: 'NEW_CONTACT',
          contact
        });
      })
      .catch(err => {
        dispatch({
          type: 'NEW_CONTACT_ERR',
          err
        });
      });
  };
};
