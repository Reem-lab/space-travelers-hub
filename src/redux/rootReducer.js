import { combineReducers } from 'redux';
import missionsReducer from './reducers/missionsReducer';
import RocketsReducer from './reducers/RocketsReducer';

const rootReducer = combineReducers({
  missions: missionsReducer,
  RocketsReducer,
});

export default rootReducer;
