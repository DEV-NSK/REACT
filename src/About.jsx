import "./About.css"

export const About = () => {
    return (
        <div id="about">
            <div id="heads">
                <span>About</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                    magnam corrupti molestiae, ipsam blanditiis quibusdam rem
                    voluptatum nesciunt voluptatibus minima iste beatae
                    repudiandae consequatur maxime enim inventore! Repellat
                    excepturi odio iusto quibusdam reiciendis, laboriosam illo
                    autem numquam totam placeat neque sed. Quibusdam non
                    adipisci velit ea ipsam! Vitae tenetur odio quidem porro.
                    Beatae ut quisquam libero accusantium natus excepturi
                    distinctio.</p>
            </div>
            <div id="about-images">
                <div className="about-img">
                    <img src="./src/assets/about-img1.jpg" alt/>
                    <div id="content">
                        <h2>John Doe</h2>
                        <span>CEO & Founder</span>
                        <p>Phasellus eget enim eu lectus faucibus vestibulum.
                            Suspendisse sodales pellentesque elementum.</p>
                        <a href>Contact</a>
                    </div>
                </div>
                <div className="about-img">
                    <img src="./src/assets/about-img2.jpg" alt/>
                    <div id="content">
                        <h2>Jane Doe</h2>
                        <span>Architect</span>
                        <p>Phasellus eget enim eu lectus faucibus vestibulum.
                            Suspendisse sodales pellentesque elementum.</p>
                        <a href>Contact</a>
                    </div>
                </div>
                <div className="about-img">
                    <img src="./src/assets/about-img3.jpg" alt/>
                    <div id="content">
                        <h2>Mike Ross</h2>
                        <span>Architect</span>
                        <p>Phasellus eget enim eu lectus faucibus vestibulum.
                            Suspendisse sodales pellentesque elementum.</p>
                        <a href>Contact</a>
                    </div>
                </div>
                <div className="about-img">
                    <img src="./src/assets/about-img4.jpg" alt/>
                    <div id="content">
                        <h2>Dan Star</h2>
                        <span>Architect</span>
                        <p>Phasellus eget enim eu lectus faucibus vestibulum.
                            Suspendisse sodales pellentesque elementum.</p>
                        <a href>Contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}