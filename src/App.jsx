import { useRef } from "react";
import "./index.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Program from "./components/program/Program";
import Gallery from "./components/gallery/Gallery";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";

function App() {
    {/*
        const programRef = useRef(null);
        const aboutRef = useRef(null);
        const galleryRef = useRef(null);
    */}
    return (
        <>
            <Navbar/>
            <Hero />
            <Program />
            <Gallery />
            <Testimonial />
            <Contact />
        </>
    );
}

export default App;
