import React, { Component } from 'react'
// import './App.css';
import poke from '../images/poke.svg'
import logo from '../images/logo.svg'
import { FaAlignRight } from 'react-icons/fa'

import { Link } from 'react-router-dom'

class Navbar extends Component {
    state = {
        isOpen: false

    }
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }
    render() {
        return (
            <div className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to='/'>
                            <img src={poke} alt="Poke" className='center' />
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-btn"></FaAlignRight>
                        </button>





                    </div>
                </div>
            </div>



        )
    }
}

export default Navbar;