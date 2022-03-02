import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, toggleMissionTrue, toggleMissionFalse } from '../redux/actions/missionsActions';
import '../style/Missions.css';
import Mission from './Mission';

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  const setMissionTrue = (id) => {
    dispatch(toggleMissionTrue(id));
  };

  const setMissionFalse = (id) => {
    dispatch(toggleMissionFalse(id));
  };

  const missions = useSelector((state) => state.missions);

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
            toggleMissionTrue={setMissionTrue}
            toggleMissionFalse={setMissionFalse}
            reserved={mission.reserved}
          />
        ))}
      </tbody>
    </table>
  );
};

export default React.memo(Missions);
