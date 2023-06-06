import beginSectorsImg from "../../Assets/img11.jpg"
import "./BeginSectors.scss"
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const BeginSectors = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <div className="beginSectors">
            <div data-aos="fade-up" data-aos-duration="2500" className="beginSectorsDivImg">
                <img src={beginSectorsImg} className="beginSectorstImg" alt="Sectors Image" />
            </div>
            <div data-aos="fade-down" data-aos-duration="2500" className="beginSectorsText">
                <h1>Sectores</h1>
                <h4>___________</h4>
            </div>
        </div>
    )
}

export default BeginSectors