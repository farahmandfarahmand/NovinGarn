export default function CardImageFooter({ data }) {
    return (


        <div className="grid grid-rows-1 grid-flow-col  ">
        
        <img alt="card img" className="rounded-t float-right duration-1000 w-40 h-12  "  src={data.img} />


        
        </div>
    )
}