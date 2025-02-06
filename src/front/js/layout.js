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
import Cita from "./pages/cita.jsx";
import { Calendars } from "./component/calendar.js";
import { DoctorCards } from "./component/doctorCard.js";
import { RegistroEmpresas } from "./pages/registroEmpresa.jsx";
import { BotonElegir } from "./pages/botonElegir.jsx";
import { Cuentas } from "./pages/cuenta.jsx";
import { PerfilEmpresa } from "./pages/perfilEmpresa.jsx"
import { PerfilCliente } from "./pages/perfilcliente.jsx";





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
                        <Route element={<BotonElegir />} path="/elige" />
                        <Route element={<RegistroEmpresas />} path="/registroEmpresas" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Cita />} path="/cita" />
                        <Route element={<Cuentas />} path="cuenta" />
                        <Route element={<Calendars />} path="/calendar/:doctorId" />
                        <Route element={<PerfilCliente/>} path="/perfilcliente" />
                        <Route element={<PerfilEmpresa />} path="/perfilempresa" />
                        <Route element={<DoctorCards />} path="/doctors" />
                        <Route element={<Calendars />} path="/calendar/:doctorId" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
