import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FrontPage from "./pages/frontPage";
import Header from "./pages/header";
import Footer from "./pages/footer";
import ErrorPage from "./errorpage";
import { useState } from "react";

function App() {
  const [selectedOption, setSelectedOption] = useState("home");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="App">
      <Router>
        <Header handleOptionChange={handleOptionChange} />
        <Routes>
          <Route
            path="/"
            element={<FrontPage selectedOption={selectedOption} />}
          />
          <Route path="/home" element={<FrontPage selectedOption="home" />} />
          <Route
            path="/latest"
            element={<FrontPage selectedOption="latest" />}
          />
          <Route path="/tech" element={<FrontPage selectedOption="tech" />} />
          <Route
            path="/sports"
            element={<FrontPage selectedOption="sports" />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
