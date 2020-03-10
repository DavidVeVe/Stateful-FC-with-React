import React from "react";

import "./pokemonDetails.css";

const PokemonDetails = ({ name }) => {
  return (
    <div className="pokemon__details">
      <div className="screen">
        <p className="pokedex__name">Name: {name}</p>
        <img className="pokedex__image" src="" alt="pokemon" />
      </div>
    </div>
  );
};

export default PokemonDetails;
