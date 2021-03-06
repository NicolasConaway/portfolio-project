import React from 'react';
import './styles.css';
import projectThumbnails from './projectThumbnails.json';
import ProjectList from './model'

class Projects extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            postList: []
        }
    }

    displayCards() {
        this.setState({
            postList: projectThumbnails
        })
    }

    componentDidMount() {
        this.displayCards()
    }

    render() {

        const { postList } = this.state

        return (

            <>
                <div className="projects">
                    <h1>My Projects</h1>
                    <div className="projects__container">
                        {
                            postList.map((card, i) => {
                                return (
                                    <div className="saveMe">
                                        < ProjectList
                                            post={card}
                                            key={`post-list-key ${i}`} />
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