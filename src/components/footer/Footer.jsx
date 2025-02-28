import "./Footer.scss"
import Aos from "aos"
import "aos/dist/aos"
import {useEffect} from "react";

const Footer = () => {
    useEffect(() => {
        Aos.init({duration: 1000})
    })
    return (
        <>
            <footer>
                <span>© 2025 Edu. All rights reserved.</span>
                <span>
                <a href="#">Terms Of Services</a>
                <a href="#">Privacy Policy</a>
            </span>
            </footer>
        </>
    )
}

export default Footer