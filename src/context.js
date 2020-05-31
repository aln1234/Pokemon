import React, { Component } from 'react'

import axios from 'axios';

const PokemonContext = React.createContext();





export default class PokemonProvider extends Component {
    state = {

        urls: 'https://pokeapi.co/api/v2',
        pokemons: [],
        location: [],
        gender: [],
        habitat: [],
        pokes: [],
        locate: [],


        sortedLocation: [],
        sortedPokemon: [],
        featuredPokemon: [],
        pokemonfilter: '',
        locationfilter: 'all',
        loading: false
    };
    //get data


    async componentDidMount() {

        let changeableurl = this.state.urls;

        let res = await axios.get(`${changeableurl}/pokemon/?limit=200&offset=0`);
        let region = await axios.get(`${changeableurl}/pokemon-habitat`);

        let location = await axios.get(`${changeableurl}/location-area`);

        let gender = await axios.get(`${changeableurl}/gender`);














        let info = res.data['results']
        let sex = gender.data['results']
        let locate = location.data['results']


        let pokemons = this.formatPokemon(info);
        let pokelocation = this.formatLocation(locate);














        this.setState({
            pokemons,
            loading: false,
            gender: sex,
            location: pokelocation,
            sortedPokemon: pokemons,

        });





    }

    formatPokemon(info) {

        let tempPokemon = info.map(data => {
            let id = data.name;
            let name = data.name;
            let url = data.url;
            const pokemonIndex = url.split('/')[url.split('/').length - 2];
            const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;



            let pokemon = { id, name, imageUrl, pokemonIndex }




            return pokemon
        })
        return tempPokemon;
    }
    formatLocation(locate) {

        let tempPokemon = locate.map(data => {
            let id = data.name;
            let name = data.name;
            let url = data.url;
            const pokeurl = url.split('/')[url.split('/').length - 2];
            // console.log(pokeurl)
            // let pokemon = axios.get(`https://pokeapi.co/api/v2/location-area/${pokeurl}`).then(res => console.log(res))
            // console.log(pokemon)













            let locationUrl = { id, name, pokeurl }




            return locationUrl
        })
        return tempPokemon;
    }



    getPokemon = pokemonIndex => {
        let tempPokemon = [...this.state.pokemons];

        const pokemon = tempPokemon.find(pokemon => pokemon.pokemonIndex === pokemonIndex)

        return pokemon

    };

    handleChange = event => {

        const target = event.target
        const value = target.value
        const name = target.name;



        this.setState(
            {
                [name]: value

            }, this.filterPokemon


        );
    };
    filterPokemon = () => {
        let {
            pokemons,
            pokemonfilter,
            list
        } = this.state;




        let tempPokemon = [...pokemons]
        tempPokemon = tempPokemon.filter(pokemon => {
            return pokemon.name.toLowerCase().indexOf(pokemonfilter) != -1;
        })

        this.setState({
            sortedPokemon: tempPokemon
        })
    }






    handleSelect = event => {

        const target = event.target
        const value = target.value
        const name = target.name;



        this.setState(
            {
                [name]: value

            }, this.filterLocation


        );
    };
    filterLocation = () => {
        let {
            pokemons,
            locationfilter,
            location

        } = this.state;
        let templocate = [...location]

        if (locationfilter !== "all") {
            templocate = templocate.filter(locate => {
                return locate.name === locationfilter


            })
            let index = templocate.map(i => i.pokeurl)

            // need to fix the single api call 

            // let pokemon =  axios.get(`https://pokeapi.co/api/v2/location-area/${index}`).then(res => this.setState({ pokes: res.data }))
            // console.log(pokemon)


        }

        this.setState({
            locate: templocate
        });
    }


    // getLocation = pokemonIndex => {
    //     let tempPokemon = [...this.state.pokemons];

    //     const pokemon = tempPokemon.find(pokemon => pokemon.pokemonIndex === pokemonIndex)

    //     return pokemon

    // };
























    render() {
        return (
            <PokemonContext.Provider value={{ ...this.state, getPokemon: this.getPokemon, handleChange: this.handleChange, handleSelect: this.handleSelect }}>
                {
                    this.props.children
                }
            </PokemonContext.Provider >

        )
    }
}


const PokemonConsumer = PokemonContext.Consumer;


export { PokemonProvider, PokemonConsumer, PokemonContext };