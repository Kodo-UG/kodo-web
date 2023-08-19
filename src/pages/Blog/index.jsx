import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  const blogData = [
    {
      text: " With a new school year here, now’s the perfect time to get serious about searching for and winning scholarships to pay for college! Since many applications for scholarships require an essay, you’ll want to know how to write one that persuades the scholarship program board that you’re the right person to receive the money available! If done right, your scholarship essay is a window into your world. Similar to your personal statement for college applications, these essays should give the readers a sense of you as a dimensional person—beyond what your high school GPA and test scores alone can reflect. At Scholly, we’ve collectively written and read TONS of scholarship essays. And, in this post, we’re sharing our favorite tips and strategies to help you write winning scholarship essays and drastically improve your chances of graduating debt free!",
      tittle: "Scholarship Essay and Win BIG [2022 Edition]",
      blogType: "Academics",
      image:
        "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688356748/muslim_qf7tyk.jpg",
    },
    {
      text: "The cost of your college education can be intimidating. Which is why it’s important to understand your options for financial aid! This includes need-based financial aid. But what does “need-based” refer to? And how do you know if you qualify? Two good questions! And we’ll be answering them in this post! We’ll also look at the difference between need-based vs. merit-based financial aid (and how you can easily find more opportunities to win both types). But, before we do that, let’s quickly go over…And dont just keep pushing aslong as you can ,more and more oppportunitiies still coming in for . Seriously! And we say that because there are scholarship deadlines all throughout the year. Seriously! And we say that because there are scholarship deadlines all throughout the year.",
      tittle: "How To Know If You Qualify For Need Based Financial Aid",
      blogType: "Finance",
      image:
        "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688356748/gamers_xy8q8o.jpg",
    },
    {
      text: "Scholarships are, undoubtedly, the best form of financial aid. They’re free money to pay for college! But you’re not alone if you’re discouraged from applying. Many scholarship competitions are really competitive since, often, only one or very few applicants can win… But who says you can’t be one of those winners? We definitely think you can! Plus, there are things you can do to increase your odds of winning. And we’re going to show you how in this post on how to apply for scholarships! Specifically, we’ll be sharing 15 expert tips on things you should do before and during the scholarship application season! But, before we get to those tips, we’ll first cover two common questions about scholarships. When Is the Best Time to Start Applying for Scholarships? Now. Yesterday. Tomorrow. Those are all good times to start. Seriously! And we say that because there are scholarship deadlines all throughout the year.",
      tittle: "5 Expert Tips on How to Apply for Scholarships [2022 Edition]",
      blogType: "Media",
      image:
        "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688356749/interracial_nlf8sd.jpg",
    },
    {
      text: "Graduation is coming up and you still don’t have a job? Many students wait until they graduate to start looking for a job. But is this the best idea? Nope! You know why? Because it can take months to find a job. So, it’s important to start early! But we also get it. If this is your first time applying for a job, it’s a lot of work that’s incredibly easy to procrastinate on. But since you’re here, we think you know it’s time to take your job search seriously. Good job! And you’re in the right place because, in this blog post, we’ve compiled the information and resources to help you every step of the way! Here’s a preview of what you’ll learn:The best time to start applying for jobs as a senior year student What you need to submit impressive job applications Where and how to look for job openings The 6 essential steps to applying for a job 7 job search tips specifically for students Let’s get started",
      tittle:
        " Public How To Find A Job Before Graduation [Guide For College And High School Students]",
      blogType: "Publi",
      image:
        "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688356748/woman_qvmmrr.jpg",
    },
    {
      text: "Winning a scholarship is a fantastic feeling! We mean… who doesn’t like to be officially rewarded for their hard work, win free money, and avoid some annoying post-college debt? So, if you’ve just received an email or phone call about winning a scholarship, congratulations! But what are you supposed to do now? How do you make sure the money goes to the right place? Good questions – because there are a few required steps that all scholarship winners must take. And this post is gonna walk you through each one so you can access your scholarship funds and get back to celebrating (or applying for more scholarships) as quickly as possible!we’ve collectively written and read TONS of scholarship essays. And, in this post, we’re sharing our favorite tips and strategies to help you write winning scholarship essays and drastically improve your chances of graduating debt free!",
      tittle: "Guide: I Won a Scholarship, Now What?",
      blogType: "Guide",
      image:
        "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688356749/grad_mo6ifc.jpg",
    },
    {
      text: "Tired of the broke college student stereotype? Well, these days, in the glorious age of the internet… your options for making money are practically endless. Well, maybe not endless. But, there are at least 39 potential online jobs for college students that can have you making GOOD money – without needing to add too much pressure to your already busy college schedule! And, in this guide, we’re going to look at what each of those online jobs entails, how much money you can make, where to look for work online, and where you can find more information to get started ASAP we’ve collectively written and read TONS of scholarship essays. And, in this post, we’re sharing our favorite tips and strategies to help you write winning scholarship essays and drastically improve your chances of graduating debt free!.",
      tittle:
        "Side Hustles and Online Jobs for College Students [2022 Ultimate Guide",
      blogType: "Guide",
      image:
        "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688356748/whiteguy_vxrfnm.jpg",
    },
  ];
  return (
    <section
      className="shop-area pt-120 pb-120 p-relative "
      data-animation="fadeInUp animated"
      data-delay=".2s"
    >
      <div class="container">
        <div className="row">
          <div className="col-lg-6 col-sm-6">
            <h6 className="mt-20 mb-50" style={{
				fontFamily: "Jost, sans-serif",
				fontWeight: "bold",
				fontSize: "15px",
			}}>Showing 1–9 of 10 results</h6>
          </div>
          <div className="col-lg-6 col-sm-6 text-right">
            <select name="orderby" className="orderby" aria-label="Shop order">
              <option value="menu_order" selected="selected">
                Default sorting
              </option>
              <option value="popularity">Sort by popularity</option>
              <option value="rating">Sort by average rating</option>
              <option value="date">Sort by latest</option>
              <option value="price">Sort by price: low to high</option>
              <option value="price-desc">Sort by price: high to low</option>
            </select>
          </div>
        </div>

        <div className="row" style={{ overflow: "hidden" }}>
          {blogData.map((data) => (
            <BlogCard
             key={data.tittle}
              tittle={data.tittle}
              text={data.text}
              blogType={data.blogType}
              image={data.image}
            />
          ))}
        </div>
        <div className="row">
          <div className="col-12">
            <div className="pagination-wrap mt-20 text-center">
              <nav>
                <ul className="pagination">
                  <li className="page-item">
                    <a href="#">
                      <i className="fas fa-angle-double-left" />
                    </a>
                  </li>
                  <li className="page-item active">
                    <a href="#">1</a>
                  </li>
                  <li className="page-item">
                    <a href="#">2</a>
                  </li>
                  <li className="page-item">
                    <a href="#">3</a>
                  </li>
                  <li className="page-item">
                    <a href="#">...</a>
                  </li>
                  <li className="page-item">
                    <a href="#">10</a>
                  </li>
                  <li className="page-item">
                    <a href="#">
                      <i className="fas fa-angle-double-right" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div />
        </div>
      </div>
    </section>
  );
};

export default Blog;
