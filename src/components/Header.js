import React from "react";
import './styles/Header.scss';
import {Close} from "@material-ui/icons";

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
                </ul>
            </nav>
        </div>
    )
}

export default Header;