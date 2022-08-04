import { useEffect, useState } from 'react';
import { Searcher } from './components/Searcher';
import { PokemonList } from './components/PokemonList';
import { Col } from 'antd';

import { getAllPokemons } from './api/pokeapi';
import { POKEMON_LIST_MOCK } from './data/pokemonMock';

import logo from './statics/logo.svg';
import './App.css';

function App() {
  const [ isLoading, setIsLoading ] = useState(true);
  const [Pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const pokemonsData = async () => { 
      const data = await getAllPokemons();

      setPokemons(data);
      setIsLoading(false);
    }

    pokemonsData();
  }, [])
  

  return (
    <div className="App">
      <Col span={ 4 } offset={ 10 }>
        <img src={ logo } alt="Pokedux" />
      </Col>
      <Col span={ 8 } offset={ 8 } >
        <Searcher />
      </Col>
      {
        isLoading ? <span>Loading...</span> : <PokemonList pokemons={ Pokemons } />  
      }           
    </div>
  );
}

export default App;
