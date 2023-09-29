


export default function CardEvents({ data }) {
    return (
        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
            <div className="m-6 text-justify text-sm">
                <img alt="card img" width="320" height="320" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out " src={data.img} />

                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">{data.name}</h4>
                <p className="text-md font-medium leading-5 h-auto md:h-48">
                    {data.description}
                </p>

            </div>
        </div>
    )
}