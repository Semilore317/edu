import React, { useEffect } from "react";
import "./Program.scss";
import Aos from "aos";
import "aos/dist/aos.css";

const Program = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []); // Ensures AOS initializes only once

    return (
        <>
            {/* Assign ref for smooth scrolling to the Program section */}
            <section className="program" data-aos="fade-left">
                <h3>OUR PROGRAM</h3>
                <h1>What We Offer</h1>

                <div className="program__container">
                    <div className="div__img_1">
                        <img src="src/assets/program-1.png" alt="Program 1"/>
                    </div>
                    <div className="div__img_2">
                        <img src="src/assets/program-2.png" alt="Program 2"/>
                    </div>
                    <div className="div__img_3">
                        <img src="src/assets/program-3.png" alt="Program 3"/>
                    </div>
                </div>

                <div className="program__right_container">
                    <div></div>
                </div>
            </section>

            {/* Assign ref for smooth scrolling to the About section */}
            <section className="about" data-aos="fade-right">
                <div className="about__left">
                    <img src="src/assets/about.png" alt="About University"/>
                </div>

                <div className="about__right">
                    <h3>ABOUT UNIVERSITY</h3>
                    <h1>Nurturing Tomorrow's Leaders Today</h1>
                    <p>
                        Embark on a transformative educational journey with our university's comprehensive education programs.
                        Our cutting-edge curriculum is designed to empower students with the knowledge, skills,
                        and experiences needed to excel in the dynamic field of education. <br/>
                        With a focus on innovation, hands-on learning, and personalized mentorship,
                        our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities. <br/>
                        Whether you aspire to become a teacher, administrator, counselor, or educational leader,
                        our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.
                    </p>
                </div>
            </section>
        </>
    );
}

export default Program;
