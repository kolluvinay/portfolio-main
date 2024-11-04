import React, { useState } from "react";
import { motion } from 'framer-motion';
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaCertificate,
  FaGraduationCap  // Import FaGraduationCap for Education icon
} from "react-icons/fa";
import {
  AiFillHome,
  AiFillInfoCircle,
  AiFillProject,
  AiFillContacts
} from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import { BiChevronDown } from 'react-icons/bi';
import { HiDocumentReport } from 'react-icons/hi';
import "../styles/header.css";
import logo from "../assets/img/logo.png";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);

    document.body.style.overflow = !click ? 'hidden' : 'auto';
  };

  return (
    <>
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <motion.div
          className="menu-toggle-icon"
          onClick={handleClick}
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
        >
          {click ? (
            <FaTimes />
          ) : (
            <FaBars />
          )}
        </motion.div>

        <ul className={`nav-menu ${click ? "active" : ""}`}>
          <li>
            <a href="/#">
              <AiFillHome className="nav-menu-icon" />
              Home
            </a>
          </li>

          <li>
            <a href="/#about">
              <AiFillInfoCircle className="nav-menu-icon" />
              About
            </a>
          </li>

          <li>
            <a href="/#education">
              <FaGraduationCap className="nav-menu-icon" /> 
              Education
            </a>
          </li>

          <li>
            <a href="/#certified">
              <FaCertificate className="nav-menu-icon" /> 
              Certification
            </a>
          </li>

          <li>
            <a href="/#skills">
              <GiSkills className="nav-menu-icon" />
              Skills
            </a>
          </li>

          <li>
            <a href="/#project">
              <AiFillProject className="nav-menu-icon" />
              Projects
            </a>
          </li>

          <li>
            <a href="/#experience">
              <GiSkills className="nav-menu-icon" /> 
              Experience
            </a>
          </li>

          <li>
            <a href="/#contact">
              <AiFillContacts className="nav-menu-icon" />
              Contact
            </a>
          </li>

          <li className="sub-menu-li">
            <a href={`/`}>
              <HiDocumentReport className="nav-menu-icon" />
              Social Media
              <BiChevronDown className="nav-menu-icon" />
            </a>

            <ul className="sub-menu">
              <li>
                <a href="https://www.linkedin.com/in/kollu-vinay-906793248/"
                  rel="noreferrer"
                  target="_blank">
                  <FaLinkedin className="nav-menu-icon" />
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/kolluvinay"
                  rel="noreferrer"
                  target="_blank">
                  <FaGithub className="nav-menu-icon" />
                  Github
                </a>
              </li>

              <li>
                <a href="https://www.instagram.com/"
                  rel="noreferrer"
                  target="_blank">
                  <FaInstagram className="nav-menu-icon" />
                  Instagram
                </a>
              </li>
            </ul>
          </li>
        </ul>

      </div>
    </>
  );
};

export default Header;
