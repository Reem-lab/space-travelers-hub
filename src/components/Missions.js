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
            />
          ))}
        </tbody>
      </table>

    </>
  );
};

export default Missions;
