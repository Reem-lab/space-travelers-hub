import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const basicURL = 'https://api.spacexdata.com/v3/dragons';

const printAPIFetch = (data) => {
  console.log(data);
};

const getDragons = () => {
  fetch(basicURL)
    .then((resolve) => resolve.json())
    .then((data) => {
      printAPIFetch(data);
    });
};

const Dragons = () => {
  const exclamation = '!';
  return (
    <>
      <h2>
        Hello from  Dragons
        {exclamation}
      </h2>
      <Button
        variant="primary"
        type="button"
        onClick={() => {
          getDragons();
        }}
        value="fetch"
      >
        Fetch
      </Button>
    </>
  );
};

export default Dragons;
