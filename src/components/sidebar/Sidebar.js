import './Sidebar.css';

import logo from '../../assets/logo.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faJetFighter} from "@fortawesome/free-solid-svg-icons";
import { faJedi} from "@fortawesome/free-solid-svg-icons";




const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar_title">
                <div className="sidebar_img">
                    <img src={logo} alt="starwars" />
                </div>
                <i><FontAwesomeIcon icon={faXmark}  onClick={() => closeSidebar()}
                id="sidebarIcon"
                aria-hidden="true" />
                </i>
            </div>
            <div className="sidebar_menu">
                <div className="sidebar_link active_menu_link">   
                    <i><FontAwesomeIcon icon={faJedi} /></i>
                    <a href="#">HOME</a>
                </div>
                <h2>Escolha</h2>
                <div className="sidebar_link">   
                    <i><FontAwesomeIcon icon={faPerson} /></i>
                    <a href="#">Personagem</a>
                </div>
                <div className="sidebar_link">   
                    <i><FontAwesomeIcon icon={faGlobe} /></i>
                    <a href="#">Planetas</a>  
                </div>
                <div className="sidebar_link">   
                    <i><FontAwesomeIcon icon={faJetFighter} /></i>
                    <a href="#">Naves</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;