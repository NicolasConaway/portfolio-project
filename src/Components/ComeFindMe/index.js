import React from 'react';
import './styles.css';
import Linkedin from './icons/linkedin2.png'
import Github from './icons/github2.png'

class Social extends React.Component {

    render() {
        return (
            <>
                <div className="social">
                    <h1>My Social Media!</h1>

                    <div className="social__container">
                        <a href="https://www.linkedin.com/in/nicolas-conaway/" 
                        className="social__card" 
                        target="_blank">
                            <img src={Linkedin} />
                            <p>LinkedIn</p>
                        </a>

                        <a href="https://github.com/NicolasConaway" 
                        className="social__card" 
                        target="_blank">
                            <img src={Github} />
                            <p>Github</p>
                        </a>
                    </div>


                </div>
            </>
        )
    }
}

export default Social;