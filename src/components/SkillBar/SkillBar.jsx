import { useState, useEffect } from "react";
import "./Skills.css";

const Skills = () => {
  // Efecto para animar las barras al cargar la página
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  // Datos de habilidades (puedes personalizarlos)
  const skillsData = [
    { name: "React", level: 85, category: "Frontend" },
    { name: "JavaScript", level: 90, category: "Frontend" },
    { name: "CSS/Sass", level: 80, category: "Frontend" },
    { name: "Node.js", level: 75, category: "Backend" },
    { name: "Python", level: 70, category: "Backend" },
    { name: "MongoDB", level: 65, category: "Database" },
    { name: "Git", level: 85, category: "Herramientas" },
    { name: "Figma", level: 60, category: "Diseño" },
  ];

  // Filtro por categoría
  const [filter, setFilter] = useState("Todas");

  const categories = ["Todas", ...new Set(skillsData.map(skill => skill.category))];

  const filteredSkills = filter === "Todas" 
    ? skillsData 
    : skillsData.filter(skill => skill.category === filter);

  return (
    <div className="skills-page">
      <h1 className="skills-title">Mis <span className="text-blood">Habilidades</span></h1>
      <p className="skills-subtitle">Domino estas artes oscuras del desarrollo.</p>

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

      {/* Lista de habilidades */}
      <div className="skills-list">
        {filteredSkills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="skill-bar-container">
              <div 
                className={`skill-bar ${animated ? "animate" : ""}`}
                style={{ width: animated ? `${skill.level}%` : "0%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;