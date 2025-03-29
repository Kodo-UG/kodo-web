import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FindScholarships from "../../components/about/FindScholarships";
import CustomContainer from "../../components/ShredComponents/CustomerContainer";
// import "./blog.css";
import './blog.css';

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
  {
    id: 3,
    title: "Scholarship Essay and Win BIG [2022 Edition]",
    date: "12 December 2024",
    image:
      "https://res.cloudinary.com/digrh1wj1/image/upload/v1742432182/Rectangle_23_1_qechtr.png",
  },
  {
    id: 4,
    title: "Scholarship Essay and Win BIG [2022 Edition]",
    date: "12 December 2024",
    image:
      "https://res.cloudinary.com/digrh1wj1/image/upload/v1742432182/Rectangle_23_1_qechtr.png",
  },
  // Add the rest of the blogPosts...
];

export default function BlogPage() {
  return (
    <div className="">
    <CustomContainer>  <main className="">
      <div
        className="blog-margin"
      >
        <h1 className="text-responsive-4xl mb-4">
          Blog
        </h1>

        <div className="mb-10 flex flex-wrap gap-3">
          {["All", "Recent", "Last Month", "Last Year"].map((filter, index) => (
            <button
              key={index}
              className={`px-6 py-2 text-sm font-medium ${
                index === 0
                  ? "bg-bg"
                  : "border border-border text-text hover-bg"
              }`}
              style={{
                borderRadius: 30
              }}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

        <div className="mb-10 grid gap-6 md-grid-cols-3 lg-grid-cols-4">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group overflow-hidden"
            >
              <div className="aspect-1-2-1 relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-300 group-hover-scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="mb-2 text-lg font-medium leading-tight text-color group-hover-text">
                  {post.title}
                </h2>
                <p className="text-sm text">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-1 hover-bg-1">
            <ChevronLeft className="h-5 w-5 text-1" />
          </button>
          <span className="text-sm text-1">1 of 226</span>
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-1 hover-bg-1">
            <ChevronRight className="h-5 w-5 text-1" />
          </button>
        </div>
      </main>

      <section className="">
        <div className=" rounded-4xl relative">
          <FindScholarships />
        </div>
        <div className="h-60 w-full"/>
      </section></CustomContainer>
    </div>
  );
}
