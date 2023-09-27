import React, { useState, useEffect } from 'react';
import { get } from '../Services/Http';
import CardEvents from '../components/Card/CardEvents'

const Portfolio = () => {

    const [postEvents, setPostEvents] = useState([])

    useEffect(() => {
        get('/lastevents')
            .then(({ data }) => console.log(setPostEvents(data)))
    }, [])

    const postEvent = postEvents.map(post => {
        return <CardEvents data={
            {
                name: post.name,
                img: post.img,
                description: post.description,


            }
        }

        />
    })
    return (
        <>
            <div className="my-4 py-4" id='portfolio'>
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">آخرین رویدادها</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
                </div>
                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

                        {postEvent}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;