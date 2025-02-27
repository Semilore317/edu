import "./Contact.scss"
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="contact">
            <h3>CONTACT US</h3>
            <h1>Get In Touch</h1>

            <div className="contact__wrapper">
                <div className="contact__wrapper__left">
                    <div className="annoying">
                        <h3>Send us a message</h3>
                        <FaMailBulk className="contact__wrapper__icon"/>

                    </div>
                    <br/>

                    <p>Feel free to reach out through contact form or
                        find our contact information below. Your feedback, questions,
                        and suggestions are important to us as we strive to provide
                        exceptional service to our university community.
                    </p>

                    <br/>

                    <CiMail className="contact__wrapper__icons" />
                    <p>semi.banks.317@gmail.com</p>

                    <br/>

                    <FaPhoneAlt className="contact__wrapper__icons" />
                    <p>+234-9034-88-3874</p>

                    <br/>

                    <FaLocationDot className="contact__wrapper__icons" />
                    <p>29, Ajilekege Street, Idimu Lagos</p>
                </div>

                <div className="contact__wrapper__right">
                    <form className="contact-form">
                        <div className="form-group">
                        <label htmlFor="name">Your name</label>
                        <input type="text" id="name" placeholder="Enter your name" />
                        </div>

                        <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" placeholder="Enter your mobile number" />
                        </div>

                        <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" placeholder="Enter your email id" />
                        </div>

                        <div className="form-group">
                        <label htmlFor="message">Write your messages here</label>
                        <textarea id="message" rows="4" placeholder="Enter your message"></textarea>
                        </div>
                    </form>

                    <div className="form__btn">
                        <p>Submit Now &#8594;</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;