import React from 'react'
import Single from '../pages/Single'

export default function PokeList({ pokemons }) {
    return (
        <div>
            <section className="roomslist">
                <div className="roomslist-center">
                    {pokemons.map(item => {
                        return <Single key={item.id} pokemon={item} />;
                    })}
                </div>
            </section>

        </div>
    )
}
