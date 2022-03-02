import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({
  name, description, id, toggleMission, reserved,
}) => {
  console.log('Hello from Missions');

  return (
    <tr>
      <td className="column-mission">{name}</td>
      <td className="column-description">{description}</td>
      <td className="column-status">
        <span className={!reserved ? 'mission-not-member' : 'mission-member'}>
          {!reserved ? 'NOT A MEMBER' : 'MEMBER'}
        </span>
      </td>
      <td className="column-status-2">
        <button
          type="submit"
          className={!reserved ? 'mission-join' : 'mission-leave'}
          onClick={() => toggleMission(id)}
        >
          {(reserved) ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
};

Mission.defaultProps = {
  reserved: null,
};

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  toggleMission: PropTypes.func.isRequired,
  reserved: PropTypes.bool,
};

export default Mission;
