import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Quiz.scss";

import FlippableCard from "../FlippableCard/FlippableCard";

export default function Quiz() {
  const { language, difficulty } = useParams();
  const [quiz, setQuiz] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    async function fetchQuiz() {
      const response = await axios.get(
        `http://localhost:3000/${language}/${difficulty}`
      );
      setQuiz(response.data);
    }
    fetchQuiz();
  }, [language, difficulty]);

  return (
    <div className="quiz">
      {quiz.length > 0 ? (
        <FlippableCard
          backText={quiz[currentQuestion].english}
          frontText={quiz[currentQuestion][language].translation}
        />
      ) : (
        <div>Loading...</div>
      )}
      <div className="quiz__navigation">
        <button
          onClick={() => {
            setCurrentQuestion((prev) => {
              if (prev + 1 >= quiz.length) {
                return quiz.length - 1;
              }
              return prev + 1;
            });
          }}
        >
          Next
        </button>
        <button
          onClick={() => {
            setCurrentQuestion((prev) => {
              if (prev - 1 < 0) {
                return 0;
              }
              return prev - 1;
            });
          }}
        >
          Previous
        </button>
      </div>
    </div>
  );
}
