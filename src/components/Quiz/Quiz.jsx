import { useState, useEffect } from "react";
import axios from "axios";

import FlippableCard from "../FlippableCard/FlippableCard";

export default function Quiz({ language, difficulty }) {
  const [quiz, setQuiz] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    async function fetchQuiz() {
      const response = await axios.get(
        `http://localhost:3000/${language}/${difficulty}`
      );
      setQuiz(response.data);
    }
  }, [language, difficulty]);

  return (
    <div>
      {quiz.length > 0 ? (
        <div>
          <h1>{quiz[currentQuestion].english }</h1>
          <div>
            {quiz[currentQuestion].answers.map((answer, index) => (
              <button key={index}>{answer}</button>
            ))}
          </div>
          <button onClick={() => setCurrentQuestion(currentQuestion + 1)}>
            Next
          </button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
