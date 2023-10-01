import { Link } from "react-router-dom";



export default function CardEvents({ data }) {
    return (
        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
            <div className="m-6 text-justify text-sm text-right">
                <img alt="card img"  className="w-full rounded-t-lg group-hover:scale-[1.15] transition duration-1000 ease-in-out " src={data.img} />

                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12 text-right">{data.name}</h4>
                <p className="text-md font-medium leading-5 h-auto md:h-25 text-right">
                    {data.description}
                </p>
                <Link to="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline text-right">ادامه مطلب</Link>
            </div>
        </div>
    )
}