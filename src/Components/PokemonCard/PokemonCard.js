import React from "react";
import {
  Card,
  PokemonName,
  PokemonType,
  EvolveButton,
  pokemonImg
} from "./styles";

const PokemonCard = ({ poke, setPoke }) => {
  const evoluirPokemon = () => {
    setPoke({
      ...poke,
      name: "Pikachu",
      type: "Electric",
      evolved: true,
      weight: 6,
      color: "orange",
      image:
        "https://archives.bulbagarden.net/media/upload/2/25/025Pikachu_Channel_3.png",
      id: 1
    });
  };

  return (
    <Card color={poke.color}>
      <img src={poke.image} alt={`Pokemon`} />
      <PokemonName>{poke.nome}</PokemonName>
      <PokemonType>{poke.type}</PokemonType>
      <p>{poke.weight}kg</p>

      <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  );
};

export default PokemonCard;
