import { useState, useEffect } from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.png";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    const navUl = document.querySelector("ul");
    const toggleNav = () =>{
        navUl.classList.toggle("active");
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={scrolled ? "navbar scrolled" : "navbar"}>
            <img src={logo} alt="Logo"/>

            <div>
                <img onClick={toggleNav} src="src/assets/menu-icon.png" className="menu-btn" alt="navbar icon"/>
            </div>

            <ul>
                <li>Home</li>
                <li>Program</li>
                <li>About Us</li>
                <li>Campus</li>
                <li>Testimonials</li>
                <li className="btn">Contact Us</li>
            </ul>
        </nav>
    );
};

export default Navbar;
