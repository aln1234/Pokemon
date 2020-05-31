import React, { Component } from 'react';

import './App.css';
import { Provider } from 'react-redux';
import Poke from './pages/Poke'
import Single from './pages/Single'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import PokemonList from './pages/PokemonList'
import PokemonDetail from './pages/PokemonDetail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'




class App extends Component {
  render() {
    return (


      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Poke} />
          <Route exact path="/list" component={PokemonList} />
          <Route exact path="/pokemons/:pokemonIndex" component={PokemonDetail} />
          <Route component={Error} />
        </Switch>



      </Router>

    );
  }
}

export default App;
