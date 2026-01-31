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

                <div className="section__content">
                    <h1>Cybuildguild</h1>
                    <p>Experience in frontend and backend development</p>
                    <p>JavaScript development</p>
                    <p>Java</p>
                    <p>Python</p>
                    <p>C</p>
                </div>
            </div>
        </div>
    )
}

export default Section;