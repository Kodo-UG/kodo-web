import React from "react";
import { accordionData } from "./AccordionData.js";
import AccordionCard from "./AccordionCard.jsx";

function Accordion() {
  return (
    <main>
      <section className="event event03 pt-150 pb-120 p-relative fix">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 col-md-5  wow fadeInUp animated "
              data-animation="fadeInUp"
              data-delay=".4s"
            >
              <div
                className="s-video-wrap2"
                style={{
                  backgroundImage: 'url("https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688930513/faq_ufbxqd.jpg")',
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="s-video-content text-center">
                  <h6>
                    <a
                      href="https://www.youtube.com/watch?v=7e90gBu4pas"
                      className="popup-video mb-50"
                    >
                      <img
                        src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688920197/play-button_x1mykn.png"
                        alt="circle_right"
                      />
                    </a>
                  </h6>
                </div>
              </div>
            </div>
           <div
              className="col-lg-7 col-md-7  wow fadeInUp animated"
              data-animation="fadeInUp"
              data-delay=".4s"
            >
              <div
                className="faq-wrap pl-30 wow fadeInUp animated"
                data-animation="fadeInUp"
                data-delay=".4s"
              >
                <div class="accordion" id="accordionExample">
                  <div className="card">
                    <div class="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          class="faq-btn"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                        >
                          01 When is the best time to apply htmlFor a
                          scholarship?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="card-body">
                        The best time to apply htmlFor a scholarship is within
                        the application period set by the scholarship
                        provider/University. Usually, scholarship applications
                        (as well as admissions) should be done 6 months to one
                        year before the academic year you plan to study.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div class="card-header" id="headingOne">
                      <h2 className="mb-0">
                        <button
                          class="faq-btn collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                        >
                          02 How do you write the scholarship essay?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="card-body">
                        Did the scholarship provider provide any htmlFormat? If
                        they did, you should follow that. If they have not
                        specified a specific format, then you can follow this
                        simple outline when making your application/motivation
                        letter: (1) Background/Key Qualifications, (2)
                        Intentions for studying, (3) Expectations of the Course,
                        and (4) your plans during and after the study. In making
                        the letter, you should not just tell them why you need
                        the scholarship but more importantly you should explain
                        clearly why you deserve to get the scholarship.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div class="card-header" id="headingTwo">
                      <h2 className="mb-0">
                        <button
                          class="faq-btn collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                        >
                          03 What are the general eligibility requirements to
                          get a scholarship?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="card-body">
                        A: The eligibility requirements vary from scholarship to
                        scholarship. It will also depend on the level of study
                        the scholarship supports. Based on the scholarships we
                        have featured, some of the common qualifications include
                        a previous University degree, proficiency in English,
                        high academic grades, unconditional/conditional
                        acceptance to a programme offered at a
                        participating/host University. Aside from the
                        eligibility requirements of the scholarship, you must
                        also consider the eligibility requirements of the
                        programme of study you are applying to.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div class="card-header" id="headingFour">
                      <h2 className="mb-0">
                        <button
                          class="faq-btn collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                        >
                          04 Are there scholarships htmlFor [specific field of
                          study] or [nationality]?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="card-body">
                        There are scholarships for most fields of study and for
                        most nationalities. The key is just to find them. In
                        kodo scholarships are categorized by fields of study and
                        by target group (see the sitemap). Click on a particular
                        field of study or target group to view a list of
                        available scholarships according to your criteria.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div class="card-header" id="headingFive">
                      <h2 className="mb-0">
                        <button
                          class="faq-btn collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                        >
                          05 How do I apply htmlFor a scholarship ?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseFive"
                      className="collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="card-body">
                        The simple answer to that is to follow the application
                        instructions given by the scholarship
                        provider/University. The application instructions vary
                        among scholarship providers so there is no standard way
                        of applying to a scholarship. The application
                        instructions are usually outlined very clearly. Follow
                        the the instructions step by step so you will not get
                        overwhelmed by the amount of information presented.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
        </div>
      </section>
    </main>
  );
}

export default Accordion;





