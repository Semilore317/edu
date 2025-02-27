import "./Testimonial.scss"
import Aos from 'aos'
import "aos/dist/aos.css"
import {useEffect} from "react";

const Testimonial = () => {
    useEffect(() => {
        Aos.init({duration: 1000})
    })
    return (
        <section className="testimonial">
            Testimonial
        </section>
    )
}

export default Testimonial
