import React from 'react'

const Footer = () => {
    return (
        <footer class="footer-bg footer-p pt-90" style={{backgroundColor: '#125875', backgroundImage: 'url(img/bg/footer-bg.png)'}}>
            <div class="footer-top pb-70">
                <div class="container">
                    <div class="row justify-content-between">

                        <div class="col-xl-4 col-lg-4 col-sm-6">
                            <div class="footer-widget mb-30">
                                <div class="f-widget-title">
                                    <h2>About Us</h2>
                                </div>
                                <div class="f-contact">
                                    <p>Suspendisse non sem ante. Cras pretium gravida leo a convallis. Nam malesuada interdum metus, sit amet dictum ante congue eu. Maecenas ut maximus enim.</p>

                                </div>
                                <div class="footer-social mt-10">
                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-sm-6">
                            <div class="footer-widget mb-30">
                                <div class="f-widget-title">
                                    <h2>Our Links</h2>
                                </div>
                                <div class="footer-link">
                                    <ul>
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="about.html"> About</a></li>
                                        <li><a href="courses.html">Courses</a></li>
                                        <li><a href="contact.html"> Contact Us</a></li>
                                        <li><a href="blog.html">Blog </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-sm-6">
                            <div class="footer-widget mb-30">
                                <div class="f-widget-title">
                                    <h2>Latest Post</h2>
                                </div>
                                <div class="recent-blog-footer">
                                    <ul>
                                        <li>
                                            <div class="thum"> <img src="https://res.cloudinary.com/itgenius/image/upload/v1688243163/work-building-svgrepo-com_zydazp.svg" alt="img" /></div>
                                            <div class="text"> <a href="blog-details.html">Nothing impossble to need hard work</a>
                                                <span>7 March, 2020</span></div>
                                        </li>

                                        <li>
                                            <div class="thum"> <img src="https://res.cloudinary.com/itgenius/image/upload/v1688243163/work-building-svgrepo-com_zydazp.svg" alt="img" /></div>
                                            <div class="text"> <a href="blog-details.html">Nothing impossble to need hard work</a>
                                                <span>7 March, 2020</span></div>
                                        </li>

                                    </ul>


                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-sm-6">
                            <div class="footer-widget mb-30">
                                <div class="f-widget-title">
                                    <h2>Contact Us</h2>
                                </div>
                                <div class="f-contact">
                                    <ul>
                                        <li>
                                            <i class="icon fal fa-phone"></i>
                                            <span><a href="tel:+14440008888">+1 (444) 000-8888</a><br /><a href="tel:+917052101786">+91 7052 101 786</a></span>
                                        </li>
                                        <li><i class="icon fal fa-envelope"></i>
                                            <span>
                                                <a href="mailto:info@example.com">info@example.com</a>
                                                <br />
                                                <a href="mailto:help@example.com">help@example.com</a>
                                            </span>
                                        </li>
                                        <li>
                                            <i class="icon fal fa-map-marker-check"></i>
                                            <span>1247/Plot No. 39, 15th Phase,<br /> LHB Colony, Kanpur</span>
                                        </li>

                                    </ul>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <div class="copyright-wrap">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-4">
                            <div class="copy-text">
                                <a href="index.html"><img src="img/logo/f_logo.png" alt="img" /></a>
                            </div>
                        </div>
                        <div class="col-lg-4 text-center">

                        </div>
                        <div class="col-lg-4 text-right text-xl-right">
                            Copyright &copy; Kodo Sponsorships 2023 . All rights reserved.
                        </div>
                    </div>
                </div>
            </div> */}
        </footer>
    )
}

export default Footer