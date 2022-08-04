import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Searcher } from './components/Searcher';
import { PokemonList } from './components/PokemonList';
import { Col } from 'antd';

import { getAllPokemons } from './api/pokeapi';
import { setPokemons } from './actions/index';

import logo from './statics/logo.svg';
import './App.css';

function App() {
  const [ isLoading, setIsLoading ] = useState(true);
  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  useEffect( () => {
    const getPokemons = async () => { 
      const data = await getAllPokemons();

      dispatch(setPokemons(data));
      setIsLoading(false);
    }
    
    getPokemons();
  }, [] )
  

  return (
    <div className="App">
      <Col span={ 4 } offset={ 10 }>
        <img src={ logo } alt="Pokedux" />
      </Col>
      <Col span={ 8 } offset={ 8 } >
        <Searcher />
      </Col>
      {
        isLoading ? <span>Loading...</span> : <PokemonList pokemons={ pokemons } />  
      }           
    </div>
  );
}

export default App;
