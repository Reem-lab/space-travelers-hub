import { SET_MISSIONS } from '../actions/missionsActions';

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_MISSIONS:
      return action.missions;
    default:
      return state;
  }
};

export default missionsReducer;
