import { Link } from "react-router-dom"

export const Navbar = () => {
    return(
        <div>
            <div>
                <h1>Navbar</h1>
            </div>
            <div>
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/patients'><li>Patients</li></Link>
                </ul>
            </div>
        </div>
    )
}