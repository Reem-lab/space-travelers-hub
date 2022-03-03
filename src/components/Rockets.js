import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayRockets, toggleRocket } from '../redux/actions/RocketsActions';
import '../style/Rockets.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.RocketsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(displayRockets());
    }
  }, []);

  const toggleReservedBtn = (id) => {
    dispatch(toggleRocket(id));
  };

  return (
    <div className="container">
      {
      !rockets.length ? (
        <div className="heading">No Rockets Found ❗❕</div>
      ) : (
        rockets.map((rocket) => (
          <div key={rocket.id} className="panel">
            <div className="image-container">
              <img className="img" data-testid="img" src={rocket.flickr_images} alt={rocket.rocket_name} />
            </div>
            <div className="info">
              <h2>{rocket.rocket_name}</h2>
              <p className="para">
                <span className={(rocket.reserved ? 'reserved' : 'cancel')}>{(rocket.reserved ? 'Reserved' : ' ') }</span>
                {rocket.description}
              </p>
              <button className={(!rocket.reserved ? 'reserveBtn' : 'cancelBtn')} type="button" onClick={() => toggleReservedBtn(rocket.id)}>{(!rocket.reserved ? 'Reserve Rockets' : 'Cancel Reservation') }</button>
            </div>
          </div>
        )))
      }
    </div>
  );
};

export default Rockets;
