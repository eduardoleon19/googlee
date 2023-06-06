import beginHomeImg from "../../Assets/img1.jpeg"
import "./BeginHome.css"
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const BeginHome = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <div className="beginHome">
            <div data-aos="fade-up" data-aos-duration="2500" className="beginHomeDivImg">
                <img src={beginHomeImg} className="beginHomeImg" alt="Home Image" />
            </div>
            <div data-aos="fade-down" data-aos-duration="2500" className="beginHomeText">
                <h4>Lorem, ipsum</h4>
                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
            </div>
        </div>
    )
}

export default BeginHome