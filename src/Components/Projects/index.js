import React from 'react';
import './styles.css';
import projectThumbnails from './projectThumbnails.json'

class Projects extends React.Component {

    render() {
        return (

            <>
                <div className="projects">
                    <h1>My Projects</h1>
                    <div className="thumbnail__container">
                        {
                            projectThumbnails.map((card, i) => {
                                return (
                                    <div key={i}>
                                        <p className="thumbnail">{card.id}</p>
                                        <p className="thumbnailName">{card.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>

        )
    }
}

export default Projects;