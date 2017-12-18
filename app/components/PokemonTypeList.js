/**
 * Created by gilangaramadan on 18-12-17.
 */

import React, { Component } from 'react';
import ButtonType from './ButtonType';

// The PokemonList component shows nothing when it mounts for the first time.
// But right before it mounts on to the DOM, it makes an
// API call to fetch the first 151 Pokemon from the API and
// then displays them using the Pokemon Component

export default class PokemonTypeList extends Component {
  static API_URL = 'http://pokeapi.salestock.net/api/v2';

  state = {
    types: [],
    fetched: false,
    loading: true,
  };

  componentDidMount() {
    this.getAllTypes();
  }

  getAllTypes() {
    fetch(`${PokemonTypeList.API_URL}/type/`)
      .then(d => d.json())
      .then((response) => {
        this.setState({
          types: response.results,
          loading: false,
          fetched: true,
        });
      });
  }

  render() {
    const { fetched, loading, types } = this.state;

    let content;
    if (fetched) {
      content = types.map(type => <ButtonType key={type.name} type={type.name} />);
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
