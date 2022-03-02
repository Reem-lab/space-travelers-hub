import { LOAD_ROCKETS, TOGGLE_ROCKET } from '../actions/RocketsActions';

const initialState = [];

const RocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ROCKETS:
      return action.payload;

    case TOGGLE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: !rocket.reserved };
      });

    default:
      return state;
  }
};

export default RocketsReducer;
