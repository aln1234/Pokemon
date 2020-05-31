import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import FeaturedPokemon from "../components/FeaturedPokemon"
import { Link } from 'react-router-dom'

export const Poke = () => {
    return (
        <div>           <Hero>

            <Banner title="Welcome To POKE WORLD" subtitle="Explore all the pokemon in the poke universe">
                <Link to='/list' className='btn-primary'>
                    Browse All

                </Link>
            </Banner>
        </Hero>
            <FeaturedPokemon />
        </div>

    )
}

export default Poke;
