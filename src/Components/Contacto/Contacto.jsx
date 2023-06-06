import { AiTwotoneEnvironment } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import "./Contacto.scss";
import "aos/dist/aos.css";
import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Aos from "aos";

const Contacto = () => {
    const form = useRef();
    
    const sendEmail=(e)=> {
        e.preventDefault();
        console.log("Hola");

        emailjs.sendForm('service_s6u1a28', 'template_wbo0uo8', form.current, '9YvtJz8uE0OzHOGF6')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
       <div className="contacto">
            <div className="contactoContainer grid">
                <div data-aos="fade-right" data-aos-duration="2500" className="contactoDivIcons grid">
                    <div className="contactoCont1">
                        <div className="contactoIcon">
                            <AiTwotoneEnvironment className="icon" />
                        </div>
                        <div className="contactoDivPe">
                            <h2>Dirección</h2>
                            <p>Calle, 9, Mz. G, Lt. 12. Lurigancho</p>
                        </div>
                    </div>
                    <div className="contactoCont1">
                        <div className="contactoIcon">
                            <MdMail className="icon" />
                        </div>
                        <div className="contactoDivPe">
                            <h2>Email</h2>
                            <p>google@gmail.com</p>
                        </div>
                    </div>
                    <div className="contactoCont1">
                        <div className="contactoIcons">
                            <div className="contactoIc">
                                <FaPhoneAlt className="icone" />
                            </div>
                            <div className="contactoIc">
                                <BsWhatsapp className="icone" />
                            </div>
                        </div>
                        <div className="contactoDivPes">
                            <h2>Teléfono / Whatsapp</h2>
                            <p>+51 947155825</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="2500" className="contactoRegistrar grid">
                    <div className="tittle Div flex">
                        <h3>Enviar Mensaje</h3>
                    </div>
                    <form ref={form} onSubmit={sendEmail} className="formElement grid">
                        <div className="formSection">
                            <label>Tu Nombre:</label>
                            <div>
                                <input type="text" name="user_name" />
                            </div>
                        </div>
                        <div className="formSection">
                            <label>Tu Email:</label>
                            <div>
                                <input type="email" name="user_email" />
                            </div>
                        </div>
                        <div className="formSection">
                            <label>Mensaje:</label>
                            <div>
                                <textarea name="message" />
                            </div>
                        </div>
                        <input type="submit" value="Enviar" className="btn" />
                    </form>
                </div>
            </div>
       </div>
    )
}
   
export default Contacto
