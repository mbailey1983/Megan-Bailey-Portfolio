import contactReducer from './contactreducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  contact: contactReducer
});

export default rootReducer;
