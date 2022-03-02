import { SET_MISSIONS, TOGGLE_MISSION_TRUE, TOGGLE_MISSION_FALSE } from '../actions/missionsActions';

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_MISSIONS:
      return [...state, ...action.missions];
    case TOGGLE_MISSION_TRUE:
      return state.map((mission) => {
        if (mission.mission_id !== action.id) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
    case TOGGLE_MISSION_FALSE:
      return state.map((mission) => {
        if (mission.mission_id !== action.id) {
          return mission;
        }
        return { ...mission, reserved: false };
      });
    default:
      return state;
  }
};

export default missionsReducer;
