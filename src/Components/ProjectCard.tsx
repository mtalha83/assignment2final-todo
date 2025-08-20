import { Link } from "react-router-dom";
import "./ProjectCard.css";

interface ProjectCardProps {
  title: string;
  image: string;
  github: string;
  live: string;
  link: string;
}

export default function ProjectCard({ title, image, github, live, link }: ProjectCardProps) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <div className="project-links">
        <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <span>|</span>
        <a href={live} target="_blank" rel="noopener noreferrer">Live</a>
      </div>
      <Link to={link} target="_blank" className="view-project-btn">View Project</Link>
    </div>
  );
}
