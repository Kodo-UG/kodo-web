import { ScholarshipCard } from "./ScholarshipCard";
import FAQ from "./FAQ";
import CustomContainer from "../components/ShredComponents/CustomerContainer";
import "./accordion.css"; // Import the CSS file

export default function Accordion() {
  return (
    <>
      <section className="accordion-section"
        style={{
            color: '#1d2855' 
        }}
      >
        <CustomContainer>
          <div className="accordion-container"
             
          > 
            <h1 className="accordion-title">
              Find the right
              <br />
              scholarships for you
            </h1>
            <div className="filter-buttons">
              <button className="filter-button primary">All Scholarships</button>
              <button className="filter-button secondary">STEM</button>
              <button className="filter-button secondary">Women</button>
              <button className="filter-button secondary">Sports</button>
            </div>
          </div>
          <div className="scholarship-list" 
          >
            {Array(7)
              .fill(null)
              .map((_, i) => (
                <ScholarshipCard
                  key={i}
                  title="Elizabeth Schalk Memorial Scholarship"
                  description="The scholarships are awarded to applicants with..."
                  dueDate="05/09/2023"
                  amount="£5,000"
                />
              ))}
          </div>
          <div className="pagination-controls">
            <button className="pagination-button">←</button>
            <span className="pagination-text">
              <span>1</span>
              <span className="text-muted">of</span>
              <span>225</span>
            </span>
            <button className="pagination-button">→</button>
          </div>
        </CustomContainer>
      </section>

      <CustomContainer>
        <section className="faq-section"
        >
          <div className="faq-grid">
            <div className="faq-image-container">
              <div className="faq-image">
                <img
                  src="https://res.cloudinary.com/digrh1wj1/image/upload/v1742428495/Group_4_cl8hlc.png"
                  alt="Student with backpack"
                />
              </div>
            </div>
            <FAQ />
          </div>
        </section>
      </CustomContainer>
    </>
  );
}
