export const SET_MISSIONS = 'SET_MISSIONS';

export const setFetchedMissions = (missions) => ({
  type: SET_MISSIONS,
  missions,
});

export const fetchMissions = () => (dispatch) => {
  fetch('https://api.spacexdata.com/v3/missions')
    .then((response) => response.json())
    .then((data) => dispatch(setFetchedMissions(data)))
    .catch((error) => console.log(error));
};
