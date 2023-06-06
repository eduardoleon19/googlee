import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePages/HomePage"
import AboutPage from "./Pages/AboutPage/AboutPage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ServicePage from "./Pages/ServicePage/ServicePage";
import SectorsPage from "./Pages/SectorsPage/SectorsPage";
import ContactPage from "./Pages/ContactPage/ContactPage";

function App() {
    return(
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/nosotros" element={<AboutPage />} />
                <Route exact path="/servicios" element={<ServicePage />} />
                <Route exact path="/sectores" element={<SectorsPage />} />
                <Route exact path="/contacto" element={<ContactPage />} />
            </Routes>
            <Footer />
        </Router>

    )
}

export default App
