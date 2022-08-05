import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Spin } from 'antd';

import { Searcher } from './components/Searcher';
import { PokemonList } from './components/PokemonList';

import { getAllPokemons } from './api/pokeapi';
import { getPokemonsWithDetails, setLoading } from './actions/index';

import './App.css';
import logo from './statics/logo.svg';

function App() {
  const pokemons = useSelector(state => state.getIn(['data', 'pokemons']));
  const isLoading = useSelector(state => state.getIn(['ui', 'isLoading']));

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
        !isLoading && <PokemonList pokemons={ pokemons.toJS() } />  
      }           
    </div>
  );
}

export default App;
