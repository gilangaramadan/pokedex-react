/**
 * Created by gilangaramadan on 18-12-17.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/Pokédex_logo.png';

const HeaderTitle = () => {
  return (
    <div className="row center-xs">
      <div className="col-xs-12 col-md-6">
        <div className="align-center">
          <div className="text-with-subtitle">
            <Link to="/">
              <img src={img} alt="Pokedex Logo" style={{ width: '50%' }} />{' '}
              <span className="text-small text-gray">v 1.0.0</span>
            </Link>
          </div>
          <h2 className="text-medium">
            An index of Pokémon built as a client-side ReactJS webapp.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeaderTitle;
