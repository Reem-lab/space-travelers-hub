import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

import { MDBContainer } from 'mdbreact';

const Dragon = () => {
  const questionmark = '?';

  return (

    <Row>
      <Col sm={3} className="d-flex align-items-center p-0">
        <Card.Img src="https://i.imgur.com/9fWdwNv.jpg" />
      </Col>
      <Col sm={8} className="d-flex flex-column align-items-start">
        <Card.Title>Dragon 1</Card.Title>
        <Alert>Reserved</Alert>
        <MDBContainer className="p-0">
          <Card.Text className="text-left">
            Dragon is a reusable spacecraft developed by SpaceX, an American private
            space transportation company based in Hawthorne, California. Dragon is launched
            into space by the SpaceX Falcon 9 two-stage-to-orbit launch vehicle. The Dragon
            spacecraft was originally designed for human travel, but so far has only been used
            to deliver cargo to the International Space Station (ISS).
          </Card.Text>
        </MDBContainer>
        <Button>
          Reserve Dragon
          {questionmark}
        </Button>
      </Col>
      <hr />
    </Row>
  );
};

export default Dragon;
