import { useSelector } from 'react-redux';
import '../style/MyProfile.css';

const MyProfile = () => {
  const myMissions = useSelector((state) => state.missions);
  const myDragons = useSelector((state) => state.dragons);
  console.log(myDragons);

  return (
    <div className="my-profile__container">
      <div className="my-profile__rockets">
        <h2>My Rockets</h2>
      </div>
      <div className="my-profile__missions">
        <h2>My Missions</h2>
        {myMissions.map((mission) => (
          mission.reserved && (
            <div key={mission.mission_name}>
              <p>{mission.mission_name}</p>
            </div>
          )
        ))}
      </div>
      <div className="my-profile__dragons">
        <h2>My Dragons</h2>
        {myDragons.map((dragon) => (
          dragon.reserved && (
            <div key={dragon.id}>
              <p>{dragon.name}</p>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default MyProfile;
