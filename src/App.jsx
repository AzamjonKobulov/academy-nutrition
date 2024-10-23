import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/layout/nav/Navbar";
import TopPin from "./components/shared/TopPin";
import Footer from "./components/layout/footer/Footer";
import Program from "./pages/Program";

function App() {
  return (
    <Router>
      <TopPin />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/program" element={<Program />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
