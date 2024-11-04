import logo from "../assets/img/logo.png";
import "../styles/footer.css";
import { FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <h2>EXPLORE</h2>

        <a href="/#">Homepage</a>

        <a href="/#about">About</a>

        <a href="/#education">Education</a>

        <a href="/#experience">Experience</a>

        <a href="/#skills">Skills</a>

        <a href="/#certified">Certifications</a>

        <a href="/#project">Projects</a>

        <a href="/contact">Contact</a>
      </div>

      <div className="footer-content">
        <h2>Contact</h2>

        <p>
          {" "}
          <b> Whatsapp:</b> +91 6304631566
        </p>

        <p>
          {" "}
          <b>Email: </b>kolluvinay2004@gmail.com
        </p>

        <div className="footer-social-icon">
          <a href="https://github.com/kolluvinay">
            <i>
              <AiFillGithub />
            </i>
          </a>

          <a href="https://www.instagram.com/">
            <i>
              {" "}
              <AiFillInstagram />
            </i>
          </a>

          <a href="https://www.linkedin.com/in/kollu-vinay-906793248/">
            <i>
              <FaLinkedinIn />
            </i>
          </a>

          <a href="mailto:kolluvinay2004@gmail.com">
            <i>
              <FaEnvelope />
            </i>
          </a>
        </div>
      </div>

      <div className="footer-content">
        <img src={logo} alt="Logo" className="footer-logo" />

        <h2>&copy; 2024 KOLLU VINAY. All rights reserved.</h2>
      </div>
    </div>
  );
};

export default Footer;
