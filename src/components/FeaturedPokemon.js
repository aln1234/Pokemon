import React, { Component } from 'react'

import { PokemonContext } from '../context'
import Loading from "./loader"
import Title from "../components/Title"
import Single from "../pages/Single"


class FeaturedPokemon extends Component {
    static contextType = PokemonContext;
    render() {
        let { loading, pokemons: pokemons } = this.context;



        pokemons = pokemons.slice(0, 10).map(pokemon => {
            return <Single key={pokemon.id} pokemon={pokemon} />

        })
        return (
            <div>

                <section className="featured-rooms">
                    <Title title="Favorite Pokemon" >


                    </Title>

                    <div className="featured-rooms-center">


                        {loading ? <Loading /> : pokemons}

                    </div>

                </section>


            </div>
        )
    }
}

export default FeaturedPokemon;