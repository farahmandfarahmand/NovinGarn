


export default function CardGoles({data}){
    return(
        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
        <div className='text-blue-900 mb-4'>
        <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={data.img} />

        </div>
        <h3 className="text-3xl  text-blue-900 font-bold ">{data.name} </h3>
        <div>
            <p className='my-3 text-xl text-gray-600 font-semibold'>{data.description}</p>
        </div>
    </div>
    )
}