// import React, { Fragment } from "react";
// import "./index.css";


// const AboutUs1 = () => {
//     return (
//         <Fragment>
//             <section style={{  }} class="box-cont">
//                 <div class="box">
//                     <div class="image-box">
//                  <div class="image-content">
//                            <div class="image1">
//                             <img
//                                 src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1686810070/mimi-thian-vdXMSiX-n6M-unsplash_fvpzhq.jpg"
//                                 alt=""
//                                 class="image-original"
//                             />
//                         </div>
//                         <div class="image2">
//                             <img
//                                 src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1686807099/jason-goodman-LR5CYw3AQNo-unsplash_wuyiib.jpg"
//                                 alt=""
//                                 class="image-original"
//                             />
//                         </div>
//                         <div class="image3">
//                             <img
//                                 src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1686806623/cld-sample.jpg"
//                                 alt=""
//                                 class="image-original"
//                             />
//                         </div>
//                  </div>
//                     </div>
//                     <div class="content-box">
//                         <div>
//                             <div class="about-title second-title pb-25 fontWeight-bold">
//                                 <h5>
//                                     <i class="fal fa-graduation-cap font-weight-bold"></i>{" "}
//                                     About Our Scholarships
//                                 </h5>
//                                 <h2 class="font-weight-bold">A Few Words About Kodo</h2>
//                             </div>
//                             <p class="txt-clr">
//                                 We take the hassle out of the scholarship search process
//                                 and increase your chances of matching you with
//                                 scholarships in minutes.
//                             </p>
//                             <p>
//                                 We’ve helped students win more than $10 million dollars
//                                 in scholarships. We take the hassle out of the
//                                 scholarship search process and increase your chances of
//                                 matching you with scholarships in minutes.
//                             </p>
//                             <div class="sub-content">
//                                 <div class="sub-content1">
//                                     <h2>Our Mission</h2>
//                                     <p>
//                                         Our mission is to ensure that we build a
//                                         Scholarship System that will operate in the whole
//                                         of world ; a company that will boast of having
//                                         some of the best and reliable scholarships{" "}
//                                     </p>
//                                 </div>
//                                 <div class="sub-content1">
//                                     <h2>Our Programs</h2>
//                                     <p>
//                                         Our Vision is to become one of the most preferred
//                                         choices of individuals and organization when it
//                                         comes to the demand for Scholarships and Job
//                                         offers in the whole of Africa and the rest of
//                                         world{" "}
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </Fragment>
//     );
// };

// export default AboutUs1;




import React, { Fragment } from "react";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs1 = () => {
  return (
    <Fragment>
      <section className="box-cont">
        <div className="">
          <div className="row">
            <div className="col-lg-6 image-box">
              <div className="image-content">
                <div className="image1">
                  <img
                    src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1686810070/mimi-thian-vdXMSiX-n6M-unsplash_fvpzhq.jpg"
                    alt=""
                    className="image-original"
                  />
                </div>
                <div className="image2">
                  <img
                    src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1686807099/jason-goodman-LR5CYw3AQNo-unsplash_wuyiib.jpg"
                    alt=""
                    className="image-original"
                  />
                </div>
                <div className="image3">
                  <img
                    src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1686806623/cld-sample.jpg"
                    alt=""
                    className="image-original"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 content-box">
              <div className="content-items">
                <div className="about-title second-title pb-25 fontWeight-bold">
                  <h5>
                    <i className="fal fa-graduation-cap font-weight-bold"></i>{" "}
                    About Our Scholarships
                  </h5>
                  <h2 className="font-weight-bold">A Few Words About Kodo</h2>
                </div>
                <p className="txt-clr">
                  We take the hassle out of the scholarship search process and increase your chances of matching you with scholarships in minutes.
                </p>
                <p>
                  We've helped students win more than $10 million dollars in scholarships. We take the hassle out of the scholarship search process and increase your chances of matching you with scholarships in minutes.
                </p>
                <div className="sub-content">
                  <div className="sub-content1">
                    <h2>Our Mission</h2>
                    <p>
                      Our mission is to ensure that we build a Scholarship System that will operate in the whole of the world; a company that will boast of having some of the best and reliable scholarships{" "}
                    </p>
                  </div>
                  <div className="sub-content1">
                    <h2>Our Programs</h2>
                    <p>
                      Our Vision is to become one of the most preferred choices of individuals and organizations when it comes to the demand for Scholarships and Job offers in the whole of Africa and the rest of the world{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AboutUs1;





