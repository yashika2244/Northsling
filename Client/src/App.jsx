import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import ScrollToTop from "./components/ScrollToTop"; // make sure to import

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
        <Route path="/career" element={<Resources />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <AppWrapper />
    </Router>
  );
}

export default App;
