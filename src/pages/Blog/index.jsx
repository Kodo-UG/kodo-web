import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FindScholarships from "../../components/about/FindScholarships";
import CustomContainer from "../../components/ShredComponents/CustomerContainer";
import "./blog.css";

const blogPosts = [
  {
    id: 1,
    title: "Scholarship Essay and Win BIG [2022 Edition]",
    date: "12 December 2024",
    image:
      "https://res.cloudinary.com/digrh1wj1/image/upload/v1742432182/Rectangle_23_zukqe2.png",
  },
  {
    id: 2,
    title: "Scholarship Essay and Win BIG [2022 Edition]",
    date: "12 December 2024",
    image:
      "https://res.cloudinary.com/digrh1wj1/image/upload/v1742432182/Rectangle_23_1_qechtr.png",
  },
  // Add the rest of the blogPosts...
];

export default function BlogPage() {
  return (
    <div className="blog-container">
      <CustomContainer>
        <main>
          <h1 className="blog-title">Blog</h1>

          <div className="blog-filters">
            {["All", "Recent", "Last Month", "Last Year"].map((filter, index) => (
              <button
                key={index}
                className={`blog-filter-button ${index === 0 ? "active" : ""}`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="blog-grid">
            {blogPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="blog-card">
                <div className="blog-image-container">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="blog-image"
                  />
                </div>
                <div className="blog-content">
                  <h2 className="blog-title-link">{post.title}</h2>
                  <p className="blog-date">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="pagination-container">
            <button className="pagination-button">
              <ChevronLeft className="text-[#666666]" />
            </button>
            <span className="pagination-text">1 of 226</span>
            <button className="pagination-button">
              <ChevronRight className="text-[#666666]" />
            </button>
          </div>
        </main>

        <section className="scholarship-section">
          <FindScholarships />
          <div className="scholarship-placeholder" />
        </section>
      </CustomContainer>
    </div>
  );
}
