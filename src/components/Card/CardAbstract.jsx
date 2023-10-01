

export default function CardAbstract({data}){
    return(
       
        <div className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left text-align: right">
        <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
            <h1 className="mb-5 md:text-4xl text-3xl font-bold text-blue-900 text-center">
            {/* We build digital solutions to help businesses scale */}
               {data.title}
            </h1>
            <div className="text-xl font-semibold tracking-tight mb-5 text-gray-500 text-right">{data.description}</div>
            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
           
              
            </div>
        </div>
        <div className="flex lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
            <img alt="card img" className="rounded-t float-right duration-1000 w-full" src={data.img} />
        </div>
    </div>

  
    )
}