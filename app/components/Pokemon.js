/**
 * Created by gilangaramadan on 17-12-17.
 */

import React from 'react';
import PropTypes from 'prop-types';

// The Pokemon component will show an individual Pokemon monster
// It shows an image of the Pokemon and
// shows the name of it as well.

const Pokemon = (props) => {
  const { pokemon, id } = props;

  const img = require(`../assets/images/sprites/${id}.png`);

  return (
    <div className="pokemon--species">
      <div className="pokemon--species--container">
        <div className="pokemon--species--sprite">
          <img src={img} alt="Pokemon" />
        </div>
        <div className="pokemon--species--name"> {pokemon.name} </div>
      </div>
    </div>
  );
};

Pokemon.propTypes = {
  pokemon: PropTypes.objectOf(),
  id: PropTypes.number,
};

Pokemon.defaultProps = {
  pokemon: {},
  id: 0,
};

export default Pokemon;
