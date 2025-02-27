import { useEffect } from "react";
import "./Gallery.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import gallery1 from "../../assets/gallery-1.png";
import gallery2 from "../../assets/gallery-2.png";
import gallery3 from "../../assets/gallery-3.png";
import gallery4 from "../../assets/gallery-4.png";

const Gallery =() => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []); // Ensure AOS only initializes once

    return (
        <section className="gallery" data-aos="zoom-out-left" data-aos-delay="500">
            <h6>GALLERY</h6>
            <h3>Campus Photos</h3>

            <div className="gallery__photo_div">
                <img src={gallery1} alt="Gallery Image 1"/>
                <img src={gallery2} alt="Gallery Image 2"/>
                <img src={gallery3} alt="Gallery Image 3"/>
                <img src={gallery4} alt="Gallery Image 4"/>
            </div>

            <div className="gallery__btn">
                <p>See more here  &#8594;</p>
            </div>
        </section>
    );
}

export default Gallery;
