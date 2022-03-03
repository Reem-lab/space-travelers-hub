import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dragon from './Dragon';
import { fetchDragons } from '../redux/actions/dragonsActions';

const Dragons = () => {
  const dispatch = useDispatch();

  const dragons = useSelector((state) => state.dragons);

  useEffect(() => {
    if (dragons.length === 0) {
      dispatch(fetchDragons());
    }
  }, []);

  return (
    <Container fluid className="d-flex flex-wrap p-0 mt-4">
      {dragons.map((dragon) => (
        <Dragon
          dragon={dragon}
          key={dragon.id}
        />
      ))}
    </Container>
  );
};

export default Dragons;
