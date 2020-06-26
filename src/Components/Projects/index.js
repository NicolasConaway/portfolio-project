import React from 'react';
import './styles.css';

const projectThumnails = [
    {
        name: 'Project 1',
        url: '1'
    },
    {
        name: 'Project 2',
        url: '2'
    },
    {
        name: 'Project 3',
        url: '3'
    },
    {
        name: 'Project 4',
        url: '4'
    },
    {
        name: 'Project 5',
        url: '5'
    },
    {
        name: 'Project 6',
        url: '6'
    },
    {
        name: 'Project 7',
        url: '7'
    },
    {
        name: 'Project 8',
        url: '8'
    }
];

class Projects extends React.Component {

    render() {
        return (

            <div className="projects">
                <div className="projects__container">
                    <h1>My Projects</h1>
                    <div className="thumbnail__container">
                        {projectThumnails.map((card) => {
                            return (
                                <div>
                                    <p className="thumbnail">{card.url}</p>
                                    <p className="thumbnailName">{card.name}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>


        )
    }
}

export default Projects;