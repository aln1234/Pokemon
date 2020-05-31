import React from 'react'
import Hero from '../components/Hero'
import Banner from "../components/Banner"
import { Link } from 'react-router-dom'

export const Error = () => {
    return (
        <div>
            <Hero>

                <Banner className="poke" title="Error Page" subtitle="Pokemon Of that name is not available">
                    <Link to='/' className='btn-primary'>
                        Back To Home

</Link>
                </Banner>
            </Hero>
        </div>

    )
}

export default Error;
