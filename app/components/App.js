/**
 * Created by gilangaramadan on 18-12-17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import HeaderTitle from '../components/HeaderTitle';
import FooterNote from './FooterNote';

const App = (props) => {
  return (
    <div className="container" style={{ marginTop: '50px', paddingBottom: '100px' }}>
      <HeaderTitle />
      {props.children}
      <FooterNote />
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node,
};

App.defaultProps = {
  children: {},
};

export default App;
