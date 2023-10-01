
export default function CardContact({ data }) {
    return (


        <div className="flex flex-row ...">
        
                <svg className="w-5 h-5 text-gray-800 dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox={data.viewBox}>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={data.d} />
                </svg>

                <p style={{ marginLeft: 5 }} className='text-base  md:text-1xl  mr-2 '>{data.name}<span className="text-sm md:text-1xl ">{data.description}</span></p>

        
        </div>
    )
}