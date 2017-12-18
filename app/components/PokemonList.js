/**
 * Created by gilangaramadan on 17-12-17.
 */

import React, { Component } from 'react';
import Pokemon from './Pokemon';

// The PokemonList component shows nothing when it mounts for the first time.
// But right before it mounts on to the DOM, it makes an
// API call to fetch the first 151 Pokemon from the API and
// then displays them using the Pokemon Component

export default class PokemonList extends Component {
  static API_URL = 'http://pokeapi.salestock.net/api/v2';

  state = {
    species: [],
    fetched: false,
    loading: true,
  };

  componentDidMount() {
    this.getAllPokemon();
  }

  // This function to get all Pokemon
  getAllPokemon() {
    // TODO: Seems API doesn't give the right format, only 800 items can fetch properly
    fetch(`${PokemonList.API_URL}/pokemon?limit=800`)
      .then(d => d.json())
      .then((response) => {
        this.setState({
          species: response.results,
          loading: false,
          fetched: true,
        });
      });
  }

  render() {
    const { fetched, loading, species } = this.state;
    let content;
    if (fetched) {
      content = species.map((pokemon, index) =>
        <Pokemon key={pokemon.name} id={index + 1} pokemon={pokemon} />);
    } else if (loading && !fetched) {
      content = <div className="spinner"><div className="double-bounce1" /><div className="double-bounce2" /></div>;
    } else {
      content = <div />;
    }
    return (
      <div className="row center-xs">
        {content}
      </div>
    );
  }
}
