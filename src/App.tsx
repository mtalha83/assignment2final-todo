import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Todo from "./Pages/Todo/Todo";
import Quiz from "./Pages/Quiz/Quiz";
import MultiStepForm from "./Pages/MultiStepForm/MultiStepForm";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/multistep" element={<MultiStepForm />} />
      </Routes>
    </Router>
  );
}
