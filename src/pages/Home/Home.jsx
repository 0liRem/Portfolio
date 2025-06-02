import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  //Texto animado
  const renderAnimatedText = (text, className = "") => {
    return text.split("").map((char, index) => (
      <span 
        key={index} 
        className={`letter ${className}`}
        style={{
          animationDelay: `${index * 0.1}s`,
        }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  // Movimiento por la posición del mouse
  const getParallaxStyle = () => {
    const moveX = (mousePosition.x - window.innerWidth / 2) * 0.01;
    const moveY = (mousePosition.y - window.innerHeight / 2) * 0.01;
    
    return {
      transform: `translate(${moveX}px, ${moveY}px)`
    };
  };

  return (
    <div className="home-container">
      <div 
        className="background" 
        style={{ 
          transform: `translateY(${scrollY * 0.5}px)`,
          ...getParallaxStyle()
        }}
      />

      <main className="content">
        <h1 className="title" style={getParallaxStyle()}>
          <span className="title-glow">
            {renderAnimatedText("Hechicero de la corte", "glow-letter")}
          </span> 
          <span className="title-main">
            {renderAnimatedText("Olivier Viau", "main-letter")}
          </span>
        </h1>
        
        <p className="subtitle">
          Un <span className="text-blood">hechicero de la Universidad del Valle de Guatemala</span> especializado en las tareas tras banbalinas dandole forma y lógica a los hechizos más
          peligrosos. Buscará siempre una solución ante cualquier problema y no se rendira a pesar de la adversidad. 
        </p>

        <div className="cta-buttons">
          <Link 
            to="/projects" 
            className={`cta-button ${isHovered ? "pulse" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Ver Mis Proyectos
          </Link>
          
          <Link 
            to="/skills" 
            download 
            className="cta-button cta-button-outline"
          >
            Mis Habilidades
          </Link>
        </div>
      </main>
      <div className="veil" />
    </div>
  );
};

export default Home;