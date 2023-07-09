import React from 'react'

function Cta() {
  return (
  <section class="cta-area cta-bg pt-50 pb-50 mb-100" style={{backgroundImage: 'url("https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688928918/360_F_536022929_rHVla2eMU4AiI95H75ykj6P47LCfEwQo_jfgwip.jpg")'}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title cta-title wow fadeInLeft animated" data-animation="fadeInDown animated" data-delay=".2s">
                                <h2>Free Consultation If You Want To Know About Kodo</h2>
                            </div>
                                             
                        </div>
                        <div className="col-lg-4 text-right"> 
                            <div className="cta-btn s-cta-btn wow fadeInRight animated mt-30" data-animation="fadeInDown animated" data-delay=".2s">
									  <a href="about.html" className="btn ss-btn smoth-scroll">SEARCH PROGRAMS <i class="fal fa-long-arrow-right"></i></a>			
								</div>
                        </div>
					
                    </div>
                </div>
            </section>
  )
}

export default Cta
