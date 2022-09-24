import "./FooterStyles.css";
import { useNavigate, Link } from "react-router-dom";
import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
const Footer = () => {
  let navigate = useNavigate();

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Nilüfer/Bursa</p>
              <p>Türkiye</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +90 534 065 54 52
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              bsurumcuoglu@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the individual</h4>
          <p>
            This is me, Burak Sürümcüoğlu. Computer Engineering Graduate & Full
            Stack Developer. I'm passionate about learning new tech and
            expanding my knowledge.
          </p>
          <div className="social">
            <FaInstagram
              onClick={() =>
                (window.location.href =
                  "https://www.instagram.com/surumcuoglu/")
              }
              size={30}
              style={{ color: "#fff", marginRight: "1rem", cursor: "pointer" }}
            />
            <FaGithub
              onClick={() =>
                (window.location.href = "https://github.com/burakS-cloud")
              }
              size={30}
              style={{ color: "#fff", marginRight: "1rem", cursor: "pointer" }}
            />
            <FaLinkedin
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/burak-s%C3%BCr%C3%BCmc%C3%BCo%C4%9Flu-853a081b4/")
              }
              size={30}
              style={{ color: "#fff", marginRight: "1rem", cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
