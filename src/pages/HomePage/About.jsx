import React from 'react'

const About = () => {
    return (
        <section class="about-area about-p pt-120 pb-120 p-relative fix" style={{ background: '#eff7ff' }}>
            <div class="animations-02"><img src="https://res.cloudinary.com/itgenius/image/upload/v1688241470/an-img-02_lzw6od.png" alt="contact-bg-an-01" /></div>
            <div class="" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <div class="" style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "75%",  
                }}>
                    <div class="" style={{
                        display: "flex",
                        
                    }}>
                        <div class="s-about-img p-relative  wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s">
                            <img src="https://res.cloudinary.com/itgenius/image/upload/v1688241331/about_img_02-1_sbyudl.png" alt="img" />
                            <div class="about-text second-about">
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
                            <div class="slider-btn mt-20">
                                <a href="about.html" class="btn ss-btn smoth-scroll" style={{
                                    padding: "20px",
                                    color: "white",
                                }}>Read More <i class="fal fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About