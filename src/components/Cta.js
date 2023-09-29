import React, { useState, useEffect } from 'react';

import { get } from '../Services/Http';
import CardViews from '../components/Card/CardViews'

const Cta = () => {

    const [postViews, setPostViews] = useState([])

    useEffect(() => {
        get('/views')
            .then(({ data }) => console.log(setPostViews(data)))
    }, [])

    const postView = postViews.map(post => {
        return <CardViews data={
            {
                name: post.name,
                img: post.img,
                description: post.description,


            }
        }

        />
    })
    return (
        <div className="w-full flex items-center justify-center text-white cta display: flex flex-direction: column-reverse">
            <div className="mx-8 w-full h-100  text-right lg:text-left py-20 px-11 flex lg:justify-between items-center">
                <div className="w-full flex flex-col lg:flex-row lg:justify-around ">
                    <div className="mb-4  ">
                       

                   {postView}
                       


                    </div>



                </div>


            </div>
        </div>
    );
}

export default Cta;