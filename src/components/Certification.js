  import React, { useState } from "react";
import CertificationCard from "./CertificationCard";
import Button from "./Button";
import CertificationData from "../data/CertificationData";
import "../styles/component.css";
import "../styles/certification-card.css";

const Certification = () => {
  const [visibleCertification, setVisibleCertification] = useState(4);

  const [allCertification] = useState(CertificationData);

  const loadMoreCertification = () => {
    setVisibleCertification(visibleCertification + 4);
  };

  const loadLessCertification = () => {
    setVisibleCertification(visibleCertification - 4);
  };

  return (
    <div className="component-container" id="certified">
      <h1>Explore My Global Certifications!</h1>

      <p>
        Take a tour through the Global Certifications. {" "}
        <span style={{ backgroundColor: "var(--primary-color)" }}>:)</span>{" "}
      </p>

      <div className="container-certification">
        {allCertification.slice(0, visibleCertification).map((certified, index) => (
          <CertificationCard key={index} certified={certified} />
        ))}
      </div>

      <div className="button-container">
        {visibleCertification < allCertification.length && (
          <Button buttonName={"Load More"} onClickFunction={loadMoreCertification} />
        )}

        {visibleCertification > 4 && (
          <Button buttonName={"Load Less"} onClickFunction={loadLessCertification} />
        )}
      </div>
    </div>
  );
};

export default Certification;
