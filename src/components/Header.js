import React from "react";
import './styles/Header.scss';
import {Close, MenuBookOutlined} from "@material-ui/icons";
import { Link } from "react-router-dom";

const Header = () => {

    const [active, setActive] = useState(false);

    const showMenu = () => {
        setActive(!active)
    }

    return (
        <div className="header">
            <div className="Header__logo">
                <h1>Simplilearn</h1>
            </div>

            <nav>
                <ul>
                    <div className="closed">
                        <Close className='close' onclick={showMenu}/>
                    </div>

                    <li>
                        <Link to ='/'><b>Home</b></Link>
                    </li>
                    <li>
                        <Link to ='/'><b>About</b></Link>
                    </li>
                    <li>
                        <Link to ='/'><b>Portfolio</b></Link>
                    </li>
                    <li>
                        <Link to ='/'><b>Blog</b></Link>
                    </li>
                    <li>
                        <Link to ='/'><b>Contact</b></Link>
                    </li>

                </ul>
            </nav>

            <div className="changer">
                <MenuBookOutlined className="menu" onclick={showMenu}/>
            </div>
        </div>
    )
}

export default Header;