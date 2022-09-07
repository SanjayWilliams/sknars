import "./Nav.css"

function Nav() {

    return(
    <nav className="nav">
        <img src="../logo.png" className="logo" />
        <ul className="nav-menu">
            <li className="nav-menu-item">Home</li>
            <li className="nav-menu-item">About</li>
            <li className="nav-menu-item">Members</li>
            <li className="nav-menu-item">Contact</li>
        </ul>
    </nav>
    )
}

export default Nav