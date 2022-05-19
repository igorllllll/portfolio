import "./contact.css";

import { AiOutlineLinkedin, AiOutlineWhatsApp } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";


export default function Contact() {
  return (
    <div id="contact" className="container contact-container">
        <h1>Contato</h1>
        <div className="contact-links">
            <a
            href="https://www.linkedin.com/in/igor-de-carvalho-4971a6192"
            className="contact youtube"
            target={"blank"}
            >
            <AiOutlineLinkedin className="icon" />
            <h2>
                Linkedin <span>Igor de Carvalho</span>
            </h2>
            </a>

            <a
            href="#"
            className="contact whatsapp"
            target={"blank"}
            >
            <AiOutlineWhatsApp className="icon" />
            <h2>
                whatsapp <span>+55 89 XXXXXXXXX</span>
            </h2>
            </a>

            <a href="#" className="contact instagram">
            <FaTelegramPlane className="icon" />
            <h2>
                telegram <span>+55 89 XXXXXXXXX</span>
            </h2>
            </a>
        </div>
    </div>
  );
}
