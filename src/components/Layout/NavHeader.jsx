import React from 'react';
import {Link} from 'react-router-dom';
import { useState, useEffect } from "react";
import './NavHeader.css';


export default function NavHeader() {
  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/scholarships", label: "Scholarships" },
    { href: "/testimonial", label: "Testimonials" },
    { href: "/blog", label: "Blogs" },
    { href: "/contact", label: "Contact" },
  ]
 

  return (
    <div>
      <nav
        style={{
          position: 'relative',
          padding: 10
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div>
            <Link
              to='/'
            >
             <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kodo%20Schools%20Logo-20%201-m9kSeX93hpeGI06AhwmlhwK4gwv3sw.png"
                  alt="Kodo"
                  width={80}
                  height={24}
                />
            </Link>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row', // Ensures horizontal layout
              gap: '2rem', // Adds spacing between items
              alignItems: 'center', // Aligns items vertically
            }}
          >
          {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    style={{
                      color: '#1D2855'
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
          
          </div>
          <div className="flex-container">
            <div
              style={{
                border: '1px solid black',
                borderRadius: 25,
                padding: 12,
                width:75,
                height: 45,
              }}
              className='shadow'
            >
              <Link 
                to="/login" 
                className="hidden-sm login-link"
                style={{
                  textAlign: 'center',
                  fontSize: 13,
                  color: '#1D2855'
                }}
              >
                Login
              </Link>
            </div>
            <Link to="/scholarships" className="hidden-sm scholarship-link shadow">
              Find Scholarships →
            </Link>
          </div>
        </div>
      </nav>
      
    </div>
  );
}