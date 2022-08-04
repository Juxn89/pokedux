import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Searcher } from './components/Searcher';
import { PokemonList } from './components/PokemonList';
import { Col } from 'antd';

import { getAllPokemons } from './api/pokeapi';
import { POKEMON_LIST_MOCK } from './data/pokemonMock';

import logo from './statics/logo.svg';
import './App.css';
import { setPokemons as setPokemonsActions } from './actions/index';

const mapStateToProps = (state) => ({
  pokemons: state.pokemons
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value))
});

function App( { pokemons, setPokemons } ) {
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect( () => {
    const getPokemons = async () => { 
      const data = await getAllPokemons();

      setPokemons(data);
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
