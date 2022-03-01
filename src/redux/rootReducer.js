import { combineReducers } from 'redux';
import missionsReducer from './reducers/missionsReducer';

const rootReducer = combineReducers({
  missions: missionsReducer,
});

export default rootReducer;
