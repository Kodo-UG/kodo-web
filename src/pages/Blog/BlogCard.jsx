import React from "react";

function BlogCard({ image, blogType, tittle, text }) {
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
          <a href="#">
            <img src={image} alt="contact-bg-an-01" />
          </a>
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
            <a href="#" class="readmore">
              Read More <i class="fal fa-long-arrow-right"></i>
            </a>

            <div style={{
              marginTop:".5rem"
            }}className="icon">
              <img
                src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688355412/cou-icon_wpvyuu.png"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
