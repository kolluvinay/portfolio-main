import { useParams } from "react-router-dom";
import CertificationData from "../data/CertificationData.js";
import { IoOpenOutline } from "react-icons/io5";
import NotFoundPage from "./NotFoundPage.js";
import { renderDescription } from "../Utils/HTMLFormatting.js";
import "../styles/certification-page.css";
import "../styles/page.css";

const CertificationPage = () => {
  const { id } = useParams();

  const certified = CertificationData.find((certified) => certified.id === Number(id));

  if (!certified) {
    console.log("No project found with the provided id");
    return <NotFoundPage message="No project found with the provided id" />;
  }

  const {
    title,
    p_card1,
    p_card2,
    imgUrl,
    linkSite,
    description,
  } = certified;

  return (
    <div className="container-certification-page">
      <h1>{title}</h1>

      <img src={imgUrl} alt="img-project" />

      <div className="container-cards">
        <p className="card-item">{p_card1}</p>
        <p className="card-item">{p_card2}</p>
      </div>

      {linkSite && (
        <a href={linkSite}>
          <p>
            <b>Open Certificate in Credly</b> <IoOpenOutline />
          </p>
        </a>
      )}

      <div className="description">{renderDescription(description)}</div>

      

      
    </div>
  );
};

export default CertificationPage;
