import "./Hero.scss"
import Aos from "aos"
import "aos/dist/aos.css"
import {useEffect} from "react";

const Hero = () => {
    useEffect(() => {
        Aos.init({duration: 1000})
    })
    return (
        <div className="hero">
            <div className="hero__container" data-aos="fade-up">
                <h1>We Ensure Better Education <br/> for a better world</h1>
                <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and <br/>
                    experiences needed to excel in the dynamic field of education</p>
                <div className="hero__btn">
                    Explore More &#8594;
                </div>
            </div>
        </div>
    )
}

export default Hero