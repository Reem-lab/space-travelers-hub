export const SET_MISSIONS = 'SET_MISSIONS';
export const TOGGLE_MISSION = 'TOGGLE_MISSION';

export const setMissionsAction = (missions) => ({
  type: SET_MISSIONS,
  missions,
});

export const toggleMissionStatusAction = (id) => ({
  type: TOGGLE_MISSION,
  id,
});
