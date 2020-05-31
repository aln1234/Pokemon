import React from "react";
import { Link } from "react-router-dom";
import bg from "../images/bg.jpg";
import PropTypes from "prop-types";
import { memo } from "react";
import styled from 'styled-components';

const Sprite = styled.img`
  width: 5em;
  height: 5em;
  display: none;
`;


const Single = memo(({ pokemon }) => {


    const { name, imageUrl: url, pokemonIndex: index } = pokemon;




    return (
        <article className="room">
            <div className="img-container">
                <img
                    src={url}
                    style={{ width: '10em', height: '10em' }}
                    className="center"
                />
                <Link to={`pokemons/${index}`} className="btn-primary room-link">
                    features
        </Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    );
});


Single.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        pokemonIndex: PropTypes.string.isRequired


    })

}

export default Single;
