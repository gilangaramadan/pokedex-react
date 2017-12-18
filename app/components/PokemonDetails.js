/**
 * Created by gilangaramadan on 17-12-17.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PokemonCardDetails from './PokemonCardDetails';

export default class PokemonDetails extends Component {
    static API_URL = 'http://pokeapi.salestock.net/api/v2';

    static defaultProps = {
      match: {
        isExact: true,
        params: {},
        path: '',
        url: '',
      },
    };

    static propTypes = {
      match: PropTypes.shape({
        isExact: PropTypes.bool,
        params: PropTypes.shape({
          id: PropTypes.string,
        }),
        path: PropTypes.string,
        url: PropTypes.string,
      }),
    };

    state = {
      monster: [],
      fetched: false,
      loading: true,
    };

    componentDidMount() {
      this.getDetailPokemon(this.props.match.params.id);
    }

    getDetailPokemon(id) {
      fetch(`${PokemonDetails.API_URL}/pokemon/${id}`)
        .then(res => res.json())
        .then((response) => {
          this.setState({
            monster: response,
            loading: true,
            fetched: true,
          });
        });
    }

    render() {
      const { fetched, loading, monster } = this.state;

      let content;
      if (fetched) {
        content = <PokemonCardDetails pokemon={monster} />;
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