import React, { Fragment } from 'react'

const Slidder = () => {
    return (
        <Fragment>
        <section id="home" class="slider-area fix p-relative">
            <div class="slider-active" style={{background: '#141b22'}}>
                <div class="single-slider slider-bg" style={{backgroundImage: 'url(img/slider/slider_bg.png)', backgroundSize: 'cover'}}>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-7 col-md-7">
                                <div class="slider-content s-slider-content mt-130">
                                    <h5 data-animation="fadeInUp" data-delay=".4s">welcome To Qeducato</h5>
                                    <h2 data-animation="fadeInUp" data-delay=".4s">Education is the best key success in life</h2>
                                    <p data-animation="fadeInUp" data-delay=".6s">Donec vitae libero non enim placerat eleifend aliquam erat volutpat. Curabitur diam ex, dapibus purus sapien, cursus sed nisl tristique, commodo gravida lectus non.</p>

                                    <div class="slider-btn mt-30">
                                        <a href="about.html" class="btn ss-btn mr-15" data-animation="fadeInLeft" data-delay=".4s">Discover More <i class="fal fa-long-arrow-right"></i></a>
                                        <a href="contact.html" class="btn ss-btn active" data-animation="fadeInLeft" data-delay=".4s">Contact Us <i class="fal fa-long-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-5 col-md-5 p-relative">
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div class="single-slider slider-bg" style={{backgroundImage: 'url(img/slider/slider_bg.png)', backgroundSize: 'cover'}}>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-7 col-md-7">
                                <div class="slider-content s-slider-content mt-130">
                                    <h5 data-animation="fadeInUp" data-delay=".4s">welcome To Qeducato</h5>
                                    <h2 data-animation="fadeInUp" data-delay=".4s">Education is the best key success in life</h2>
                                    <p data-animation="fadeInUp" data-delay=".6s">Donec vitae libero non enim placerat eleifend aliquam erat volutpat. Curabitur diam ex, dapibus purus sapien, cursus sed nisl tristique, commodo gravida lectus non.</p>

                                    <div class="slider-btn mt-30">
                                        <a href="about.html" class="btn ss-btn mr-15" data-animation="fadeInLeft" data-delay=".4s">Discover More <i class="fal fa-long-arrow-right"></i></a>
                                        <a href="contact.html" class="btn ss-btn active" data-animation="fadeInLeft" data-delay=".4s">Contact Us <i class="fal fa-long-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-5 col-md-5 p-relative">
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>

        <section class="service-details-two p-relative">
                <div class="container">
                    <div class="row">
                      
                        <div class="col-lg-4 col-md-12 col-sm-12">
                            <div class="services-box07">
                                
                             <div class="sr-contner">
                                <div class="icon">
                                <img src="img/icon/sve-icon4.png" alt="icon01"/>
                                </div>
                                <div class="text">
                                    <h5><a href="about.html">Education Services</a></h5>
                                    <p>Seamlessly visualize quality ellectual capital without superior collaboration and idea sharing listically</p>
                                    <a href="about.html">Read More <i class="fal fa-long-arrow-right"></i></a>
                                </div>
                             </div>
                                
                                
                            </div>
                        </div>
                         <div class="col-lg-4 col-md-12 col-sm-12">
                            <div class="services-box07 active">
                                <div class="sr-contner">
                                <div class="icon">
                                <img src="img/icon/sve-icon5.png" alt="icon01"/>
                                </div>
                                <div class="text">
                                    <h5><a href="about.html">International Hubs</a></h5>
                                    <p>Seamlessly visualize quality ellectual capital without superior collaboration and idea sharing listically</p>
                                    <a href="about.html">Read More <i class="fal fa-long-arrow-right"></i></a>
                                </div>
                             </div>
                               
                            </div>
                        </div>
                        
					 <div class="col-lg-4 col-md-12 col-sm-12">
                            <div class="services-box07">
                                <div class="sr-contner">
                                <div class="icon">
                                <img src="img/icon/sve-icon6.png" alt="icon01"/>
                                </div>
                                <div class="text">
                                    <h5><a href="about.html">Bachelor’s and Master’s</a></h5>
                                    <p>Seamlessly visualize quality ellectual capital without superior collaboration and idea sharing listically</p>
                                    <a href="about.html">Read More <i class="fal fa-long-arrow-right"></i></a>
                                </div>
                             </div>
                                
                            </div>
                        </div>
                     
                    </div>
                </div>
            </section>


        
        </Fragment>
    )
}

export default Slidder