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
  constructor(props) {
    super(props);
    this.state = {
      species: [],
      fetched: false,
      loading: false,
    };
  }
  componentDidMount() {
    // this.setState({
    //   loading: true,
    // });
    fetch('http://pokeapi.salestock.net/api/v2/pokemon?limit=151')
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        this.setState({
          species: response.results,
          loading: true,
          fetched: true,
        });
      });
  }

  render() {
    const { fetched, loading, species } = this.state;
    let content;
    if (fetched) {
      content = <div className="pokemon--species--list">{species.map((pokemon, index) => <Pokemon key={pokemon.name} id={index + 1} pokemon={pokemon} />)}</div>;
    } else if (loading && !fetched) {
      content = <p> Loading ...</p>;
    } else {
      content = <div />;
    }
    return (
      <div>
        {content}
      </div>
    );
  }
}
