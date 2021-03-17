import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import alertReducer from './alertReducer';
import formReducer from './formReducer';

export default combineReducers({ taskReducer, alertReducer, formReducer });
