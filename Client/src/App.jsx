import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
import ScrollToTop from "./components/ScrollToTop";
import Board from "./pages/company/Board.jsx";
import Career from "./pages/company/career/Career.jsx";
import Awards from "./pages/company/Awards.jsx";
import Foundations from "./pages/company/Foundations.jsx";
import CompanyPanel from "./pages/company/CompanyPanel.jsx";
import Events from "./pages/company/Events.jsx";
import About from "./pages/company/about/About.jsx";
import ServiceDetail from "./pages/services/ServiceDetail.jsx";
import IndustyDetails from "./pages/industries/IndustyDetails.jsx";

function AppWrapper() {
  const location = useLocation(); // gives current route path
  const showFooter =
    location.pathname === "/" ||
    (location.pathname.startsWith("/services/") &&
      location.pathname !== "/services"  ) ||
       (location.pathname.startsWith("/company/") &&
      location.pathname !== "/company"  );
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
        <Route path="/industries" element={<IndustrySolutions />} />
        <Route path="/industries/:industryId" element={<IndustyDetails />} />

        {/* <Route path="/company" element={<CompanyAbout />} /> */}
        <Route path="/company" element={<CompanyAbout />} />
        <Route path="/company/about" element={<About />} />
        <Route path="/company/board-directors" element={<Board />} />
        <Route path="/company/career" element={<Career />} />
        <Route path="/company/awards" element={<Awards />} />
        <Route path="/company/events" element={<Events />} />
        <Route path="/company/foundations" element={<Foundations />} />
        <Route path="/investors" element={<CompanyInsights />} />
        <Route path="/success-stories" element={<Success />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/*  Show Footer only on home page */}
      {showFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppWrapper />
    </Router>
  );
}

export default App;
