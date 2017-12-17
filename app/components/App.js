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
      <div className="pokeapp">
        <h1>Pokedex</h1>
        <PokemonList />
      </div>
    );
  }
}

export default App;
