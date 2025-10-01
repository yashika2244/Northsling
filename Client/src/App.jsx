import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./Header/Navbar"
import Home from "./pages/Home"
import Footer from "./Footer/Footer"
// import About from "./pages/About"
// import Services from "./pages/Services"
// import Cases from "./pages/Cases"
// import Careers from "./pages/Careers"
// import Contact from "./pages/Contact"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
           <Footer /> 
    </Router>
  )
}

export default App
