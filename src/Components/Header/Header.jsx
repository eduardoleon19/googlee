import logo from "../../Assets/logogoogle.png";
import { CgMenuGridO } from "react-icons/cg";
import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [active, setActive] = useState("listDiv")

    const showListBar = () => {
        const navBarListDiv = document.getElementById("navBarList")
        if (navBarListDiv.className == "listDiv showToggleList") {
            setActive("listDiv")
        } else {
            setActive("listDiv showToggleList")    
        }
        
    }

    return(
        <div className="header">
            <div className="headerDiv flex">
                <div className="logoDiv">
                    <img src={logo} className="logo" alt="Logo"/>
                </div>
                <div id="navBarList" className={active}>
                    <ul className="flex">
                        <Link to="/">
                            <li onClick={showListBar}>Inicio</li>                        
                        </Link>
                        <Link to="/nosotros">
                            <li onClick={showListBar}>Nosotros</li>                        
                        </Link>
                        <Link to="/servicios">
                            <li onClick={showListBar}>Servicios</li>
                        </Link>
                        <Link to="/sectores">
                            <li onClick={showListBar}>Sectores</li>
                        </Link>
                    </ul>
                    <Link to="/contacto">
                        <button onClick={showListBar} className="btn btnList">Contacto</button>                        
                    </Link>
                </div>
                <Link to="/contacto">
                    <button className="btn btnBar">Contacto</button>                        
                </Link>
                <div className="toggleIcon" onClick={showListBar}>
                    <CgMenuGridO className="icon" />
                </div>
            </div>
        </div>
    )
}

export default Header
