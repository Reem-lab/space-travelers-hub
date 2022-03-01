import { useEffect, useState } from 'react';
import '../style/Missions.css';
import Mission from './Mission';

const Missions = () => {
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.spacexdata.com/v3/missions');
      const data = await response.json();
      setMissions(data);
    }
    fetchData();
  }, []);

  console.log('missions: ', missions[0]);

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
