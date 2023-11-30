import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import Navbar from './components/navBar';
import { Footer } from "./components/footer";
import TarifasPage from './pages/TarifasPage';
import GaleriaPage from './pages/GaleriaPage';
import Reserva from './pages/Reserva';
import SobreMi from './pages/SobreMi';




function App() {
  return (
    <Router>
      
      <Navbar/>
  
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path='/tarifas' element={<TarifasPage/>} />
        <Route path='/sobremi' element={<SobreMi/>} />
        <Route path='/galeria' element={<GaleriaPage/>} />
        <Route path='/reserva' element={<Reserva/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
