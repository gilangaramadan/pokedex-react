/**
 * Created by gilangaramadan on 17-12-17.
 */

import React from 'react';
import PropTypes from 'prop-types';

// Button to show list of available type

const ButtonType = (props) => {
  const { type, onClick } = props;

  return (
    <div className={`button ${type}`} id={type} onKeyDown={() => {}} onClick={onClick} role="presentation">
      {type}
    </div>

  );
};

ButtonType.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
};

ButtonType.defaultProps = {
  type: '',
  onClick: () => {},
};

export default ButtonType;
