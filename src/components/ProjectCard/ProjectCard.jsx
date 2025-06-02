import { useState } from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, description, tags, image, githubLink, demoLink }) => {
  const [isHovered, setIsHovered] = useState(false);
//Base para los projectos
  return (
    <div 
      className={`project-card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
        <div className="project-overlay" />
      </div>

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>

        <div className="project-links">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
            GitHub
          </a>
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-link demo-link">
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;