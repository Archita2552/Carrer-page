import React from 'react';

const JobCard = ({ title, description }) => {
  return (
    <div className="job-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="card-buttons">
        <button className="apply-btn">Apply</button>
        <button className="view-btn">View Job</button>
      </div>
    </div>
  );
};

export default JobCard;
