import react from "react";
import './styles/Main.scss';
import { Instagram, Twitter, Facebook, Link} from '@material-ui/icons';

const Main =() => {
    return (
        <div className='main'>
            <div className="main__container">
                <div className="main__content">
                    <div className="text">
                        <p>Hello Everyone!</p>
                        <h1>
                            I am Cybuildguild
                        </h1>
                        <p>Front-end Developer & Designer</p>

                        <div className="icons">
                            <Twitter className="icon"/>
                            <Instagram className="icon"/>
                            <Facebook className="icon"/>
                            <LinkedIn className="icon"/>
                        </div>

                        <div className="buttons">
                            <button>See Me</button>
                            <button>Hire Me</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main