import React, { useState } from "react";
import "./App.css";
import FrontPage from "./pages/frontPage";
import Header from "./pages/header";
import Footer from "./pages/footer";

function App() {
  const [selectedOption, setSelectedOption] = useState("home");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="App">
      <Header handleOptionChange={handleOptionChange} />
      <FrontPage selectedOption={selectedOption} />
      <Footer />
    </div>
  );
}

export default App;
