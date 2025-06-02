import { useState, useEffect } from "react";
import "./Skills.css";

// Importar iconos de react-icons
import { 
  DiReact, 
  DiJavascript1, 
  DiCss3, 
  DiNodejs, 
  DiPython,
  DiMysql,
  DiGit,
  DiJava
} from "react-icons/di";
const Skills = () => {
  const [animated, setAnimated] = useState(false);
  const [filter, setFilter] = useState("Todas");

  // Datos de habilidades 
  const skillsData = [
    { name: "React", level: 70, category: "Frontend", icon: <DiReact /> },
    { name: "JavaScript", level: 85, category: "Frontend", icon: <DiJavascript1 /> },
    { name: "CSS", level: 70, category: "Frontend", icon: <DiCss3 /> },
    { name: "Node.js", level: 75, category: "Backend", icon: <DiNodejs /> },
    { name: "Python", level: 90, category: "Backend", icon: <DiPython /> },
    { name: "SQL", level: 85, category: "Database", icon: <DiMysql /> },
    { name: "Git", level: 85, category: "Herramientas", icon: <DiGit /> },
    { name: "Java", level: 75, category: "Backend", icon: <DiJava /> },
  ];

  
  const categories = ["Todas", ...new Set(skillsData.map(skill => skill.category))];

  
  const filteredSkills = filter === "Todas" 
    ? skillsData 
    : skillsData.filter(skill => skill.category === filter);


  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div className="skills-page">
      <h1 className="skills-title">
        Mis <span className="text-blood">Habilidades</span>
      </h1>
      <p className="skills-subtitle">
       Habilidad oh habilidad, por así decirlo prueba habilidad
      </p>

      {/* Filtro por categoría */}
      <div className="skills-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-button ${filter === category ? "active" : ""}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

   
      <div className="skills-list">
        {filteredSkills.map((skill) => (
          <div key={skill.name} className="skill-item fade-in">
            <div className="skill-header">
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="skill-bar-container">
              <div
                className={`skill-bar ${animated ? "animate" : ""}`}
                style={{ width: animated ? `${skill.level}%` : "0%" }}
                data-level={skill.level}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;