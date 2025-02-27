import "./Gallery.scss"
import Aos from "aos"
import "aos/dist/aos.css"
import {useEffect} from "react";


const Gallery= () => {
    useEffect(()=>{
        Aos.init({duration:1000})
    })
    return (
        <section className="gallery" data-aos="zoom-out-left" data-aos-delay="500">
            <h6>GALLERY</h6>
            <h3>Campus Photos</h3>

            <div className="gallery__photo_div">
                <img src="src/assets/gallery-1.png" alt=""/>
                <img src="src/assets/gallery-2.png" alt=""/>
                <img src="src/assets/gallery-3.png" alt=""/>
                <img src="src/assets/gallery-4.png" alt=""/>
            </div>

            <div className="gallery__btn">
                <p>See more here  &#8594;</p>
            </div>
        </section>
    )
}

export default Gallery