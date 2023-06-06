import beginServiceImg from "../../Assets/img4.jpg"
import "./BeginService.scss"
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const BeginService = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <div className="beginService">
            <div data-aos="fade-up" data-aos-duration="2500" className="beginServiceDivImg">
                <img src={beginServiceImg} className="beginServicetImg" alt="Service Image" />
            </div>
            <div data-aos="fade-down" data-aos-duration="2500" className="beginServiceText">
                <h1>Servicios</h1>
                <h4>___________</h4>
            </div>
        </div>
    )
}

export default BeginService