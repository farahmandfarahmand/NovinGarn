
import { Link } from "react-router-dom"
export default function CardFooter({ data }) {
    return (
        <li className="mb-2">
            <Link to="#" className="text-sm hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">{data.name}</Link>
        </li>
    )
}