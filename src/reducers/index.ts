import { combineReducers } from 'redux';
import taskReducer from './taskReducer/taskReducer';
import alertReducer from './alertReducer/alertReducer';
import formReducer from './formReducer/formReducer';

export default combineReducers({ taskReducer, alertReducer, formReducer });
