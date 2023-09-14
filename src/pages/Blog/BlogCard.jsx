import React from "react";
import { Link } from "react-router-dom";
import KodoImageLoader from "../../components/KodoImageLoader";

function BlogCard({ image, blogType, tittle, text, id }) {
  const truncateText = (text, maxWords) => {
    const wordsArray = text.split(" ");
    if (wordsArray.length > maxWords) {
      return wordsArray.slice(0, maxWords).join(" ") + "...";
    } else {
      return text;
    }
  };

  return (
    <div class="">
      <div class="courses-item mb-30 hover-zoomin " style={{ height: "38rem" }}>
        <div class="thumb fix">
          <KodoImageLoader src={image} alt="blogImage" />
        </div>
        <div class="courses-content bg-red-600" style={{ height: "45rem" }}>
          <div class="cat">
            <i class="fal fa-graduation-cap"></i> {blogType}
          </div>
          <h3>
            <a href="#">{truncateText(tittle, 8)}</a>
          </h3>
          <p>{truncateText(text, 30)}</p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              height: "10vh",
            }}
          >
            <Link to={`/blog/${id}`} class="readmore">
              Read More <i class="fal fa-long-arrow-right"></i>
            </Link>

            <div
              style={{
                marginTop: ".5rem",
              }}
              className="icon"
            >
              <KodoImageLoader
                src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688355412/cou-icon_wpvyuu.png"
                alt="blookImage"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
