import React, {useState, useEffect} from 'react'
import {getProjectList} from '../../services/services.js'
import * as SlideShowView from '../../views/slideShowView.js'

function Project() {
    const [projectList, setData] = useState([]);
    useEffect(()=> {
        getProjectList().then(items => {
            setData(items);
            console.log("PROJECT LIST")
            console.log(items)
        })
    },[])

    return (
    <>
    <div className="gallery" id="gallery">
        {
            projectList.map(project => {
                return(
                    //TODO: Make a component
                    <a key={project.id} 
                        onClick={() => SlideShowView.showProjectSlideshow(project.id)}
                    >
                        <div className="galleryItem"> 
                                <img src={project.projectStills[0]} alt={project.projectTitle}/>
                                <div className="overlay">
                                    <h2>{project.projectTitle}</h2>
                                    <p>{project.clientName}</p>
                                </div>
                        </div>
                    </a>
                )
            })
        }
    </div>
    <section className="slideshowPopup hidden" id="slideshowPopup">
        <div id="disclaimer">
            Turn Device to view images.
        </div>
        <div className="container" id="slideshowImages">
                    <a className="close" onClick={() => SlideShowView.closeSlideshow()}>&#10005;</a>
                    <a className="next" onClick={() => SlideShowView.plusSlides(1)}>&#10095;</a>
                    <a className="prev" onClick={() => SlideShowView.plusSlides(-1)}>&#10094;</a>
        </div>
        <div className="container" id="slideshowDetails"></div>
    </section>
    <a onClick={() => SlideShowView.closeSlideshow()}>
        <div className="slideshowOverlay hidden"></div>
    </a>

    </>
    );
}

export default Project;
