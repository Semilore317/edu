import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Testimonial.scss";

const cards = [
    {
        id: 1,
        name: "William Jackson",
        location: "Edusity, USA",
        text: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made...",
        img: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        id: 2,
        name: "Emily Williams",
        location: "Edusity, USA",
        text: "The supportive community, state-of-the-art facilities, and commitment to excellence...",
        img: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        id: 3,
        name: "John Doe",
        location: "Edusity, Canada",
        text: "I have truly exceeded my expectations with the education provided at Edusity...",
        img: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
        id: 4,
        name: "Sarah Brown",
        location: "Edusity, UK",
        text: "Highly recommended for those seeking a supportive learning environment...",
        img: "https://randomuser.me/api/portraits/women/4.jpg"
    }
];

const Testimonial = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const nextSlide = () => {
        if (index < cards.length - 2) {
            setIndex(index + 1);
        }
    };

    const prevSlide = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    return (
        <div className="testimonial">
            <h3 data-aos="fade-up">TESTIMONIALS</h3>
            <h1 data-aos="fade-up">What Students Say</h1>

            <div className="carousel-container">
                <button className="carousel-button left-btn" onClick={prevSlide}>&lt;</button>
                <div className="carousel-wrapper">
                    <div
                        className="carousel"
                        style={{ transform: `translateX(-${index * 350}px)` }} // Adjust slide width
                        data-aos="fade-left"
                    >
                        {cards.map((card) => (
                            <div key={card.id} className="card">
                                <div className="profile">
                                    <img src={card.img} alt={card.name} />
                                    <div>
                                        <div className="name">{card.name}</div>
                                        <div className="location">{card.location}</div>
                                    </div>
                                </div>
                                <p className="text">{card.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <button className="carousel-button right-btn" onClick={nextSlide}>&gt;</button>
            </div>
        </div>
    );
};

export default Testimonial;
