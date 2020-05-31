import React, { Component } from 'react'
import { useContext } from 'react';


import { PokemonContext } from '../context'

import Filter from './Filter'
import PokeList from './PokeList'





export default class PokemonContainer extends Component {

    static contextType = PokemonContext;
    render() {
        let { sortedPokemon, pokemons, pokes, locate } = this.context;
        // console.log(pokes)





        return (
            <div>
                <Filter pokemons={pokemons} />
                <PokeList pokemons={sortedPokemon} />
            </div>
        )
    }
}
