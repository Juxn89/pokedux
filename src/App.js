import { Col } from 'antd';
import { Searcher } from './components/Searcher';
import { PokemonList } from './components/PokemonList';

import { POKEMON_LIST_MOCK } from './data/pokemonMock';

import './App.css';

function App() {
  return (
    <div className="App">
      <Col span={ 8 } offset={ 8 } >
        <Searcher />
      </Col>
      <PokemonList pokemons={ POKEMON_LIST_MOCK } />       
    </div>
  );
}

export default App;
