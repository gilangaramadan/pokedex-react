/**
 * Created by gilangaramadan on 18-12-17.
 */

import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderTitle from '../components/HeaderTitle';
import SearchPokemon from '../components/SearchPokemon';

const App = (props) => {
  return (
    <div className="container">
      <HeaderTitle />
      <Route exact path="/" component={SearchPokemon} />
      {props.children}
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
