import React from "react";

const JobCard = ({ title, description }) => {
  return (
    <div className="job-card">
      <div className="main-container">
        <div className="heading">{title}</div>
        <div className="paragraph">{description}</div>
      </div>
      <div className="card-buttons">
        <button className="apply-btn">Apply</button>
        <button className="view-btn">View Job</button>
      </div>
    </div>
  );
};

export default JobCard;
