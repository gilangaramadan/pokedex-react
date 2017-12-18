/**
 * Created by gilangaramadan on 17-12-17.
 */

import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import PokemonDetails from '../components/PokemonDetails';
import PokemonList from '../components/PokemonList';
import App from '../components/App';

const Root = () => {
  return (
    <HashRouter>
      <App>
        <Switch>
          <Route exact path="/" component={PokemonList} />
          <Route path="/pokemon/details/:id" component={PokemonDetails} />
          <Redirect to="/" />
        </Switch>
      </App>
    </HashRouter>
  );
};

export default Root;
