import React from 'react';
import './styles.css';
import projectThumbnails from './projectThumbnails.json';

class Model extends React.Component {


    render() {
        return (
            <>

                <div className="model__container">

                    <div className="modelRightLeft">
                        <div className="modelRight">
                            <a href={projectThumbnails.siteLink}>Site</a>
                        </div>
                        <div className="modelLeft">
                            <a href={projectThumbnails.githubLink}>Github</a>
                        </div>
                    </div>

                </div>

            </>
        )

    }

}

export default Model;