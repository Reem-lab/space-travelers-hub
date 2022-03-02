import { LOAD_ROCKETS } from '../actions/RocketsActions';

const initialState = [];
const RocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ROCKETS:
      return action.payload;
    default:
      return state;
  }
};

export default RocketsReducer;
