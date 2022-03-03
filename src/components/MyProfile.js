import { useSelector } from 'react-redux';
import '../style/MyProfile.css';

const MyProfile = () => {
  const missions = useSelector((state) => {
    const { missions } = state;
    return missions.filter((missions) => missions.reserved);
  });
  const rockets = useSelector((state) => {
    const { RocketsReducer } = state;
    return RocketsReducer.filter((rockets) => rockets.reserved);
  });
  const dragons = useSelector((state) => {
    const { dragons } = state;
    return dragons.filter((dragons) => dragons.reserved);
  });

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
        {missions.map((mission) => (
          <div key={mission.mission_name}>
            <p>{mission.mission_name}</p>
          </div>
        ))}
      </div>
      <div className="my-profile__dragons">
        <h2>My Dragons</h2>
        {dragons.map((dragon) => (
          <div key={dragon.id}>
            <p>{dragon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MyProfile;
