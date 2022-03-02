import { SET_MISSIONS, TOGGLE_MISSION } from '../actions/missionsActions';

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_MISSIONS:
      return [...state, ...action.missions];
    case TOGGLE_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.id) {
          return mission;
        }
        return { ...mission, reserved: !mission.reserved };
      });
    default:
      return state;
  }
};

export default missionsReducer;
