import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
import TopPin from "./components/shared/TopPin";

function App() {
  return (
    <Router>
      <TopPin />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
