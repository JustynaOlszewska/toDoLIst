import { combineReducers } from 'redux';
import fetchReducer from './fetchReducer';
import alertReducer from './alertReducer';
import formReducer from './formReducer';

export default combineReducers({ fetchReducer, alertReducer, formReducer });
