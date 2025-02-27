import React, { useEffect } from "react";
import "./Gallery.scss";
import Aos from "aos";
import "aos/dist/aos.css";

const Gallery =() => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []); // Ensure AOS only initializes once

    return (
        <section className="gallery" data-aos="zoom-out-left" data-aos-delay="500">
            <h6>GALLERY</h6>
            <h3>Campus Photos</h3>

            <div className="gallery__photo_div">
                <img src="src/assets/gallery-1.png" alt="Gallery Image 1"/>
                <img src="src/assets/gallery-2.png" alt="Gallery Image 2"/>
                <img src="src/assets/gallery-3.png" alt="Gallery Image 3"/>
                <img src="src/assets/gallery-4.png" alt="Gallery Image 4"/>
            </div>

            <div className="gallery__btn">
                <p>See more here  &#8594;</p>
            </div>
        </section>
    );
}

export default Gallery;
