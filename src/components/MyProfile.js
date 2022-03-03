import { useSelector } from 'react-redux';
import '../style/MyProfile.css';

const MyProfile = () => {
  const myMissions = useSelector((state) => state.missions);
  const myDragons = useSelector((state) => state.dragons);
  const rockets = useSelector((state) => state.RocketsReducer);

  return (
    <div className="my-profile__container">
      <div className="my-profile__rockets">
        <h2>My Rockets</h2>
        {rockets.map((rocket) => (
          rocket.reserved && (
            <div key={rocket.id}>
              <p>{rocket.rocket_name}</p>
            </div>
          )
        ))}
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
        {myDragons.filter((dragon) => dragon.reserved === true).map((dragon) => (
          <div key={dragon.id}>
            <p>{dragon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProfile;
