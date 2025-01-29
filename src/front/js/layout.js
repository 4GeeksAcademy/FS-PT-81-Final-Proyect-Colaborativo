import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Registro } from "./pages/registro.jsx";
import { Login } from "./pages/login.jsx";
import  Cita  from "./pages/cita.jsx";
import  {Calendars} from "./component/calendar.js";
import { DoctorCards } from "./component/doctorCard.js";



const Layout = () => {

    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<Registro />} path="/registro" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Cita />} path="/cita" />
                        <Route element={<Calendars />} path="/calendar/:doctorId" />
                        <Route element={<DoctorCards />}  path="/doctors" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
