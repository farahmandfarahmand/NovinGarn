
import { Link } from "react-router-dom"
export default function Card({data}){
    return(
        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-1 group">
        <div className="m-2 text-justify text-sm">
            <img alt="card img" className=" h-100 w-full rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out bg-transparent" src={data.img} />
            <h2 className="font-semibold my-4 text-2xl mt-10 text-right">{data.name}</h2>
            <p className="text-md font-medium text-right truncate  ">
              {data.description}
            </p>
            <div className="flex justify-left my-1 ">
                

                <Link to="/get-demo" className="mb-8 text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-50 px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                    ادامه مطلب
                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
            </div>
        </div>
    </div>
    )
}