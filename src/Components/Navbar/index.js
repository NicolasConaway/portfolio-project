import React from 'react';
import './styles.css';
import { Link } from 'react-scroll';

class Navbar extends React.Component {

    render() {
        return (
            <div className="navbar__container">
                <ul className="navbar">
                    <Link 
                        activeClass="active"
                        to="title"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}
                        className="navlinks">
                        Home
                    </Link>
                    <Link 
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}
                        className="navlinks">
                        About Me
                    </Link>
                    <Link 
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}
                        className="navlinks">
                        Projects
                    </Link>
                    <Link 
                        activeClass="active"
                        to="social"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}
                        className="navlinks">
                        Come Find Me
                    </Link>
                </ul>
            </div>
        )
    }
}

export default Navbar;