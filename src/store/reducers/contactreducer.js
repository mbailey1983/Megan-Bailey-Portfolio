const initialState = {};

const contactReducer = (state = initialState, { type, payload }) => {
  switch (action.type) {
    case 'NEW_CONTACT':
      console.log('Wheeeeeee! It sent!');
      return state;
    case 'NEW_CONTACT_ERR':
      console.log('Error!', action.err);
      return state;
    default:
      return state;
  }
};

export default contactReducer;
