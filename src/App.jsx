import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectsDetails from "./pages/ProjectsDetails";
import ServiceDetails from "./pages/ServiceDetails";
import Services from "./pages/Services";
import Gallery from "./components/Gallery";
import Contact from "./pages/Contact";
import Enquiry from "./pages/Enquiry";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/projects/:id" element={<ProjectsDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;