/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

const Features = () => {
    return (
        <section class="steps-area p-relative bg-primar" style={{backgroundColor: '#032e3f', paddingBottom: "100px", padding: "100px"}}>
            <div class="animations-10 "><img src="https://res.cloudinary.com/itgenius/image/upload/v1688241999/an-img-10_g61hnh.png" alt="an-img-01" /></div>
            <div class="container">

                <div class="row align-items-center ">
                    <div class="col-lg-6 col-md-12">
                        <div class="section-title mb-35 wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                            <h2 class="font-weight-bold">Our Best Features</h2>
                            <p>We have developed deep expertise in Education Technology and Communication support.</p>
                        </div>
                        <ul class="pr-20">
                            <li>
                                <div class="step-box wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                                    <div class="dnumber">
                                        <div class="date-box"><img src="https://res.cloudinary.com/itgenius/image/upload/v1688241848/fea-icon01_wzszas.png" alt="icon" /></div>
                                    </div>
                                    <div class="text">
                                        <h3 class="font-weight-bold">Kodo Ai</h3>
                                        <p>Our kodo scholarship AI will compare your profile to thousands of active scholarships to create a prioritized list of opportunities. You’ll be able to sort by level effort, due dates and award amount.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="step-box wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                                    <div class="dnumber">
                                        <div class="date-box"><img src="https://res.cloudinary.com/itgenius/image/upload/v1688241848/fea-icon02_eyvyv9.png" alt="icon" /></div>
                                    </div>
                                    <div class="text">
                                        <h3 class="font-weight-bold"> Expert Support</h3>
                                        <p>Experience peace of mind with our extensive all-season support team , providing you with the resources and guidance you need.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="step-box wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                                    <div class="dnumber">
                                        <div class="date-box"><img src="https://res.cloudinary.com/itgenius/image/upload/v1688241848/fea-icon03_loll6n.png" alt="icon" /></div>
                                    </div>
                                    <div class="text">
                                        <h3 class="font-weight-bold">Appliation Process</h3>
                                        <p>Take control of your success with our extensive feature-rich dashboard, to provide you with a comprehensive view of your progress and personalized insights to help you reach your full potential.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="step-img wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s">
                            <img src="https://res.cloudinary.com/itgenius/image/upload/v1688241561/man-woman-students-with-documents_xuy7jp.jpg" alt="class image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features