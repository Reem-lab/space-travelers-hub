import { DISPLAY_DRAGONS } from '../actions/dragonsActions';

const initialState = [];

const dragonsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DISPLAY_DRAGONS:
      return [...state, ...action.dragons];
    default:
      console.log('Dispatched action has no matching case');
      return state;
  }
};

export default dragonsReducer;
