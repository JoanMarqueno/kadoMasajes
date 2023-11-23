import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import Navbar from './components/navBar2';
import { Footer } from "./components/footer";




function App() {
  return (
    <Router>
      
      <Navbar/>
  
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
