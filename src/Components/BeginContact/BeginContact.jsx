import beginContactImg from "../../Assets/img12.jpg"
import "./BeginContact.scss"
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const BeginContact = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

 return (
    <div className="beginContact">
        <div data-aos="fade-up" data-aos-duration="2500" className="beginContactDivImg">
            <img src={beginContactImg} className="beginContactImg" alt="Contact Image" />
        </div>
        <div data-aos="fade-down" data-aos-duration="2500" className="beginContactText">
            <h1>Contacto</h1>
            <h4>___________</h4>
        </div>
    </div>
    )
}

export default BeginContact