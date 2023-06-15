import React, { Fragment } from 'react'

const ContactUs = () => {
    return (
        <Fragment>
            <section id="services" class="services-area pt-120 pb-90 fix">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title text-center mb-50 wow fadeInDown  animated" data-animation="fadeInDown" data-delay=".4s" style={{visibility: 'visible', animationName: 'fadeInDown'}}>
                                <h5><i class="fal fa-graduation-cap"></i> Contact Info</h5>
                                <h2>
                                    Get In Touch
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-4">
                            <div class="services-box text-center">
                                <div class="services-icon">
                                    <img src="img/bg/contact-icon01.png" alt="image" />
                                </div>
                                <div class="services-content2">
                                    <h5><a href="tel:+14440008888">+1 (444) 000-8888</a></h5>
                                    <p>Phone Support</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4">

                            <div class="services-box text-center active">
                                <div class="services-icon">
                                    <img src="img/bg/contact-icon02.png" alt="image" />
                                </div>
                                <div class="services-content2">
                                    <h5><a href="mailto:jobs@webtrueexample.com">jobs@webtrueexample.com</a></h5>
                                    <p>Email Address</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4">
                            <div class="services-box text-center">
                                <div class="services-icon">
                                    <img src="img/bg/contact-icon03.png" alt="image" />
                                </div>
                                <div class="services-content2">
                                    <h5>12/A, New Jone, NYC</h5>
                                    <p>Office Address</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default ContactUs;