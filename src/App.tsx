import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import Navbar from './components/navBar';
import { Footer } from "./components/footer";
import TarifasPage from './pages/TarifasPage';
//import GaleriaPage from './pages/GaleriaPage';
import Reserva from './pages/Reserva';
import SobreMi from './pages/SobreMi';
import NotFound from './pages/NotFound';
import Rituales from "./pages/Rituales";
import AvisoLegal from "./pages/AvisoLegal";
import ScrollToTop from "./components/scrollTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rituales" element={<Rituales />} />
        <Route path="/tarifas" element={<TarifasPage />} />
        <Route path="/sobremi" element={<SobreMi />} />
        {/**<Route path='/galeria' element={<GaleriaPage/>} />**/}
        <Route path="/avisolegal" element={<AvisoLegal />} />
        <Route path="/reserva" element={<Reserva />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
