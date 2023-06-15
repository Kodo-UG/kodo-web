import React from 'react'
import { Link } from 'react-router-dom'

const NavHeader = () => {
    return (
        <div id="header-sticky" class="menu-area">
            <div class="container">
                <div class="second-menu">
                    <div class="row align-items-center">
                        <div class="col-xl-3 col-lg-3">
                            <div class="logo">
                                <Link to="/"><img src="logo-kodo.png" alt="logo" /></Link>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6">
                            <div class="main-menu text-right text-xl-right">
                                <nav id="mobile-menu">
                                    <ul>
                                        <li class="has-sub"><Link to="/">Home</Link></li>
                                        <li><Link to="/aboutus">About Us</Link></li>
                                        <li><Link to="/scholarships">Scholarships</Link></li>
                                        <li><Link to="/testimonals">Testimonals</Link></li>
                                        <li><Link to="/blog">Blog</Link></li>
                                        <li><Link to="/contactus">Contact Us</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 text-right d-none d-lg-block text-right text-xl-right">
                            <div class="login">
                                <ul>
                                    <li>
                                        <div class="second-header-btn" id="loginbtn">
                                            <Link to="/login" class="btn" style={{ border: '1px solid #fff', backgroundColor: '#fff', color: '#000', zIndex: '999' }}>Login</Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="second-header-btn">
                                            <a href="contact.html" class="btn">admission open</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="mobile-menu"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavHeader