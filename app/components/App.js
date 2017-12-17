/**
 * Created by gilangaramadan on 17-12-17.
 */

import React, { Component } from 'react';
import PokemonList from './PokemonList';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  componentWillMount() {
  }
  render() {
    return (
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12 col-md-6">
            <div className="align-center">
              <h1 className="text-huge text-with-subtitle">
                      Pokèdex <span className="text-small text-gray">v 1.0.0</span>
              </h1>
              <h2 className="text-medium">
                      An index of Pokèmon built as a client-side ReactJS webapp.
              </h2>
            </div>
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xs-12 col-md-6">
            <div className="input input-with-icon full-width">
              <input id="search" placeholder="Search your Pokèmon" type="text" />
              <button className="input-icon fa fa-search fa-lg" />
            </div>
          </div>
        </div>

        <PokemonList />

      </div>
    );
  }
}

export default App;
