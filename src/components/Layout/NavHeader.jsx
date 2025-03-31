import React from 'react';
import {Link} from 'react-router-dom';
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import './NavHeader.css';
import logo from '../../assets/logo.png';
import {useLocation} from 'react-router-dom';


export default function NavHeader() {
  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/aboutus", label: "About" },
    { href: "/scholarships", label: "Scholarships" },
    { href: "/testimonals", label: "Testimonials" },
    { href: "/blog", label: "Blogs" },
    { href: "/contactus", label: "Contact" },
  ]

  const location = useLocation();
  console.log(location.pathname);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 950) {
        // Changed from 768px to 950px to match the design
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
 

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
    <div className="container">
      <nav className="nav">
        {/* Logo section */}
        <div className="logo-Container">
          <Link to="/" className="logo-link">
            <img
              src={logo}
              alt="Kodo"
              width={120}
              height={24}
              className="logo-img"
              style={{
                width: 'full',
                height: 'full'
              }}
            />
          </Link>
        </div>
  
        {/* Navigation links */}
        <div className="nav-links">
          {navigationItems.map((item) => (
            <Link style={{
              textDecoration: 'none',
              color: '#1d2855'
            }} key={item.href} to={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </div>
  
        {/* Right section with login, CTA button, and menu toggle */}
        <div className="nav-right">
          {
            location.pathname == '/signin'|| location.pathname == '/login' || location.pathname == '/forgot/password' || location.pathname == '/final' ? '' : <Link to="/login" className="login-link">Login</Link>
          }
          <Link to="/scholarships" className="cta-button">Find Scholarships →</Link>
  
          {/* Mobile menu toggle */}
          <button className="menu-button" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <IoIosCloseCircleOutline size={30} /> : <Menu />}
          </button>
        </div>
      </nav>
    </div>
  
    {/* Mobile Menu Overlay */}
    {isMobileMenuOpen && (
      <div className="mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)} />
    )}
  
    {/* Mobile Menu */}
    <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
      <div className="mobile-menu-content">
        {navigationItems.map((item) => (
          <Link style={{
            color: '#1d2855'
          }} key={item.href} to={item.href} className="mobile-menu-item" onClick={() => setIsMobileMenuOpen(false)}>
            {item.label}
          </Link>
        ))}
  
        {/* Additional Mobile-only Links */}
        <Link to="/login" className="mobile-menu-item sm-hidden" onClick={() => setIsMobileMenuOpen(false)}>
          Login
        </Link>
        <div className="mobile-menu-button-container sm-hidden">
          <Link to="/scholarships" className="mobile-cta-button" onClick={() => setIsMobileMenuOpen(false)}>
            Find Scholarships →
          </Link>
        </div>
      </div>
    </div>
  </header>
  );
}