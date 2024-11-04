import React from "react";
import "../styles/certification-card.css";
import { motion } from "framer-motion";
import { IoMdOpen } from "react-icons/io";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.2 },
  },
  hover: {
    opacity: 0.8,
    cursor: "pointer",
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const CertificationCard = ({ certified }) => {
  const openCertificationPage = () => {
    window.location.href = `/certified/${certified.id}`;
  };

  return (
    <motion.div
      className="certification-card"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      exit="exit"
      onClick={openCertificationPage}
    >
      <h2>{certified.title}</h2>

      <img src={certified.imgUrl} alt={`Screenshot of ${certified.title}`} />

      <p>{certified.subtitle}</p>

      <div className="open-certification">
        <p>Open Certificate </p>
        <IoMdOpen className="icon-open-certification" />
      </div>
    </motion.div>
  );
};

export default CertificationCard;
