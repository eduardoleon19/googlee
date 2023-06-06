import beginHomeImg from "../../Assets/img2.jpg"
import "./BeginAbout.scss"
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const BeginAbout = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <div className="beginAbout">
            <div data-aos="fade-up" data-aos-duration="2500" className="beginAboutDivImg">
                <img src={beginHomeImg} className="beginAboutImg" alt="About Image" />
            </div>
            <div data-aos="fade-down" data-aos-duration="2500" className="beginAboutText">
                <h1>Nosotros</h1>
                <h4>___________</h4>
            </div>
        </div>
    )
}

export default BeginAbout