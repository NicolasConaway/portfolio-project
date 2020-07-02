import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom'

class Download extends React.Component {

    render() {
        return (
            <>
                <Link to="./Files/ResumeNC" 
                target="_blank" 
                rel="noopener noreferrer"
                Download>Download</Link>
            </>
        )
    }
}

export default Download;