import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import Navbar from './components/navBar';
import { Footer } from "./components/footer";
import TarifasPage from './pages/TarifasPage';




function App() {
  return (
    <Router>
      
      <Navbar/>
  
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path='/tarifas' element={<TarifasPage/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
