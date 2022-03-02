export const DISPLAY_DRAGONS = 'space-travelers-hub/dragons/DISPLAY_DRAGONS';

const basicURL = 'https://api.spacexdata.com/v3/dragons';

export const displayFetchedDragons = (dragons) => ({
  type: DISPLAY_DRAGONS,
  dragons,
});

const printAPIFetch = (data) => {
  console.log(data);
};

export const fetchDragons = () => (dispatch) => {
  fetch(basicURL)
    .then((resolve) => resolve.json())
    .then((data) => {
      dispatch(displayFetchedDragons(data));
      printAPIFetch(data);
    })
    .catch((error) => console.log(error));
};
