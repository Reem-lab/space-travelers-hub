export const SET_MISSIONS = 'SET_MISSIONS';

export const setMissions = (missions) => ({
  type: SET_MISSIONS,
  missions,
});

export const fetchMissions = () => (dispatch) => {
  fetch('https://api.spacexdata.com/v3/missions')
    .then((response) => response.json())
    .then((data) => dispatch(setMissions(data)))
    .catch((error) => console.log(error));
};
