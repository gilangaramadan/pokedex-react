/**
 * Created by gilangaramadan on 17-12-17.
 */

import React from 'react';
import PropTypes from 'prop-types';

// Button to show list of available type

const ButtonType = (props) => {
  const { type } = props;

  return (
    <div className="button" id={type}>
      {type}
    </div>

  );
};

ButtonType.propTypes = {
  type: PropTypes.string,
};

ButtonType.defaultProps = {
  type: '',
};

export default ButtonType;
