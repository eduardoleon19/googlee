import aboutHomeImg1 from "../../Assets/img2.jpg"
import aboutHomeImg2 from "../../Assets/img3.jpg"
import "./About.scss"
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
    
    return (
       <div className="about">
            <div className="aboutContainer grid">
                <div className="aboutDivImgContainer grid">
                    <div data-aos="fade-right" data-aos-duration="2500" className="aboutDivImg">
                        <img src={aboutHomeImg1} alt="About Image 1" />
                    </div>
                    <div data-aos="fade-right" data-aos-duration="2500" className="aboutDivImg">
                        <img src={aboutHomeImg2} alt="About Image 2" />
                    </div>
                </div>
                <div className="aboutDivText grid">
                    <h2 data-aos="fade-left" data-aos-duration="2500" >Acerca de Nosotros</h2>
                    <p data-aos="fade-left" data-aos-duration="2500">En nuestra empresa, ofrecemos servicios de consultoría en tecnología de información de alta calidad para ayudar a nuestros clientes a alcanzar sus objetivos de negocio. Nos especializamos en una amplia gama de servicios de tecnología de información, desde la consultoría estratégica hasta el diseño y la implementación de soluciones tecnológicas personalizadas.</p>
                    <p data-aos="fade-left" data-aos-duration="2500">Nuestro equipo está compuesto por expertos en tecnología de información altamente capacitados y experimentados que están dedicados a brindar soluciones innovadoras y eficientes a nuestros clientes. Nuestra empresa tiene una amplia experiencia en una variedad de industrias, lo que nos permite brindar soluciones personalizadas a cada uno de nuestros clientes.</p>
                </div>
            </div>
       </div>
       )
   }
   
   export default About
