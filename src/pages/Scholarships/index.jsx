import { useState } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

const Scholarships = () => {
  const config = {
    public_key: "FLWPUBK-c0a2bbbc88f38c522c6a798a8af45364-X",
    tx_ref: Date.now(),
    amount: "10",
    currency: "UGX",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "frank.mwesigwa1@gmail.com",
      phone_number: "0779825056",
      name: "Frank Mwesigwa",
    },
    customizations: {
      title: "Kodo Scholarships Payments",
      description: "Payments for Kodo Scholarships",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
  return (
    <>
      {/* <div class="col-lg-7">
                        <div class="section-title wow fadeInLeft animated" data-animation="fadeInDown animated" data-delay=".2s">
                            <h2>Get every single answer here.</h2>
                            <p>A business or organization established to provide a particular service, typically one that involves a organizing transactions.</p>
                        </div>
                        <div class="faq-wrap mt-30 pr-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                            <div class="accordion" id="accordionExample">
                                <div class="card">
                                    <div class="card-header" id="headingThree">
                                        <h2 class="mb-0">
                                            <button class="faq-btn" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree2"  >
                                                01 Cras turpis felis, elementum sed mi at arcu ?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseThree2" class="collapse show"
                                        data-bs-parent="#accordionExample">
                                        <div class="card-body">
                                            Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h2 class="mb-0">
                                            <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne"  >
                                                02 Vestibulum nibh risus, in neque eleifendulputate sem ?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseOne" class="collapse" data-bs-parent="#accordionExample">
                                        <div class="card-body">
                                            Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingTwo">
                                        <h2 class="mb-0">
                                            <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo"  >
                                                03 Donec maximus, sapien id auctor ornare ?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseTwo" class="collapse" data-bs-parent="#accordionExample">
                                        <div class="card-body">
                                            Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">
                                        <h2 class="mb-0">
                                            <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree"  >
                                                04 Vestibulum nibh risus, in neque eleifendulputate sem ?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseThree" class="collapse" data-bs-parent="#accordionExample">
                                        <div class="card-body">
                                            Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingFour">
                                        <h2 class="mb-0">
                                            <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseFive"  >
                                                05 Donec maximus, sapien id auctor ornare ?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseFive" class="collapse" data-bs-parent="#accordionExample">
                                        <div class="card-body">
                                            Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="contact-bg02">
                            <div class="section-title wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                                <h2>
                                    Make An Contact
                                </h2>

                            </div>

                            <form action="mail.php" method="post" class="contact-form mt-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" id="firstn" name="firstn" placeholder="First Name" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-subject mb-20">
                                            <input type="text" id="email" name="email" placeholder="Email" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-subject mb-20">
                                            <input type="text" id="phone" name="phone" placeholder="Phone No." required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-message mb-30">
                                            <textarea name="message" id="message" cols="30" rows="10" placeholder="Write comments"></textarea>
                                        </div>
                                        <div class="slider-btn">
                                            <button class="btn ss-btn" data-animation="fadeInRight" data-delay=".8s"><span>Submit Now</span> <i class="fal fa-long-arrow-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div> */}
      <div class="pricing6 py-5 bg-light">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8 text-center">
              <h3 class="mb-3">Pricing to make your Work Effective</h3>
              <h6 class="subtitle font-weight-normal">
                We offer 100% satisafaction and Money back Guarantee
              </h6>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-4">
              <div class="card card-shadow border-0 mb-4">
                <div class="card-body p-4">
                  <div class="d-flex align-items-center">
                    <h5 class="font-weight-medium mb-0">Basic Plan</h5>
                    <div class="ml-auto">
                      <span class="badge badge-danger font-weight-normal p-2">
                        Popular
                      </span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-5 text-center">
                      <div class="price-box my-3">
                        <sup>$</sup>
                        <span class="text-dark display-5">10</span>
                        <h6 class="font-weight-light">MONTHLY</h6>
                        <a
                          class="btn btn-info-gradiant font-14 border-0 text-white p-3 btn-block mt-3"
                          onClick={() =>
                            handleFlutterPayment({
                              callback: (response) => {
                                console.log(response);
                                closePaymentModal();
                              },
                              onClose: () => {},
                            })
                          }
                        >
                          CHOOSE PLAN{" "}
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-7 align-self-center">
                      <ul class="list-inline pl-3 font-14 font-weight-medium text-dark">
                        <li class="py-2">
                          <i class="icon-check text-info mr-2"></i>{" "}
                          <span>6 Days a Week </span>
                        </li>
                        <li class="py-2">
                          <i class="icon-check text-info mr-2"></i>{" "}
                          <span>Dedicated Trainer</span>
                        </li>
                        <li class="py-2">
                          <i class="icon-check text-info mr-2"></i>{" "}
                          <span>Diet Plan Included </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card card-shadow border-0 mb-4">
                <div class="card-body p-4">
                  <div class="d-flex align-items-center">
                    <h5 class="font-medium m-b-0">Advanced Plan</h5>
                  </div>
                  <div class="row">
                    <div class="col-lg-5 text-center">
                      <div class="price-box my-3">
                        <sup>$</sup>
                        <span class="text-dark display-5">30</span>
                        <h6 class="font-weight-light">SEMI ANNUAL</h6>
                        <a
                          class="btn btn-info-gradiant border-0 font-14 text-white p-3 btn-block mt-3"
                          href="#"
                        >
                          CHOOSE PLAN{" "}
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-7 align-self-center">
                      <ul class="list-inline pl-3 font-14 font-weight-medium text-dark">
                        <li class="py-2">
                          <i class="icon-check text-info mr-2"></i>{" "}
                          <span>6 Days a Week </span>
                        </li>
                        <li class="py-2">
                          <i class="icon-check text-info mr-2"></i>{" "}
                          <span>Dedicated Trainer</span>
                        </li>
                        <li class="py-2">
                          <i class="icon-check text-info mr-2"></i>{" "}
                          <span>Diet Plan Included </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card card-shadow border-0 mb-4">
                <div class="card-body p-4">
                  <div class="d-flex align-items-center">
                    <h5 class="font-medium m-b-0">Advanced Plan</h5>
                  </div>
                  <div class="row">
                    <div class="col-lg-5 text-center">
                      <div class="price-box my-3">
                        <sup>$</sup>
                        <span class="text-dark display-5">60</span>
                        <h6 class="font-weight-light">YEARLY</h6>
                        <a
                          class="btn btn-info-gradiant border-0 font-14 text-white p-3 btn-block mt-3"
                          href="#"
                        >
                          CHOOSE PLAN{" "}
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-7 align-self-center">
                      <ul class="list-inline pl-3 font-14 font-weight-medium text-dark">
                        <li class="py-2">
                          <i class="icon-check text-info mr-2"></i>{" "}
                          <span>6 Days a Week </span>
                        </li>
                        <li class="py-2">
                          <i class="icon-check text-info mr-2"></i>{" "}
                          <span>Dedicated Trainer</span>
                        </li>
                        <li class="py-2">
                          <i class="icon-check text-info mr-2"></i>{" "}
                          <span>Diet Plan Included </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scholarships;
