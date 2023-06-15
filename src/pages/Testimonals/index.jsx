import React from "react";

const Testimonals = () => {
  return (
    <section class="testimonial-area pt-120 pb-115 p-relative fix">
      <div class="animations-01">
        <img src="img/bg/an-img-03.png" alt="an-img-01" />
      </div>
      <div class="animations-02">
        <img src="img/bg/an-img-04.png" alt="contact-bg-an-01" />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div
              class="section-title text-center mb-50 wow fadeInDown  animated"
              data-animation="fadeInDown"
              data-delay=".4s"
              style={{visibility: 'visible', animationName: 'fadeInDown'}}
            >
              <h5>
                <i class="fal fa-graduation-cap"></i> Testimonial
              </h5>
              <h2>What Our Clients Says</h2>
            </div>
          </div>

          <div class="col-lg-12">
            <div
              class="testimonial-active wow fadeInUp  slick-initialized slick-slider slick-dotted animated"
              data-animation="fadeInUp"
              data-delay=".4s"
              style={{visibility: 'visible', animationName: 'fadeInUp'}}
            >
              <div class="slick-list draggable">
                <div
                  class="slick-track"
                //   style="opacity: 1; width: 5616px; transform: translate3d(-1296px, 0px, 0px);"
                >
                  <div
                    class="single-testimonial text-center slick-slide slick-cloned"
                    data-slick-index="-3"
                    id=""
                    aria-hidden="true"
                    tabindex="-1"
                    style={{width: '402px'}}
                  >
                    <div class="qt-img">
                      <img src="img/testimonial/qt-icon.png" alt="img" />
                    </div>
                    <p>
                      Curabitur ac tortor ante. Sed quis iaculis risus. Ut
                      ultrices ligula aliquet odio tristique euismod. Donec
                      efficitur dolor in turpis aliquet, at mollis.
                    </p>
                    <div class="testi-author">
                      <img
                        src="img/testimonial/testi_avatar_03.png"
                        alt="img"
                      />
                    </div>
                    <div class="ta-info">
                      <h6>Roboto Eorure</h6>
                      <span>Web Developer</span>
                    </div>
                  </div>
                  <div
                    class="single-testimonial text-center slick-slide slick-cloned"
                    data-slick-index="-2"
                    id=""
                    aria-hidden="true"
                    tabindex="-1"
                    style={{width: '402px'}}
                  >
                    <div class="qt-img">
                      <img src="img/testimonial/qt-icon.png" alt="img" />
                    </div>
                    <p>
                      Curabitur ac tortor ante. Sed quis iaculis risus. Ut
                      ultrices ligula aliquet odio tristique euismod. Donec
                      efficitur dolor in turpis aliquet, at mollis.
                    </p>
                    <div class="testi-author">
                      <img src="img/testimonial/testi_avatar.png" alt="img" />
                    </div>
                    <div class="ta-info">
                      <h6>Margie Dose</h6>
                      <span>Web Developer</span>
                    </div>
                  </div>
                  <div
                    class="single-testimonial text-center slick-slide slick-cloned"
                    data-slick-index="-1"
                    id=""
                    aria-hidden="true"
                    tabindex="-1"
                    style={{width: '402px'}}
                  >
                    <div class="qt-img">
                      <img src="img/testimonial/qt-icon.png" alt="img" />
                    </div>
                    <p>
                      Curabitur ac tortor ante. Sed quis iaculis risus. Ut
                      ultrices ligula aliquet odio tristique euismod. Donec
                      efficitur dolor in turpis aliquet, at mollis.
                    </p>
                    <div class="testi-author">
                      <img
                        src="img/testimonial/testi_avatar_02.png"
                        alt="img"
                      />
                    </div>
                    <div class="ta-info">
                      <h6>Rock Dloder</h6>
                      <span>Web Developer</span>
                    </div>
                  </div>
                  <div
                    class="single-testimonial text-center slick-slide slick-current slick-active"
                    data-slick-index="0"
                    aria-hidden="false"
                    tabindex="0"
                    role="tabpanel"
                    id="slick-slide30"
                    aria-describedby="slick-slide-control30"
                    style={{width: '402px'}}
                  >
                    <div class="qt-img">
                      <img src="img/testimonial/qt-icon.png" alt="img" />
                    </div>
                    <p>
                      Curabitur ac tortor ante. Sed quis iaculis risus. Ut
                      ultrices ligula aliquet odio tristique euismod. Donec
                      efficitur dolor in turpis aliquet, at mollis.
                    </p>
                    <div class="testi-author">
                      <img src="img/testimonial/testi_avatar.png" alt="img" />
                    </div>
                    <div class="ta-info">
                      <h6>Margie Dose</h6>
                      <span>Web Developer</span>
                    </div>
                  </div>
                  <div
                    class="single-testimonial text-center slick-slide slick-active"
                    data-slick-index="1"
                    aria-hidden="false"
                    tabindex="0"
                    role="tabpanel"
                    id="slick-slide31"
                    style={{ width: "402px" }}
                  >
                    <div class="qt-img">
                      <img src="img/testimonial/qt-icon.png" alt="img" />
                    </div>
                    <p>
                      Curabitur ac tortor ante. Sed quis iaculis risus. Ut
                      ultrices ligula aliquet odio tristique euismod. Donec
                      efficitur dolor in turpis aliquet, at mollis.
                    </p>
                    <div class="testi-author">
                      <img
                        src="img/testimonial/testi_avatar_02.png"
                        alt="img"
                      />
                    </div>
                    <div class="ta-info">
                      <h6>Rock Dloder</h6>
                      <span>Web Developer</span>
                    </div>
                  </div>
                  <div
                    class="single-testimonial text-center slick-slide slick-active"
                    data-slick-index="2"
                    aria-hidden="false"
                    tabindex="0"
                    role="tabpanel"
                    id="slick-slide32"
                    aria-describedby="slick-slide-control31"
                    style={{width: '402px'}}
                  >
                    <div class="qt-img">
                      <img src="img/testimonial/qt-icon.png" alt="img" />
                    </div>
                    <p>
                      Curabitur ac tortor ante. Sed quis iaculis risus. Ut
                      ultrices ligula aliquet odio tristique euismod. Donec
                      efficitur dolor in turpis aliquet, at mollis.
                    </p>
                    <div class="testi-author">
                      <img
                        src="img/testimonial/testi_avatar_03.png"
                        alt="img"
                      />
                    </div>
                    <div class="ta-info">
                      <h6>Roboto Eorure</h6>
                      <span>Web Developer</span>
                    </div>
                  </div>
                  <div
                    class="single-testimonial text-center slick-slide"
                    data-slick-index="3"
                    aria-hidden="true"
                    tabindex="-1"
                    role="tabpanel"
                    id="slick-slide33"
                    style={{width: '402px'}}
                  >
                    <div class="qt-img">
                      <img src="img/testimonial/qt-icon.png" alt="img" />
                    </div>
                    <p>
                      Curabitur ac tortor ante. Sed quis iaculis risus. Ut
                      ultrices ligula aliquet odio tristique euismod. Donec
                      efficitur dolor in turpis aliquet, at mollis.
                    </p>
                    <div class="testi-author">
                      <img src="img/testimonial/testi_avatar.png" alt="img" />
                    </div>
                    <div class="ta-info">
                      <h6>Margie Dose</h6>
                      <span>Web Developer</span>
                    </div>
                  </div>
                  <div
                    class="single-testimonial text-center slick-slide"
                    data-slick-index="4"
                    aria-hidden="true"
                    tabindex="-1"
                    role="tabpanel"
                    id="slick-slide34"
                    aria-describedby="slick-slide-control32"
                    style={{width: '402px'}}
                  >
                    <div class="qt-img">
                      <img src="img/testimonial/qt-icon.png" alt="img" />
                    </div>
                    <p>
                      Curabitur ac tortor ante. Sed quis iaculis risus. Ut
                      ultrices ligula aliquet odio tristique euismod. Donec
                      efficitur dolor in turpis aliquet, at mollis.
                    </p>
                    <div class="testi-author">
                      <img
                        src="img/testimonial/testi_avatar_02.png"
                        alt="img"
                      />
                    </div>
                    <div class="ta-info">
                      <h6>Rock Dloder</h6>
                      <span>Web Developer</span>
                    </div>
                  </div>
                  <div
                    class="single-testimonial text-center slick-slide slick-cloned"
                    data-slick-index="5"
                    id=""
                    aria-hidden="true"
                    tabindex="-1"
                    style={{width: '402px'}}
                  >
                    <div class="qt-img">
                      <img src="img/testimonial/qt-icon.png" alt="img" />
                    </div>
                    <p>
                      Curabitur ac tortor ante. Sed quis iaculis risus. Ut
                      ultrices ligula aliquet odio tristique euismod. Donec
                      efficitur dolor in turpis aliquet, at mollis.
                    </p>
                    <div class="testi-author">
                      <img src="img/testimonial/testi_avatar.png" alt="img" />
                    </div>
                    <div class="ta-info">
                      <h6>Margie Dose</h6>
                      <span>Web Developer</span>
                    </div>
                  </div>
                  <div
                    class="single-testimonial text-center slick-slide slick-cloned"
                    data-slick-index="6"
                    id=""
                    aria-hidden="true"
                    tabindex="-1"
                    style={{width: '402px'}}
                  >
                    <div class="qt-img">
                      <img src="img/testimonial/qt-icon.png" alt="img" />
                    </div>
                    <p>
                      Curabitur ac tortor ante. Sed quis iaculis risus. Ut
                      ultrices ligula aliquet odio tristique euismod. Donec
                      efficitur dolor in turpis aliquet, at mollis.
                    </p>
                    <div class="testi-author">
                      <img
                        src="img/testimonial/testi_avatar_02.png"
                        alt="img"
                      />
                    </div>
                    <div class="ta-info">
                      <h6>Rock Dloder</h6>
                      <span>Web Developer</span>
                    </div>
                  </div>
                  <div
                    class="single-testimonial text-center slick-slide slick-cloned"
                    data-slick-index="7"
                    id=""
                    aria-hidden="true"
                    tabindex="-1"
                    style={{width: '402px'}}
                  >
                    <div class="qt-img">
                      <img src="img/testimonial/qt-icon.png" alt="img" />
                    </div>
                    <p>
                      Curabitur ac tortor ante. Sed quis iaculis risus. Ut
                      ultrices ligula aliquet odio tristique euismod. Donec
                      efficitur dolor in turpis aliquet, at mollis.
                    </p>
                    <div class="testi-author">
                      <img
                        src="img/testimonial/testi_avatar_03.png"
                        alt="img"
                      />
                    </div>
                    <div class="ta-info">
                      <h6>Roboto Eorure</h6>
                      <span>Web Developer</span>
                    </div>
                  </div>
                  <div
                    class="single-testimonial text-center slick-slide slick-cloned"
                    data-slick-index="8"
                    id=""
                    aria-hidden="true"
                    tabindex="-1"
                    style={{width: '402px'}}
                  >
                    <div class="qt-img">
                      <img src="img/testimonial/qt-icon.png" alt="img" />
                    </div>
                    <p>
                      Curabitur ac tortor ante. Sed quis iaculis risus. Ut
                      ultrices ligula aliquet odio tristique euismod. Donec
                      efficitur dolor in turpis aliquet, at mollis.
                    </p>
                    <div class="testi-author">
                      <img src="img/testimonial/testi_avatar.png" alt="img" />
                    </div>
                    <div class="ta-info">
                      <h6>Margie Dose</h6>
                      <span>Web Developer</span>
                    </div>
                  </div>
                  <div
                    class="single-testimonial text-center slick-slide slick-cloned"
                    data-slick-index="9"
                    id=""
                    aria-hidden="true"
                    tabindex="-1"
                    style={{width: '402px'}}
                  >
                    <div class="qt-img">
                      <img src="img/testimonial/qt-icon.png" alt="img" />
                    </div>
                    <p>
                      Curabitur ac tortor ante. Sed quis iaculis risus. Ut
                      ultrices ligula aliquet odio tristique euismod. Donec
                      efficitur dolor in turpis aliquet, at mollis.
                    </p>
                    <div class="testi-author">
                      <img
                        src="img/testimonial/testi_avatar_02.png"
                        alt="img"
                      />
                    </div>
                    <div class="ta-info">
                      <h6>Rock Dloder</h6>
                      <span>Web Developer</span>
                    </div>
                  </div>
                </div>
              </div>
              <ul class="slick-dots" role="tablist">
                <li class="slick-active" role="presentation">
                  <button
                    type="button"
                    role="tab"
                    id="slick-slide-control30"
                    aria-controls="slick-slide30"
                    aria-label="1 of 2"
                    tabindex="0"
                    aria-selected="true"
                  >
                    1
                  </button>
                </li>
                <li role="presentation">
                  <button
                    type="button"
                    role="tab"
                    id="slick-slide-control31"
                    aria-controls="slick-slide32"
                    aria-label="2 of 2"
                    tabindex="-1"
                  >
                    2
                  </button>
                </li>
                <li role="presentation">
                  <button
                    type="button"
                    role="tab"
                    id="slick-slide-control32"
                    aria-controls="slick-slide34"
                    aria-label="3 of 2"
                    tabindex="-1"
                  >
                    3
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonals;
