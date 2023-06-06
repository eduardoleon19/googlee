import logo2 from "../../Assets/logogoogle1.png";
import {TiSocialFacebook} from "react-icons/ti";
import {AiOutlineTwitter} from "react-icons/ai";
import {AiFillYoutube} from "react-icons/ai";
import {FaPinterestP} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.scss";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <div className="footer">
            <div data-aos="fade-up" data-aos-duration="2500" className="footerContainer grid">
                <div className="footerImgDiv">
                    <img src={logo2} alt="Logo Footer" />
                </div>
                <div className="footerInfoDiv">
                    <p><b>Google,</b> empresa consultora en tecnología de información se dedica a brindar soluciones personalizadas y escalables a nuestros clientes para ayudarlos a alcanzar sus objetivos de negocio. Contáctenos hoy para obtener más información sobre cómo podemos ayudarlo a usted y a su empresa a tener éxito en el mundo de la tecnología de la información.</p>
                </div>
                <div className="footerLinks">
                    <span>Enlaces</span>
                    <Link to="/">
                        <p href="">Inicio</p>
                    </Link>
                    <Link to="/nosotros">
                        <p href="">Nostros</p>
                    </Link>
                    <Link to="/servicios">
                        <p href="">Servicios</p>
                    </Link>
                    <Link to="/sectores">
                        <p href="">Sectores</p>
                    </Link>
                    <Link to="/contacto">
                        <p href="">Contacto</p>
                    </Link>
                </div>
                <div className="footerSocial">
                    <span>Redes Sociales</span>
                    <div className="footerSocialIcons flex">
                        <Link to="https://es-la.facebook.com/Google/about/">
                            <TiSocialFacebook className="socialIcon" />
                        </Link>
                        <Link to="https://twitter.com/Google">
                            <AiOutlineTwitter className="socialIcon" />
                        </Link>
                        <Link to="https://www.youtube.com/watch?v=xvFZjo5PgG0">
                            <AiFillYoutube className="socialIcon" />
                        </Link>
                        <Link to="https://www.pinterest.es/pin/678425131359655547/">
                            <FaPinterestP className="socialIcon" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="footerSign">
                <p>Diseñado | Desarrollado por Eduardo León</p>
            </div>
        </div>
    )
}

export default Footer