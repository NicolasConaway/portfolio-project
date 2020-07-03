import React from 'react';
import './styles.css';
import projectThumbnails from './projectThumbnails.json';
class Projects extends React.Component {

    state = {
        isThumbnailClicked: false
    }

    render() {

        const thumbnailClicked = this.state.isThumbnailClicked;

        return (

            <>
                <div className="projects">
                    <h1>My Projects</h1>
                    <div className="projects__container">
                        {
                            projectThumbnails.map((card, i) => {
                                return (
                                    <div key={i}>

                                        <div className="card__container">
                                            <div
                                                className="thumbnail__container"
                                                onClick={() => this.setState({ isThumbnailClicked: true })}>

                                                {thumbnailClicked ?

                                                    <div className="model__container">

                                                        <div className="modelRightLeft">

                                                            <a href={card.siteLink}
                                                                target="_blank"
                                                                rel="noopener noreferrer" >
                                                                <div className="modelRight">
                                                                    <p>Site</p>
                                                                </div>
                                                            </a>

                                                            <a href={card.githubLink}
                                                                target="_blank"
                                                                rel="noopener noreferrer" >
                                                                <div className="modelLeft">
                                                                    <p>Github</p>
                                                                </div>
                                                            </a>

                                                        </div>

                                                    </div>

                                                    : <img className="thumbnail" src={card.thumbnail}  />}

                                            </div>

                                            <div onClick={() => this.setState({ isThumbnailClicked: false })}>
                                                <div className={thumbnailClicked ? "exit" : "noExit"}>
                                                    <div className="rightX" />
                                                    <div className="leftX" />
                                                </div>
                                            </div>

                                        </div>

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