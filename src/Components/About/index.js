import React from 'react';
import './styles.css';
import Me from './nicolas_conaway.jpg'

class About extends React.Component {

    render() {
        return (
            <>

                <div className="about">
                    <h1>About Me</h1>
                    <img src={Me} alt="Nicolas Conaway" />
                    <p>Hello, my name is Nicolas Conaway. I am a Road to Hire student who's striving to become a front developer. Currently I am hooked onto the library, React!</p>
                </div>

            </>
        )
    }
}

export default About;