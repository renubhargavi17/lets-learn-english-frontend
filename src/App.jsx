import "./App.scss";
import Language from "./components/Language/Language";
import Level from "./components/Level/Level.jsx";
import Quiz from "./components/Quiz/Quiz.jsx";
import Header from "./components/Header/Header.jsx";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [language, setLanguage] = useState(null);
  const [level, setLevel] = useState(null);

  return (
    <BrowserRouter>
      <div className="learnLanguage">
        <Header />

        <Routes>
          <Route path="/" element={<Language setLanguage={setLanguage} />} />
          <Route path="/difficulty" element={<Level setLevel={setLevel} />} />
          <Route
            path="/quiz/:language/:difficulty"
            element={<Quiz language={language} difficulty={level} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
