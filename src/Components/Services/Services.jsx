import serviceHomeImg1 from "../../Assets/img5.jpg"
import serviceHomeImg2 from "../../Assets/img6.jpg"
import serviceHomeImg3 from "../../Assets/img7.jpg"
import serviceHomeImg4 from "../../Assets/img8.jpg"
import serviceHomeImg5 from "../../Assets/img9.jpg"
import serviceHomeImg6 from "../../Assets/img10.jpg"
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Servoces.scss"

const Services = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
       <div className="service">
            <div className="serviceContainer grid">
                <div data-aos="fade-up" data-aos-duration="2500" className="serviceDivText grid">
                    <h3>Servicios</h3>
                    <p>Nos enfocamos en brindar soluciones que sean escalables, flexibles y que puedan crecer junto con nuestros clientes. Nos esforzamos por garantizar que nuestros clientes reciban soluciones personalizadas y eficientes que sean adaptables a las necesidades cambiantes del mercado</p>
                </div>
                <div data-aos="fade-down" data-aos-duration="2500" className="servicePanel">
                    <div className="serviceDivPanel">
                        <div className="serviceDivImgPanelContain">
                            <div className="serviceDivImgContainer grid">
                                <div className="serviceDivImg">
                                    <img src={serviceHomeImg1} alt="Service Image 1" />
                                </div>
                            </div>
                            <div className="serviceDivPanelText">
                                    <p>Desarrollo de Software</p>
                            </div>
                        </div>
                    </div>
                    <div className="serviceDivPanel">
                        <div className="serviceDivImgPanelContain">
                            <div className="serviceDivImgContainer grid">
                                <div className="serviceDivImg">
                                    <img src={serviceHomeImg2} alt="Service Image 2" />
                                </div>
                            </div>
                            <div className="serviceDivPanelText">
                                    <p className="ci">Consultoría Informática</p>
                            </div>
                        </div>
                    </div>
                    <div className="serviceDivPanel">
                        <div className="serviceDivImgPanelContain">
                            <div className="serviceDivImgContainer grid">
                                <div className="serviceDivImg">
                                    <img src={serviceHomeImg3} alt="Service Image 3" />
                                </div>
                            </div>
                            <div className="serviceDivPanelText">
                                    <p>Gestión de Proyectos</p>
                            </div>
                        </div>
                    </div>
                    <div className="serviceDivPanel">
                        <div className="serviceDivImgPanelContain">
                            <div className="serviceDivImgContainer grid">
                                <div className="serviceDivImg">
                                    <img src={serviceHomeImg4} alt="Service Image 4" />
                                </div>
                            </div>
                            <div className="serviceDivPanelText">
                                    <p>Data Science</p>
                            </div>
                        </div>
                    </div>
                    <div className="serviceDivPanel">
                        <div className="serviceDivImgPanelContain">
                            <div className="serviceDivImgContainer grid">
                                <div className="serviceDivImg">
                                    <img src={serviceHomeImg5} alt="Service Image 5" />
                                </div>
                            </div>
                            <div className="serviceDivPanelText">
                                    <p>Tecnología Alternativa</p>
                            </div>
                        </div>
                    </div>
                    <div className="serviceDivPanel">
                        <div className="serviceDivImgPanelContain">
                            <div className="serviceDivImgContainer grid">
                                <div className="serviceDivImg">
                                    <img src={serviceHomeImg6} alt="Service Image 6" />
                                </div>
                            </div>
                            <div className="serviceDivPanelText">
                                    <p>Diseño Gráfico</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}
   
   export default Services
