import "./Nav.css"
import {Link} from "react-router-dom"

function Nav() {

    return(
    <nav className="nav">
        <img src="../logo.png" className="logo" />
        <ul className="nav-menu">
            <li className="nav-menu-item"><Link style={{ textDecoration: 'none', color: 'black' }} to="/">Home</Link></li>
            <li className="nav-menu-item"><Link style={{ textDecoration: 'none', color: 'black' }} to="/members">Members</Link></li>
            <li className="nav-menu-item"><Link style={{ textDecoration: 'none', color: 'black' }} to="/about">About</Link></li>
            <li className="nav-menu-item"><Link style={{ textDecoration: 'none', color: 'black' }} to="/contact">Contact</Link></li>
        </ul>
    </nav>
    )
}

export default Nav