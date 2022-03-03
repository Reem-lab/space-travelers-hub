import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import setMissions from '../redux/api/missionsAPIHelper';
import { toggleMissionStatusAction } from '../redux/actions/missionsActions';
import '../style/Missions.css';
import Mission from './Mission';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(setMissions());
    }
  }, []);

  const setMission = (id) => {
    dispatch(toggleMissionStatusAction(id));
  };

  return (

    <table>
      <thead>
        <tr>
          <th className="column-mission">Mission</th>
          <th className="column-description">Description</th>
          <th className="column-status">Status</th>
          <th className="column-status">_</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <Mission
            key={mission.mission_id}
            name={mission.mission_name}
            description={mission.description}
            id={mission.mission_id}
            toggleMission={setMission}
            reserved={mission.reserved}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Missions;
