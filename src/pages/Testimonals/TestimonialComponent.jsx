import { useEffect } from 'react';
import $ from 'jquery';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './testimonial.css'; // Assuming you create this file for additional CSS
 // Assuming you create this file for additional JavaScript


function TestimonialComponent({name, text, image, profession}) {


  return (
  <div className=" container">
        <div className="row " style={{display: "flex", alignItems: "center", justifyContent:"center"}}>
        <div className="col-md-offset-2 col-md-8 ">
            <div id="testimonial-slider" className="owl-carousel">
                <div className="testimonial">
                    <div className="testimonial-content">
                        <p className="description">
                         {text}
                        </p>
                        
                    </div>
                    <div className="testimonial-profile">
                        <div className="pic">
                            <img src={image} alt="" style={{width: "100%", height: "100%", objectFit: "cover"}}/>
                        </div>
                        <h3 className="title">
                            {name}
                            <span className="post">{profession}</span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default TestimonialComponent;

