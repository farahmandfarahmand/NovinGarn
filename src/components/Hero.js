import React, { useState, useEffect } from 'react';

import NavBar from '../components/Navbar/NavBar';

import { get } from '../Services/Http';
import CardAbstract from '../components/Card/CardAbstract';

const Hero = () => {

    const [abstract, setAbstract] = useState([])

    useEffect(() => {
        get('/abstract')
            .then(({ data }) => console.log(setAbstract(data)))
    }, [])

    const postAbstract = abstract.map(post => {
        return <CardAbstract data={
            {
                title: post.title,
                description: post.description,
                img: post.img
            }
        }
        />
    })
    return (
        <>
            <div className="hero" id='hero'>
                <div>
                    <NavBar />
                </div>

                <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">
                    {postAbstract}

                </div>
            </div>
        </>
    )
}

export default Hero;