import React from 'react'
import { PokemonCard } from './PokemonCard';

import '../styles/PokemonList.css';

export const PokemonList = ( { pokemons } ) => {
  console.log(pokemons);
  return (
    <div className='PokemonList'>
        {
            pokemons.map(pokemon => (
                <PokemonCard pokemon={ pokemon } key={ pokemon.name }/>
            ))
        }
    </div>
  )
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill(''),
}
