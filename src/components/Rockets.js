import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayRockets } from '../redux/actions/RocketsActions';
import '../style/Rockets.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.RocketsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayRockets());
  }, []);

  return (
    <div className="container">
      {
      !rockets.length ? (
        <div className="heading">No Rockets Found ❗❕</div>
      ) : (
        rockets.map((rocket) => (
          <div key={rocket.id} className="panel">
            <div className="image-container">
              <img className="img" src={rocket.flickr_images} alt={rocket.rocket_name} />
            </div>
            <div className="info">
              <h2>{rocket.rocket_name}</h2>
              <p className="para">{rocket.description}</p>
              <button className="reserveBtn" type="button">Reserve Rockets</button>
            </div>
          </div>
        )))
        }
    </div>
  );
};

export default Rockets;
