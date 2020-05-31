import React, { Component } from 'react'

import { PokemonContext } from '../context'
import Loading from "../components/loader"

import Single from "../pages/Single"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import { Link } from 'react-router-dom'
import PokemonContainer from '../components/PokemonContainer'



class FeaturedPokemon extends Component {
    static contextType = PokemonContext;
    render() {
        let { loading, pokemons: pokemons, gender: gender } = this.context;

        let urls = gender.map(url => {
            return url.url
        })


        pokemons = pokemons.map(pokemon => {
            return <Single key={pokemon.id} pokemon={pokemon} />

        })
        return (

            <div>
                <Hero hero="roomsHero">

                    <Banner className="poke" title="World Of Pokemon" subtitle="Learn More About the Pokemon">
                        <Link to='/' className='btn-primary'>
                            Back To Home

    </Link>
                    </Banner>
                </Hero>
                <PokemonContainer />
                {/* 
                <section className="featured-rooms">

                    <div className="featured-rooms-center">


                        {loading ? <Loading /> : pokemons}

                    </div>

                </section> */}


            </div>
        )
    }
}

export default FeaturedPokemon;