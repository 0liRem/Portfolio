import { useState, useEffect } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Projects.css";

const Projects = () => {
  //Lista proyectos
  const [projects] = useState([
    {
      id: 1,
      title: "Ecommerce",
      description: "Un ecommerce simple de libros donde se tiene carrito persistente, sistema de recomendaciones y búsqueda dinámica.",
      tags: ["React", "CSS"],
      image: process.env.PUBLIC_URL + '/assets/images/libros.png',
      githubLink: "https://github.com/0liRem/Ecommerce",
      demoLink: "https://0lirem.github.io/Ecommerce/",
    },
    {
      id: 2,
      title: "Stress test database",
      description: "Usando PostgreSQL y python probar las transacciones para crear un entorno de estrés y ver que tantas reservas falsas se pueden llegar a crear.",
      tags: ["Python", "PSQL"],
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjg9qQiOjpHhmTJJDo72-m-P-3SYwBegMSfLBMS_7Sgslbl9CKx0q8k0axtRfG4S-nvhm9EDwJvwm6zs-1bugbafLCPW4Z8Z6JD05jcAfGEPFyLn8K0ERKC3Ekfm6xI8QXuhOov29iM5fj1/s1600/Stress1.gif",
      githubLink: "https://github.com/0liRem/TicketManagmentAPI",
      demoLink: "",
    },
    {
      id: 3,
      title: "Novela visual WEB",
      description: "Utilizando solamente javascript como cerebro, creé una novela visual interactiva con varios finales",
      tags: ["JavaScript","HTML5","CSS"],
      image: "/assets/images/libros.png",
      githubLink: "",
      demoLink: "",
    },
  ]);

  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
//Para efectos
  return (
    <div className="projects-page">

      <div 
        className="mouse-move-effect"
        style={{
          '--mouse-x': `${mousePosition.x}%`,
          '--mouse-y': `${mousePosition.y}%`
        }}
      />

      <h1 className="projects-title">Mis <span className="text-blood">Proyectos</span></h1>
      <p className="projects-subtitle">Proyecto más adelante, pero por qué siempre en manada</p>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            image={project.image}
            githubLink={project.githubLink}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;