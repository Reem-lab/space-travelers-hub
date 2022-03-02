import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({
  name, description, id, toggleMissionTrue, toggleMissionFalse, reserved,
}) => {
  console.log('Hello from Missions');

  return (
    <tr>
      <td className="column-mission">{name}</td>
      <td className="column-description">{description}</td>
      {!reserved && (
        <>
          <td className="column-status"><span className="mission-not-member">Not A Member</span></td>
          <td className="column-status-2">
            <button type="submit" className="mission-button" onClick={() => toggleMissionTrue(id)}>
              Join Mission
            </button>
          </td>
        </>
      )}
      {reserved && (
        <>
          <td className="column-status"><span className="mission-member">Active Member</span></td>
          <td className="column-status">
            <button type="button" className="mission-cancel" onClick={() => toggleMissionFalse(id)}>
              Cancel
            </button>
          </td>
        </>
      )}
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
  toggleMissionTrue: PropTypes.func.isRequired,
  toggleMissionFalse: PropTypes.func.isRequired,
  reserved: PropTypes.bool,
};

export default React.memo(Mission);
