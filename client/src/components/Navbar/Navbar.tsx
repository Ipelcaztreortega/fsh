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
                    <Link to='/appointments'><li>Appointments</li></Link>
                    <Link to='/doctors'><li>Doctors</li></Link>
                    <Link to='/medical-records'><li>Medical Records</li></Link>
                    <Link to='/billings'><li>Billings</li></Link>
                </ul>
            </div>
        </div>
    )
}