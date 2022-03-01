import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/actions/missionsActions';
import '../style/Missions.css';
import Mission from './Mission';

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  const missions = useSelector((state) => state.missions);

  console.log('MISSIONS STATE: ', missions);

  return (
    <>
      <div className="headers-container">
        <div className="column-mission">Mission</div>
        <div className="column-description">Description</div>
        <div className="column-status">Status</div>
        <div className="column-status-2">Status2 </div>
      </div>
      {missions.map((mission) => (
        <Mission
          key={mission.mission_id}
          name={mission.mission_name}
          description={mission.description}
        />
      ))}
    </>
  );
};

export default Missions;
