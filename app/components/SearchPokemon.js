/**
 * Created by gilangaramadan on 18-12-17.
 */

import React from 'react';

const SearchPokemon = () => {
  return (
    <div className="row center-xs">
      <div className="col-xs-12 col-md-6">
        <div className="input input-with-icon full-width">
          <input id="search" placeholder="Search your Pokèmon" type="text" />
          <button className="input-icon fa fa-search fa-lg" />
        </div>
      </div>
    </div>
  );
};

export default SearchPokemon;
