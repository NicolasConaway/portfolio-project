import React from 'react';
import './styles.css';
import Navbar from '../Navbar/index'

class Title extends React.Component {

    render() {
        return (
            <>
                <Navbar />
                <div className="title">
                    <h1>Welcome to my portfolio!</h1>
                </div>
            </>
        )
    }
}

export default Title;