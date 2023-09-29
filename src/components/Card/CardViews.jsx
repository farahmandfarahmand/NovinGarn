

export default function CardViews({ data }) {
    return (


        <div className="flex-container ">
            <div className="flex-item  ... ring-2 ring-gray-500/50 rounded-lg ...">
              
             
                <div  className=" flex items-center " style={{direction:"rtl"}} >
                    <img style={{marginLeft: 20,wordWrap: "break-word"}} alt="card img" className="rounded-t float-right duration-1000  " width={130} src={data.img} />
                    <div>
                        <p  className='text-1xl md:text-2xl font-bold mb-4'>{data.name}</p>
                        <span className="text-lg md:text-1xl ">{data.description}</span>
                    </div>
                </div>
            </div>
            


        </div>


    )
}