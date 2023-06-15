import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div class="container">
            <div class="row m-5">
                <div class="col-lg-12 text-center">
                    <h4 style={{marginBottom: '60px'}} class="welcome-title">Welcome Back</h4>
                </div>

                <div class="row">
                    <div class="col-lg-6">
                        <div class="card custom-card">

                            <div class="card-header d-flex align-items-center justify-content-center">
                                <img src="https://www.kodoscholarships.com/logo.png" style={{ width: '95px' }} alt="Logo" class="logo" />
                                <span class="card-title" style={{ fontSize: '18px', marginBottom: '-4px' }}>Scholarships</span>
                            </div>
                            <div class="card-body">
                                <p class="card-text text-center"> We’ve helped students win more than $10 million dollars in scholarships. </p>
                                <Link to="/stepper" class="btn ss-btn w-100" id="button1">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card custom-card">
                            <div class="card-header d-flex align-items-center justify-content-center">
                                <img src="https://www.kodoscholarships.com/logo.png" style={{ width: '95px' }} alt="Logo" class="logo" />
                                <span class="card-title" style={{ fontSize: '18px', marginBottom: '-4px' }}>Jobs</span>
                            </div>
                            <div class="card-body">
                                <p class="card-text text-center">Are you looking for a remote Job, find Life Changing Jobs Now !.</p>
                                <a href="https://www.kodoscholarships.com/steps/program" class="btn ss-btn w-100" id="button2">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login