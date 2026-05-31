
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectsDetails from "./pages/ProjectsDetails";
import Services from "./pages/Services";
import ServicesDetails from "./pages/ServiceDetails";


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/:id" element={<ProjectsDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:id" element={<ServicesDetails />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
