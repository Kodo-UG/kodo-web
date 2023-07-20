import React from "react";

const Footer = () => {
  return (
    <footer
      className="footer-bg  footer-p pt-90  "
      style={{
        backgroundColor: "#125875",
        backgroundImage:
          "url(https://kodoscholarships.com/img/bg/footer-bg.png)",
      }}
    >
      <div className="footer-top pb-70">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div className="footer-widget mb-30">
                <div className="f-widget-title">
                  <img
                    src="https://kodoscholarships.com/img/logo-urayana.png"
                    alt="img"
                    style={{
                      marginRight: 10,
                      width: 130,
                      marginTop: 40,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-8 col-sm-12">
              <div className="footer-link">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <ul className="link-list" style={{ fontWeight: "bold" }}>
                      <li>
                        <a href="/aboutus">About Us</a>
                      </li>
                      <li>
                        <a href="https://kodoscholarships.com/faq">FAQ</a>
                      </li>
                      <li>
                        <a href="/scholarships">Scholarships</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <ul className="link-list" style={{ fontWeight: "bold" }}>
                      <li>
                        <a href="/testimonial">Testimonials</a>
                      </li>
                      <li>
                        <a href="#">Terms of Service</a>
                      </li>
                      <li>
                        <a href="/blog">Blog</a>
                      </li>
                      <li>
                        <a href="/contactus">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-6">
              <div className="footer-widget mb-30">
                <div className="footer-social mt-10">
                  <a href="https://www.facebook.com/people/Kodo-Scholarships/100064161548720/">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="https://www.instagram.com/kodoscholarships/">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="https://twitter.com/kodoscholarship">
                    <i className="fab fa-twitter" />
                  </a>
                </div>
                <div className="app-download mt-20">
                  <a href="#">
                    <img
                      style={{ width: 140 }}
                      src="https://kodoscholarships.com/img/playstore.png"
                      alt="Google Playstore"
                    />
                  </a>
                  <a href="#">
                    <img
                      style={{ width: 130 }}
                      src="https://kodoscholarships.com/img/appstore.png"
                      alt="Appstore"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="desktop-footer-bottom"
        style={{ backgroundColor: "#125875" }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* <div class="col-lg-4">
						<div class="copy-text">
							<a href="index.html" style="display: flex; align-items: center; text-decoration: none;">
								<span style="font-weight: bold;font-size: 20px;color: white;">KODO Scholarships</span>
							</a>
						</div>
					</div> */}
            <div
              style={{ color: "#d2d4d7", textAlign: "center" }}
              className="col-lg-4 text-center mx-auto"
            >
              Copyright © Kodo Scholarships 2023
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
