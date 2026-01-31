import React from "react";
import './styles/Section.scss';
import cbg2 from './assets/profilephoto.jpeg';

const Section = () => {
    return(
        <div className="sections">
            <div className="sections__container">
                <div className="section__img">
                    <img sec={cbg2} alt =""/>
                </div>
            </div>
        </div>
    )
}

export default Section;