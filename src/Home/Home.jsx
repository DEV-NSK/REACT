import ImgLogo from "/src/assets/img-logo.png"
import "./Home.css";

const Home = () => {
    return(
        <div id="home">
            <p>hey, welcome to my portfolio</p>
            <img src={ImgLogo} alt="" />
        </div>
    )
}

export default Home;