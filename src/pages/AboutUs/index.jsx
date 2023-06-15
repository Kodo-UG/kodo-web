import React, { Fragment } from 'react'

const AboutUs = () => {
    return (
        <Fragment>
            <section class="about-area about-p pt-120 pb-120 p-relative fix">
                <div class="animations-02"><img src="img/bg/an-img-02.png" alt="contact-bg-an-01" /></div>
                <div class="container">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-lg-6 col-md-12 col-sm-12">
                            <div class="s-about-img p-relative  wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s">
                                <img src="img/features/about_img_05.png" alt="img" />
                                <div class="about-text second-about three-about">
                                    <span>25 <sub>+</sub></span>
                                    <p>Years of Experience</p>
                                </div>
                            </div>

                        </div>

                        <div class="col-lg-6 col-md-12 col-sm-12">
                            <div class="about-content s-about-content pl-15 wow fadeInRight  animated" data-animation="fadeInRight" data-delay=".4s">
                                <div class="about-title second-title pb-25">
                                    <h5><i class="fal fa-graduation-cap"></i> About Our University</h5>
                                    <h2>A Few Words About the University</h2>
                                </div>
                                <p class="txt-clr">Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational.</p>
                                <p>We are proud to offer top ranige in employment services such and asser payroll and benefits administrato managemen and asistance with global business range ployment employer  readings from religious texts or literature are also commonly inc compliance.</p>
                                <div class="about-content2">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <ul class="green2">
                                                <li><div class="abcontent"><div class="ano"><span>01</span></div> <div class="text"><h3>Doctoral Degrees</h3> <p>consectetur adipiscing elit sed do eiusmod tem incid idunt.</p></div></div></li>
                                                <li><div class="abcontent"><div class="ano"><span>02</span></div> <div class="text"><h3>Global Students</h3> <p>consectetur adipiscing elit sed do eiusmod tem incid idunt.</p></div></div></li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section class="cta-area cta-bg pt-50 pb-50" style={{backgroundImage: 'url(img/bg/cta_bg02.png)'}}>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="section-title cta-title wow fadeInLeft animated" data-animation="fadeInDown animated" data-delay=".2s">
                                <h2>Scholarship Programs</h2>
								<p>At Estuidar University, we prepare you to launch your career by providing a supportive, creative, and professional environment from which to learn practical skills and build a network of industry contacts.</p>
                            </div>
                                             
                        </div>
                        <div class="col-lg-4 text-right"> 
                            <div class="cta-btn s-cta-btn wow fadeInRight animated mt-30" data-animation="fadeInDown animated" data-delay=".2s">
									  <a href="about.html" class="btn ss-btn smoth-scroll">Financial Aid <i class="fal fa-long-arrow-right"></i></a>			
								</div>
                        </div>
					
                    </div>
                </div>
            </section>
            <section class="steps-area2 p-relative fix" style={{backgroundColor: '#125875'}}>
            <div class="animations-02"><img src="img/bg/an-img-10.png" alt="an-img-01" /></div>
            <div class="container">

                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="step-box step-box2 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                            <div class="dnumber">
                                <div class="date-box"><img src="img/icon/fea-icon01.png" alt="icon" /></div>
                            </div>
                            <div class="text">
                                <h2>Campus Tour</h2>
                                <p>Campus on a tour designed for prospective graduate and professional students. You will see how our university like, facilities, studenst and life in this university. Meet our graduate admissions representative to learn more about our graduate programs and decide what it the best for you.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="step-img2 wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s">
                            <img src="img/bg/steps-img-2.png" alt="class image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </Fragment>
    )
}

export default AboutUs