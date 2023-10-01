import React, { useEffect, useState } from 'react';


import { get } from '../Services/Http'
import Card from '../components/Card/Card'
import CardGoles from '../components/Card/CardGoles'



const Services = () => {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        get('/scopeactivity')
            .then(({ data }) => console.log(setPosts(data)))
    }, [])

    const postsActivity = posts.map(post => {
        return <Card data={
            {
                name: post.name,
                img: post.img,
                description: post.description

            }
        } />
      
    })

    const [postgoles, setPostGoles] = useState([])
    useEffect(() => {
        get('/goles')
            .then(({ data }) => console.log(setPostGoles(data)))
    }, [])

    const postsGoles = postgoles.map(post => {
        return <CardGoles data={
            {
                name: post.name,
                img: post.img,
                description: post.description,
                dPath: post.dPath

            }
        } />
    })

    return (
        <div id="services" className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">حوزه های فعالیت</h2>
          
                    <div className='flex justify-center'>
                        <div className='w-80 border-b-4 border-blue-950'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">شرکت فن آوری نوین قرن در شاخه های زیر فعالیت می کند</h2>
                </div>

                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 md:grid-cols-[500px_minmax(500px,_1fr)_500px]  gap-20">

                        {postsActivity}

                    </div>
                </div>
            </section>

            <section>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="zoom-out">

                        {postsGoles}

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;