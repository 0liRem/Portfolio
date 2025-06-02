import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./FogTransition.css";

const FogTransition = ({ children }) => {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeIn");
  const location = useLocation();

  useEffect(() => {
    setTransitionStage("fadeOut");
  }, [location]);

  //Transición
  useEffect(() => {
    if (transitionStage === "fadeOut") {
      const timer = setTimeout(() => {
        setDisplayChildren(children);
        setTransitionStage("fadeIn");
      }, 500); //tiempo 
      return () => clearTimeout(timer);
    }
  }, [transitionStage, children]);

  return (
    <div className={`fog-transition ${transitionStage}`}>
      <div className="fog-overlay">
        <img 
          src="https://images.steamusercontent.com/ugc/952958633887425165/D1EF39437A139A0B43BB3886438897FC9037F009/?imw=200&imh=200&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" 
          alt="Niebla de transición" 
          className="fog-gif"
        />
      </div>
      {displayChildren}
    </div>
  );
};

export default FogTransition;