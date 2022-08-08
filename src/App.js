import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Spin } from 'antd';

import { Searcher } from './components/Searcher';
import { PokemonList } from './components/PokemonList';

import { fetchPokemonWithDetails } from './slices/dataSlice';

import './App.css';
import logo from './statics/logo.svg';

function App() {
  const pokemons = useSelector(state => state.data.pokemons);
  const isLoading = useSelector(state => state.ui.isLoading);
  
  const dispatch = useDispatch();
  
  useEffect( () => {
    dispatch(fetchPokemonWithDetails());
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
