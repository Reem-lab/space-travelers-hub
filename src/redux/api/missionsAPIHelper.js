import { setMissionsAction } from '../actions/missionsActions';

const getAPIData = async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const missions = await response.json();
  const mappedMissions = [];
  missions.forEach((element) => {
    mappedMissions.push({
      mission_name: element.mission_name,
      mission_id: element.mission_id,
      description: element.description,
      reserved: false,
    });
  });
  return mappedMissions;
};

const setMissions = () => async (dispatch) => {
  const missions = await getAPIData();
  dispatch(setMissionsAction(missions));
};

export default setMissions;
