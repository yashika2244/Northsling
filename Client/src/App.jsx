import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Header/Navbar";
import Home from "./pages/Home";
import Footer from "./Footer/Footer";
import Services from "./pages/Services";
import IndustrySolutions from "./pages/Industries";
import CompanyAbout from "./pages/Company";
import CompanyInsights from "./pages/Investers";
import Resources from "./pages/Resources";
import Success from "./pages/success/Success";
import NotFound from "./pages/NotFound";

function AppWrapper() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<IndustrySolutions />} />
        <Route path="/company" element={<CompanyAbout />} />
        <Route path="/investors" element={<CompanyInsights />} />
        <Route path="/success-stories" element={<Success />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer on all pages */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
