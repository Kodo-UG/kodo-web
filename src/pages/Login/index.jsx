import React from 'react';

export default function Login() {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <div className="col-md-6 bg-light d-flex align-items-center justify-content-center">
          <div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" />
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img
            src="https://res.cloudinary.com/ultronic-software-developers/image/upload/v1687970392/bg1-l_jptexl.jpg"
            alt="Image"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}
