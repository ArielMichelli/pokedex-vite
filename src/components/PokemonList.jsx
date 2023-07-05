import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { CardPokemon } from "./CardPokemon";
import { Loader } from "./Loader";

export const PokemonList = () => {
  const { allPokemons, loading, filteredPokemons } = useContext(PokemonContext);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="card-list-pokemon container">
          {filteredPokemons.length ? (
            <>
              {filteredPokemons.map((poke) => (
                <CardPokemon pokemon={poke} key={poke.id} />
              ))}
            </>
          ) : (
            <>
              {allPokemons.map((poke) => (
                <CardPokemon pokemon={poke} key={poke.id} />
              ))}
            </>
          )}
        </div>
      )}
    </>
  );
};
