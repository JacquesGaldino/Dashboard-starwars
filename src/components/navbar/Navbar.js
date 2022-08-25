import './Navbar.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import logo from '../../assets/logo.png';


const Navbar = ({ sidebarOpen, openSidebar }) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick = {() => openSidebar()}>
                <i><FontAwesomeIcon icon={faBars} aria-hidden="true" /></i>
            </div>

            <div className="navbar_left">
                <a href="#">História</a>
                <a href="#">Assistir</a>
                <a href="#" className="active_link">Página Oficial</a>
            </div>

            <div className="navbar_right">
                <a href="#">
                    <i><FontAwesomeIcon icon={faSearch} /></i>
                </a>

                <a href="#">
                    <i><FontAwesomeIcon icon={faClock} /></i>
                </a>

                <a href="#">
                    <img width="30" src={logo} alt="logo" />
                </a>
            </div>

        </nav>
    )
}

export default Navbar;