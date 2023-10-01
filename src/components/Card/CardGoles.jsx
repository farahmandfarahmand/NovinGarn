


export default function CardGoles({data}){
    return(
        <div className="md:w-1/2 flex flex-col lg:mx-4 justify-center">
        <div className='text-blue-900 mb-4'>
        <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out " src={data.img} />

        </div>
        <h3 className="text-2xl  text-blue-900 font-bold  text-center">{data.name} </h3>
        <div>
            <p className='my-3 text-md text-gray-600 font-semibold text-right'>{data.description}</p>
        </div>
        
    </div>
    
    )
}