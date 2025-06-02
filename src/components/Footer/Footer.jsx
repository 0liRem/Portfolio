import { useRef, useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Footer.css";

//FOOTER
const Footer = () => {
  const [isBonfireLit, setIsBonfireLit] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [soulCount, setSoulCount] = useState(1337);
  const bonfireRef = useRef(null);
//Souls
  useEffect(() => {

    const targetSouls = 1337;
    let currentSouls = 0;
    const increment = targetSouls / 100;
    
    const soulTimer = setInterval(() => {
      currentSouls += increment;
      if (currentSouls >= targetSouls) {
        currentSouls = targetSouls;
        clearInterval(soulTimer);
      }
      setSoulCount(Math.floor(currentSouls));
    }, 20);

    return () => clearInterval(soulTimer);
  }, []);

//Bonfire
  const handleBonfireClick = () => {
    if (!isBonfireLit) {

      const link = document.createElement("a");
      link.href = "/assets/docs/CV.pdf";
      link.download = "CV_Viau_Olivier.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);


      setIsBonfireLit(true);
      setShowMessage(true);
      localStorage.setItem("bonfireLit", "true");

   
      setTimeout(() => setShowMessage(false), 3000);
      
      setSoulCount(prev => prev + 500);
    }
  };

  useEffect(() => {
    if (isBonfireLit && bonfireRef.current) {
      const bonfire = bonfireRef.current;
      const interval = setInterval(() => {
        bonfire.style.opacity = Math.random() * 0.3 + 0.7;
      }, 300);
      return () => clearInterval(interval);
    }
  }, [isBonfireLit]);


  const handleSoulRuneClick = () => {
    setSoulCount(prev => prev + Math.floor(Math.random() * 100) + 50);
    

    const rune = document.querySelector('.soul-rune');
    if (rune) {
      rune.style.transform = 'scale(1.2)';
      setTimeout(() => {
        rune.style.transform = 'scale(1)';
      }, 200);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
     
        <div className="bonfire-container">
          <div
            ref={bonfireRef}
            className={`bonfire ${isBonfireLit ? "lit" : ""}`}
            onClick={handleBonfireClick}
            title={isBonfireLit ? "Bonfire Lit - CV Downloaded" : "Light Bonfire to Download CV"}
          />
          <div className="bonfire-label">
            {isBonfireLit ? "Rest Here" : "Light for CV"}
          </div>
          {showMessage && (
            <div className="bonfire-message">
               Bonfire Lit 
            </div>
          )}
        </div>


        <div className="dark-souls-message">
          <div className="message-container">
            <p className="message-text">
              No esperaba mensaje
            </p>
            <p className="message-subtitle">
              por lo tanto, ¡Alabado sea mensaje!
            </p>
          </div>
        </div>

        <div className="soul-info">
          <div 
            className="soul-rune"
            onClick={handleSoulRuneClick}
            title="Click to gain souls"
          />
          <div className="soul-counter">
            <div>{soulCount.toLocaleString()}</div>
            <div className="soul-label">Souls</div>
          </div>
        </div>
        <div className="social-links">
          <a 
            href="https://github.com/0liRem" 
            target="_blank" 
            rel="noopener noreferrer"
            title="GitHub - Repository of Code"
          >
            <FaGithub className="social-icon" />
          </a>
          <a 
            href="https://gt.linkedin.com/in/olivier-viau-seifert-888079264" 
            target="_blank" 
            rel="noopener noreferrer"
            title="LinkedIn - Professional Network"
          >
            <FaLinkedin className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;