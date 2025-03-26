import React from "react";
import "./scholarship.css";

export function ScholarshipCard({ title, description, dueDate, amount }) {
  return (
    <div className="scholarship-card">
      <div className="scholarship-content">
        <h3 className="scholarship-title">{title}</h3>
        <p className="scholarship-description">{description}</p>
        <div className="scholarship-info">
          <div className="scholarship-due">
            <span>Due:</span>
            <span>{dueDate}</span>
          </div>
          <div className="scholarship-award">
            <span>Award</span>
            <p>{amount}</p>
          </div>
        </div>
      </div>
      <div className="scholarship-buttons">
        <button className="scholarship-save-btn">Save</button>
        <button className="scholarship-apply-btn">Apply Now →</button>
      </div>
    </div>
  );
}
