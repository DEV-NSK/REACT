import "./Projects.css"
import image1 from "./assets/img1.jpg"
import image2 from "./assets/img2.jpg"
import image3 from "./assets/img3.jpg"
import image4 from "./assets/img4.jpg"
import image5 from "./assets/img5.jpg"
import image6 from "./assets/img6.jpg"
import image7 from "./assets/img7.jpg"
import image8 from "./assets/img8.jpg"

export const Projects = () => {
    return(
         <div id="projects">
            <p>Projects</p>
            <div id="card">
                <div className="house">
                <img src={image1} />
                <p>Summer House</p>
            </div>
            <div className="house">
                <img src={image2} />
                <p>Brick House</p>
            </div>
            <div className="house">
                <img src={image3} />
                <p>Renovated</p>
            </div>
            <div className="house">
                <img src={image4} />
                <p>Barn House</p>
            </div>
            <div className="house">
                <img src={image5} />
                <p>Summer House</p>
            </div>
            <div className="house">
                <img src={image6} />
                <p>Brick House</p>
            </div>
            <div className="house">
                <img src={image7} />
                <p>Renovated</p>
            </div>
            <div className="house">
                <img src={image8} />
                <p>Barn House</p>
            </div>
            </div>
        </div>
    )
}