import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import AboutUs from "./components/AboutUs";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [textEnable, setTextEnable] = useState("Enable Dark Mode");
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setTextEnable("Enable Dark Mode");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      setTextEnable("Enable Light Mode");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="CaseConverter"
          mode={mode}
          toggleMode={toggleMode}
          textEnable={textEnable}
        />
        <div className="container">
          <Routes>
            <Route
              path="/about"
              caseSensitive={false}
              element={<AboutUs mode={mode} />}
            />
            <Route
              path="/"
              caseSensitive={false}
              element={
                <TextForm heading="Enter Your Text to Analyze" mode={mode} />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
