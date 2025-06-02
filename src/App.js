import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import FogTransition from './components/FogTransition/FogTransition';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <FogTransition>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      </FogTransition>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
