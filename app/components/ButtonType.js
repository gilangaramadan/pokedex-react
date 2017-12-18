/**
 * Created by gilangaramadan on 17-12-17.
 */

import React from 'react';
import PropTypes from 'prop-types';

// The Pokemon component will show an individual Pokemon monster
// It shows an image of the Pokemon and
// shows the name of it as well.

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
