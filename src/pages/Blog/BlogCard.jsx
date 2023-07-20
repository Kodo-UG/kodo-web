import React from "react";

function BlogCard({image, blogType, tittle, text}) {
  return (
     <div class="col-lg-4 col-md-6" style={{height: "100vh"}}>
    <div class="courses-item mb-30 hover-zoomin " style={{height: "80rem"}}>
      <div class="thumb fix">
        <a href="#">
          <img
            src={image}
            alt="contact-bg-an-01"
          />
        </a>
      </div>
      <div class="courses-content bg-red-600" style={{height: "45rem"}}>
        <div class="cat">
          <i class="fal fa-graduation-cap"></i> {blogType}
        </div>
        <h3>
          <a href="#">
            
            {tittle}
          </a>
        </h3>
        <p>
          {text}
        </p>
        <a href="#" class="readmore">
          Read More <i class="fal fa-long-arrow-right"></i>
        </a>
      </div>
      <div class="icon">
        <img src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688355412/cou-icon_wpvyuu.png" alt="img" />
      </div>
    </div>
    </div>
  );
}

export default BlogCard;