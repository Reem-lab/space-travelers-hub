import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const Mission = ({ name, description }) => (
  <tr>
    <td className="column-mission">{name}</td>
    <td className="column-description">{description}</td>
    <td className="column-status"><span className="member">Not A Member</span></td>
    <td className="column-status-2"><button type="submit" className="mission-button">Join Mission</button></td>
  </tr>
);

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
