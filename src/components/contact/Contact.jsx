import "./Contact.scss";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState({ message: "", type: "" });
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatus({ message: "", type: "" });

        emailjs.send("service_cpr8jyb", "template_dme0w3o", formData, "2YWh4Cc1bKwFhlFgQ")
            .then(() => {
                setStatus({ message: "Message sent successfully!", type: "success" });
                setFormData({ name: "", phone: "", email: "", message: "" });
            })
            .catch(() => {
                setStatus({ message: "Failed to send message. Please try again.", type: "error" });
            })
            .finally(() => setIsSending(false));
    };

    return (
        <div className="contact">
            <h3>CONTACT US</h3>
            <h1>Get In Touch</h1>
            <div className="contact__wrapper">
                <div className="contact__wrapper__left">
                    <div className="annoying">
                        <h3>Send us a message</h3>
                        <FaMailBulk className="contact__wrapper__icon" />
                    </div>
                    <br />
                    <p>Feel free to reach out through the contact form or find our contact information below.</p>
                    <br />
                    <CiMail className="contact__wrapper__icons" />
                    <p>semi.banks.317@gmail.com</p>
                    <br />
                    <FaPhoneAlt className="contact__wrapper__icons" />
                    <p>+234-9034-88-3874</p>
                    <br />
                    <FaLocationDot className="contact__wrapper__icons" />
                    <p>29, Ajilekege Street, Idimu Lagos</p>
                </div>
                <div className="contact__wrapper__right">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Your name</label>
                            <input type="text" id="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" id="phone" placeholder="Enter your mobile number" value={formData.phone} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input type="email" id="email" placeholder="Enter your email id" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Write your messages here</label>
                            <textarea id="message" rows="4" placeholder="Enter your message" value={formData.message} onChange={handleChange} required></textarea>
                        </div>
                        <button type="submit" className="form__btn" disabled={isSending}>
                            {isSending ? "Sending..." : "Submit Now →"}
                        </button>

                        {status.message && (
                            <p className={`status-message ${status.type}`}>
                                {status.message}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
