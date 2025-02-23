import "./Program.scss"
import Aos from 'aos'
import "aos/dist/aos.css"
import {useEffect} from "react";
const Program = () => {
    useEffect(() => {
        Aos.init({duration: 800});
    })
    return (
        <section className="program">
            <h3>OUR PROGRAM</h3>
            <h1>What We Offer</h1>

            <div className="program__container">
                <div className="div__img_1">
                    <img src="src/assets/program-1.png" alt=""/>
                </div>
                <div className="div__img_2">
                    <img src="src/assets/program-2.png" alt=""/>
                </div>
                <div className="div__img_3">
                    <img src="src/assets/program-3.png" alt=""/>
                </div>
            </div>

            <div className="program__right_container">
                <div>

                </div>
            </div>

        </section>
    )
}

export default Program;