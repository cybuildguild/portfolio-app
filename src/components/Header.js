import React from "react";
import './styles/Header.scss';
import {Close} from "@material-ui/icons";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="Header__logo">
                <h1>Simplilearn</h1>
            </div>

            <nav>
                <ul>
                    <div className="closed">
                        <Close className='close'/>
                    </div>

                    <li>
                        <Link>
                        </Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Header;