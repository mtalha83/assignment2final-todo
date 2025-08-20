import ProjectCard from "../Components/ProjectCard";
import "./Home.css";

// Import project images
import todoImg from "../assets/images/todo.png";
import quizImg from "../assets/images/quiz.png";
import formImg from "../assets/images/form.png";

export default function Home() {
  const projects = [
    {
      title: "Todo App",
      image: todoImg,
      github: "https://github.com/mtalha83/assignment2-todo",
      live: "https://assignment2final-todo.vercel.app/todo",
      link: "/todo",
    },
    {
      title: "Quiz App",
      image: quizImg,
      github: "https://github.com/mtalha83/assignment2-todo",
      live: "https://assignment2final-todo.vercel.app/quiz",
      link: "/quiz",
    },
    {
      title: "Multi-Step Form",
      image: formImg,
      github: "https://github.com/mtalha83/assignment2-todo",
      live: "https://assignment2final-todo.vercel.app/multistep",
      link: "/multistep",
    },
  ];

  return (
    <div className="home-container">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}
