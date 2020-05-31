import React from 'react'
import { useContext } from 'react';

import { PokemonContext } from '../context'

import Title from './Title'
import { Button, Input, Footer, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

//get all unique locations
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};



export default function Filter({ pokemons }) {
    const context = useContext(PokemonContext);
    const {
        handleChange, pokemonfilter, location, handleSelect, locationfilter
    } = context


    //get unique location
    let locationfilt = getUnique(location, 'name');
    // add all
    locationfilt = ["all", ...locationfilt];
    // map to jsx
    locationfilt = locationfilt.map((item, index) => (
        <option key={index} value={item}>
            {item}
        </option>
    ));




    return (
        <section className="filter-container">
            <Title title="search pokemon" />
            <div className="flyout">
                <main style={{ marginTop: '2rem' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col"></div>
                            <div className="col">
                                <Input icon="search"
                                    name="pokemonfilter"
                                    id="pokemonfilter"
                                    value={pokemonfilter}
                                    onChange={handleChange} />
                            </div>
                            <div className="col"></div>

                        </div>
                        {/* <div className="form-group">
                            <label htmlFor="type">Pokemon Type</label>
                            <select
                                name="locationfilter"
                                id="locationfilter"
                                onChange={handleSelect}
                                className="form-control"
                                value={locationfilter}
                            >
                                {locationfilt}

                            </select>
                        </div> */}
                    </div>
                </main>

            </div>
        </section>

    )
}
