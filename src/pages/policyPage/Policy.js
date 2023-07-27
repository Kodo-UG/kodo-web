import React from "react";
import "./policy.css";

function Policy() {
  return (
    <div className="policyBox">
      <div className="policy">
        <div className="content">
          <div >
            <img src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688759275/logo-kodo-removebg-preview_zz6r2w.png" alt="" style={{
                width: "100px"
            }}/>
          </div>
          <h1>Privacy Policy</h1>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              magni eaque labore sint ratione provident laboriosam quasi
              architecto laborum deserunt aspernatur repellat natus, itaque
              voluptates. Delectus nulla facilis molestias optio!
            </p>
          </div>
        </div>
        <div className="other">
          <div className="checkbox">agree</div>
          <div className="btnz">buttons</div>
        </div>
      </div>
    </div>
  );
}

export default Policy;
