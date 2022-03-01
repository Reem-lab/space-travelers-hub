import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const Mission = ({ name, description }) => (
  <div className="mission-container ">
    <div className="column-mission">{name}</div>
    <div className="column-description">{description}</div>
    <div className="column-status"><span>Member</span></div>
    <div className="column-status-2"><span>Mission</span></div>
  </div>
);

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
