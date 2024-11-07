import "./App.scss";
import Language from "./components/Language/Language";
import Header from "./components/Header/Header.jsx";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [language, setLanguage] = useState(null);
  const [difficulty, setDifficulty] = useState(null);

  return (
    <BrowserRouter>
      <div className="learnLanguage">
        <Header />

        <Router>
          <Routes>
            <Route path="/" element={<Language setLanguage={setLanguage} />} />
            <Route
              path="/difficulty"
              element={<Language setLanguage={setLanguage} />}
            />
            <Route
              path="/quiz"
              element={<Language setLanguage={setLanguage} />}
            />
          </Routes>
        </Router>
      </div>
    </BrowserRouter>
  );
}

export default App;
