import { Link } from "react-router-dom";

export default function Header(){
    return(
        <>
        <h1>nav bar</h1>
        <Link to="/details">
            <h3>details</h3>
        </Link>
        </>
    )
}