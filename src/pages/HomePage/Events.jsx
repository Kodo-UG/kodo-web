import React from "react";

const Events = () => {
	return (
		<section id="blog" className="blog-area p-relative fix pt-120 pb-90" style={{backgroundImage: 'url(img/bg/blog_bg.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'top'}}>
  <div className="container">
    <div className="row align-items-center"> 
      <div className="col-lg-12">
        <div className="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
          <h5><i className="fal fa-graduation-cap" /> Our Blog</h5>
          <h2>
            Latest Blog &amp; News
          </h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="single-post2 hover-zoomin mb-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
          <div className="blog-thumb2">
            <a href="https://kodoscholarships.com/blog"><img src="https://kodoscholarships.com/img/blog/muslim.jpg" alt="img" /></a>
            <div className="date-home">
              <i className="fal fa-calendar-alt" /> 24th March 2023
            </div>
          </div>                    
          <div className="blog-content2">    
            <div className="b-meta">
              <div className="meta-info">
                <ul>
                  <li><i className="fal fa-user" /> By Admin </li>
                  <li><i className="fal fa-comments" /> 3 Comments</li>
                </ul>
              </div>
            </div>
            <h4><a href="https://kodoscholarships.com/blog">How to Write a Scholarship Essay and Win BIG [2022 Edition].</a></h4> 
            <p>With a new school year here, now’s the perfect time to get serious about searching for... </p>
            <div className="blog-btn"><a href="https://kodoscholarships.com/blog">Read More <i className="fal fa-long-arrow-right" /></a></div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="single-post2 mb-30 hover-zoomin wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
          <div className="blog-thumb2">
            <a href="https://kodoscholarships.com/blog"><img src="https://kodoscholarships.com/img/blog/gamers.jpg" alt="img" /></a>
            <div className="date-home">
              <i className="fal fa-calendar-alt" /> 24th March 2023
            </div>
          </div>
          <div className="blog-content2">                                    
            <div className="b-meta">
              <div className="meta-info">
                <ul>
                  <li><i className="fal fa-user" /> By Admin </li>
                  <li><i className="fal fa-comments" /> 3 Comments</li>
                </ul>
              </div>
            </div>
            <h4><a href="https://kodoscholarships.com/blog">How To Know If You Qualify For Need Based Financial Aid</a></h4> 
            <p>The cost of your college education can be intimidating. Which is why it’s important...</p>
            <div className="blog-btn"><a href="https://kodoscholarships.com/blog">Read More <i className="fal fa-long-arrow-right" /></a></div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="single-post2 mb-30 hover-zoomin wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
          <div className="blog-thumb2">
            <a href="https://kodoscholarships.com/blog"><img src="https://kodoscholarships.com/img/blog/interracial.jpg" alt="img" /></a>
            <div className="date-home">
              <i className="fal fa-calendar-alt" /> 24th March 2023
            </div>
          </div>
          <div className="blog-content2">                                    
            <div className="b-meta">
              <div className="meta-info">
                <ul>
                  <li><i className="fal fa-user" /> By Admin </li>
                  <li><i className="fal fa-comments" /> 3 Comments</li>
                </ul>
              </div>
            </div>
            <h4><a href="https://kodoscholarships.com/blog">5 Expert Tips on How to Apply for Scholarships [2022 Edition]</a></h4> 
            <p>Scholarships are, undoubtedly, the best form of financial aid. They’re free money to pay for college!</p>
            <div className="blog-btn"><a href="https://kodoscholarships.com/blog">Read More <i className="fal fa-long-arrow-right" /></a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

	);
};

export default Events;
