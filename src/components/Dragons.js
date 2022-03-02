import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dragon from './Dragon';
import { fetchDragons } from '../redux/actions/dragonsActions';

const Dragons = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDragons());
  }, []);

  const dragons = useSelector((state) => state.dragons);

  return (
    <>
      <h2>
        Hello from  Dragons
      </h2>
      <Button
        variant="primary"
        type="button"
        onClick={() => {
          dispatch(fetchDragons());
        }}
        value="fetch"
      >
        Fetch
      </Button>
      <hr />
      <Container fluid className="d-flex flex-wrap p-0">
        {dragons.map((dragon) => (
          <Dragon
            dragon={dragon}
            key={dragon.id}
          />
        ))}
      </Container>
    </>
  );
};

export default Dragons;
