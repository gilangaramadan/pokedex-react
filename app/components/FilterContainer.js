/**
 * Created by gilangaramadan on 18-12-17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import img from '../assets/images/logo-icon.png';

// Container for button of types

const FilterContainer = (props) => {
  return (
    <div className="filter-container">
      <div style={{ marginBottom: '10px' }}>
        <img src={img} alt="pokemon-logo" style={{ verticalAlign: 'middle', marginBottom: '0.75em' }} /> <span className="filter-text text-medium">Filter by type</span>
      </div>
      <div className="border-bottom" />
      {props.children}
      <div className="border-bottom" />
    </div>

  );
};

FilterContainer.propTypes = {
  children: PropTypes.node,
};

FilterContainer.defaultProps = {
  children: {},
};

export default FilterContainer;
