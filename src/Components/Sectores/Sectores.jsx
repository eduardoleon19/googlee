import { AiFillBank } from "react-icons/ai";
import { BiStoreAlt } from "react-icons/bi";
import { BsHeartPulseFill } from "react-icons/bs";
import { BiBookOpen } from "react-icons/bi";
import { MdSettingsInputAntenna } from "react-icons/md";
import { MdSettingsApplications } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { FaWalking } from "react-icons/fa";
import "./Sectores.scss";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Sectores = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
       <div className="sectore">
            <div data-aos="fade-up" data-aos-duration="2500" className="sectorContainer grid">
                <div data-aos="fade-up" data-aos-duration="2500" className="sectorDivText grid">
                    <h5>Sectores</h5>
                    <p>Google ha participado de proyectos en los siguientes sectores:</p>
                </div>
                <div className="sectorDivIcons grid">
                    <div data-aos="fade-right" data-aos-duration="2500" className="sectorDivIcon">
                        <div className="sectorIcon">
                            <AiFillBank className="icon" />
                        </div>
                        <div className="sectorDivPe">
                            <p>Banca</p>
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="2500" className="sectorDivIcon">
                        <div className="sectorIcon">
                            <BiStoreAlt className="icon" />
                        </div>
                        <div className="sectorDivPe">
                            <p>Retail</p>
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="2500" className="sectorDivIcon">
                        <div className="sectorIcon">
                            <BsHeartPulseFill className="icon" />
                        </div>
                        <div className="sectorDivPe">
                            <p>Salud</p>
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="2500" className="sectorDivIcon">
                        <div className="sectorIcon">
                            <BiBookOpen className="icon" />
                        </div>
                        <div className="sectorDivPe">
                            <p>Educación</p>
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="2500" className="sectorDivIcon">
                        <div className="sectorIcon">
                            <MdSettingsApplications className="icon" />
                        </div>
                        <div className="sectorDivPe">
                            <p>Manufactura</p>
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="2500" className="sectorDivIcon">
                        <div className="sectorIcon">
                            <MdSettingsInputAntenna className="icon" />
                        </div>
                        <div className="sectorDivPe">
                            <p className="teleText">Telecomunicaciones</p>
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="2500" className="sectorDivIcon">
                        <div className="sectorIcon">
                            <AiFillCar className="icon" />
                        </div>
                        <div className="sectorDivPe">
                            <p>Sector Público</p>
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="2500" className="sectorDivIcon">
                        <div className="sectorIcon">
                            <FaWalking className="icon" />
                        </div>
                        <div className="sectorDivPe">
                            <p>Servicios</p>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}
   
export default Sectores
