import HomeDefalut from "./pages/HomeDefalut";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <ScrollToTop />   {/* 🔥 THIS LINE IS IMPORTANT */}

      <Navbar />

      <Routes>
        <Route path="/" element={<HomeDefalut />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
