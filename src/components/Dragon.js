import React from 'react';
import propTypes from 'prop-types';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

import { MDBContainer } from 'mdbreact';

const Dragon = (props) => {
  const { dragon } = props;

  return (

    <Row id={dragon.id} className="px-4">
      <Col sm={3} className="d-flex align-items-center p-0">
        <Card.Img src={dragon.flickr_images[0]} />
      </Col>
      <Col sm={9} className="d-flex flex-column align-items-start">
        <Card.Title>
          {dragon.name}
          <span className="mx-4 h6">
            Type:
            {dragon.type}
          </span>
        </Card.Title>
        <MDBContainer className="p-0 flex-1">
          <Card.Text className="text-left">
            <span className="mx-4 h6">Reserved</span>
            {dragon.description}
          </Card.Text>
        </MDBContainer>
        <Button>Reserve Dragon</Button>
      </Col>
      <hr />
    </Row>
  );
};

Dragon.propTypes = {
  dragon: propTypes.objectOf(String).isRequired,
};

export default Dragon;
