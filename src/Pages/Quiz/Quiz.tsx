import { useEffect, useState, useMemo } from "react";
import "./Quiz.css";

interface Question {
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
}

const decodeHtml = (html: string) => {
  if (typeof window === "undefined") return html;
  const textarea = document.createElement("textarea");
  textarea.innerHTML = html;
  return textarea.value;
};

const shuffle = (array: string[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export default function Quiz() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://the-trivia-api.com/api/questions?limit=5&categories=science,history")
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data);
        setQuestions(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching quiz:", err);
        setLoading(false);
      });
  }, []);

  const handleSelect = (answer: string) => {
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[current] = answer;
      return newAnswers;
    });
  };

  const handleNext = () => {
    if (answers[current] === questions[current].correctAnswer) {
      setScore((prev) => prev + 1);
    }
    setCurrent((prev) => prev + 1);
  };

  const question = questions[current];
  const options = useMemo(() => {
    if (!question) return [];
    return shuffle([question.correctAnswer, ...question.incorrectAnswers]);
  }, [question]);

  if (loading) {
    return <div className="quiz-container">Loading questions...</div>;
  }

  if (!loading && questions.length === 0) {
    return (
      <div className="quiz-container">
        <h2>No questions available 😢</h2>
        <p>Try again later.</p>
      </div>
    );
  }

  if (current >= questions.length) {
    return (
      <div className="quiz-container">
        <h2>Quiz Finished!</h2>
        <p>
          Your Score: {score} / {questions.length}
        </p>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h3>Question {current + 1}</h3>
      <h2>{decodeHtml(question.question)}</h2>

      <div className="quiz-options">
        {options.map((option, idx) => (
          <button
            key={idx}
            className={`quiz-option ${
              answers[current] === option ? "selected" : ""
            }`}
            onClick={() => handleSelect(option)}
          >
            {decodeHtml(option)}
          </button>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={!answers[current]}
        className="next-btn"
      >
        Next
      </button>
    </div>
  );
}
