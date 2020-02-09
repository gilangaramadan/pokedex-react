/**
 * Created by gilangaramadan on 17-12-17.
 */

import React, { Component } from 'react';
import Pokemon from './Pokemon';
import PokemonTypeList from './PokemonTypeList';
import FilterContainer from './FilterContainer';

// The PokemonList component shows nothing when it mounts for the first time.
// But right before it mounts on to the DOM, it makes an
// API call to fetch the first 151 Pokemon from the API and
// then displays them using the Pokemon Component

export default class PokemonList extends Component {
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

  getByTypes = (type) => {
    this.setState({ loading: true });
    fetch(`${PokemonList.API_URL}/type/${type}`)
      .then(d => d.json())
      .then((response) => {
        this.setState({
          species: response.pokemon.map(x => x.pokemon),
          loading: false,
          fetched: true,
        });
      });
  };

  static API_URL = 'http://pokeapi.salestock.net/api/v2';

  render() {
    const { fetched, loading, species } = this.state;

    let content;
    if (fetched) {
      content = species.map((pokemon) => {
        const tokens = pokemon.url.split('/');
        const id = parseInt(tokens[tokens.length - 2], 10);
        return <Pokemon key={pokemon.name} id={id} pokemon={pokemon} />;
      });
    } else if (loading && !fetched) {
      content = (
        <div className="spinner">
          <div className="double-bounce1" />
          <div className="double-bounce2" />
        </div>
      );
    } else {
      content = <div />;
    }
    return (
      <div>
        <div className="row center-xs">
          <FilterContainer>
            <PokemonTypeList getbytype={this.getByTypes} />
          </FilterContainer>
          {content}
        </div>
      </div>
    );
  }
}
