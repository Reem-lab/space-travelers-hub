export const DISPLAY_DRAGONS = 'space-travelers-hub/dragons/DISPLAY_DRAGONS';
export const TOGGLE_DRAGON_RESERVATION = 'space-travelers-hub/dragons/TOGGLE_DRAGON_RESERVATION';

const basicURL = 'https://api.spacexdata.com/v3/dragons';

export const displayFetchedDragons = (dragons) => ({
  type: DISPLAY_DRAGONS,
  dragons,
});

export const toggleDragonReservation = (id) => ({
  type: TOGGLE_DRAGON_RESERVATION,
  id,
});

export const fetchDragons = () => (dispatch) => {
  fetch(basicURL)
    .then((resolve) => resolve.json())
    .then((data) => {
      dispatch(displayFetchedDragons(data));
    });
};
