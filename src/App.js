import { useEffect, useState } from 'react';
import { Spin } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { Searcher } from './components/Searcher';
import { PokemonList } from './components/PokemonList';
import { Col } from 'antd';

import { getAllPokemons } from './api/pokeapi';
import { getPokemonsWithDetails, setLoading } from './actions/index';

import logo from './statics/logo.svg';
import './App.css';

function App() {
  const pokemons = useSelector(state => state.pokemons);
  const isLoading = useSelector(state => state.isLoading);

  const dispatch = useDispatch();

  useEffect( () => {
    const getPokemons = async () => { 
      const data = await getAllPokemons();

      dispatch(getPokemonsWithDetails(data));

      setTimeout(() => {
        dispatch(setLoading(false));
      }, 500);
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
      <Col offset={ 12 }>
        <Spin spinning={ isLoading } size='large'/>
      </Col>
      {
        !isLoading && <PokemonList pokemons={ pokemons } />  
      }           
    </div>
  );
}

export default App;
