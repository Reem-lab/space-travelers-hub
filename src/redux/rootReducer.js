import { combineReducers } from 'redux';
import missionsReducer from './reducers/missionsReducer';
import RocketsReducer from './reducers/RocketsReducer';
import dragonsReducer from './reducers/dragonsReducer';

const rootReducer = combineReducers({
  missions: missionsReducer,
  RocketsReducer,
  dragons: dragonsReducer,
});

export default rootReducer;
