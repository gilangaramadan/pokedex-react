/**
 * Created by gilangaramadan on 17-12-17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// The Pokemon component will show an individual Pokemon monster
// It shows an image of the Pokemon and
// shows the name of it as well.

const Pokemon = (props) => {
  const { pokemon, id } = props;
  const img = require(`../assets/images/sprites/${id}.png`);

  return (

    <div className="col-xs-6 col-md-2">
      <Link to={`pokemon/details/${id}`}>
        <div className="box card">
          <div className="card-image">
            <img src={img} alt={pokemon.name} />
          </div>
          <div className="text-small text-gray pokemon-name"> {pokemon.name} </div>
        </div>
      </Link>
    </div>

  );
};

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }),
  id: PropTypes.number,
};

Pokemon.defaultProps = {
  pokemon: {},
  id: null,
};

export default Pokemon;
