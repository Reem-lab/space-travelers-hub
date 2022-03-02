import { DISPLAY_DRAGONS, TOGGLE_DRAGON_RESERVATION } from '../actions/dragonsActions';

const initialState = [];

const dragonsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DISPLAY_DRAGONS:
      return [...state, ...action.dragons];
    case TOGGLE_DRAGON_RESERVATION:
      return state.map((dragon) => {
        if (dragon.id !== action.id) {
          return dragon;
        }
        return { ...dragon, reserved: !dragon.reserved };
      });
    default:
      return state;
  }
};

export default dragonsReducer;
