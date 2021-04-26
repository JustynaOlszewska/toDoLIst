import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { TaskState } from './reducers/taskReducer/typesTS';
import { AlertState } from './reducers/alertReducer/typesTS';
import { FormState } from './reducers/formReducer/typesTS';

interface IRootState {
  alertReducer: AlertState;
  taskReducer: TaskState;
  formReducer: FormState;
}

const middleware = [thunk];

const store = createStore<IRootState, any, any, any>(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
