export const SET_MISSIONS = 'SET_MISSIONS';
export const TOGGLE_MISSION_TRUE = 'TOGGLE_MISSION_TRUE';
export const TOGGLE_MISSION_FALSE = 'TOGGLE_MISSION_FALSE';
export const SELECT_MISSION = 'SELECT_MISSION';

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

export const toggleMissionTrue = (id) => ({
  type: TOGGLE_MISSION_TRUE,
  id,
});

export const toggleMissionFalse = (id) => ({
  type: TOGGLE_MISSION_FALSE,
  id,
});
