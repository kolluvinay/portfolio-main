import React from "react";
import "../styles/component.css";
import "../styles/certification-card.css";

const Experience = () => {
  return (
    <div className="component-container" id="experience">
      <h1>Experience</h1>

      <table className="education-table">
        <thead>
          <tr>
            <th>Internship</th>
            <th>Experience Gained</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AWS Cloud Virtual Internship</td>
            <td>Completed an AWS Cloud Virtual Internship, gaining hands-on experience with cloud services, deploying applications, 
            managing resources, and enhancing skills in networking, security, and automation through real-world projects.</td>
            <td>Dec 2022 - Feb 2023</td>
            
          </tr>
          <tr>
            <td>AI-ML Virtual Internship</td>
            <td>Completed an AI-ML Virtual Internship, working on real-world projects involving data preprocessing, model training, and 
            evaluation, gaining practical experience in machine learning algorithms, data analysis, and Python programming.</td>
            <td>May 2023 - July 2023</td>
            
          </tr>
          
        </tbody>
      </table>

      {/* Inline CSS for the table */}
      <style jsx>{`
        .education-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }

        .education-table th,
        .education-table td {
          border: 1px solid #ddd;
          padding: 12px;
          text-align: left;
        }

        .education-table th {
          background-color: #f2f2f2;
          font-weight: bold;
        }

        .education-table tr:nth-child(even) {
          background-color: #f9f9f9;
        }

        .education-table tr:hover {
          background-color: #f1f1f1;
        }
      `}</style>
    </div>
  );
};

export default Experience;
