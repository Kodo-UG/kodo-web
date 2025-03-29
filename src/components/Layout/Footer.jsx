import React from 'react';
import {Link} from 'react-router-dom';
import './footer.css';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
	<footer
		className='footer'
	>
	<div className="container">
	  <div className="footer-content"
	  	style={{
			position: 'relative'
		}}
	  >
		{/* Logo */}
		<div className="logo-container">
		  <Link to="/" className="inline-block">
			<img
			  src={logo}
			  alt="Kodo Scholarships"
			//   width={120}
            //   height={24}
              className="logo-img"
              style={{
                width: 'full',
                height: 'full'
			}}
			/>
		  </Link>
		</div>

		<div className="links-container">
		  {/* Navigation Links - First Column */}
		  <div className="link-column">
			<Link to="/about">About</Link>
			<Link to="/scholarships">Scholarships</Link>
			<Link to="/testimonials">Testimonials</Link>
			<Link to="/contact">Contact</Link>
		  </div>

		  {/* Navigation Links - Second Column */}
		  <div className="link-column">
			<Link to="/terms">Terms Of Service</Link>
			<Link to="/blog">Blog</Link>
			<Link to="/privacy">Privacy Policy</Link>
		  </div>

		  {/* App Download Buttons */}
		  <div className="app-buttons">
			<Link to="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
			  <img
				src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/App%20Store%20%E8%8B%B1%E6%96%87%20%E9%BB%91%E8%89%B2-mzVnx5Nup7Y6MoevDioYCglyFN83fG.png"
				alt="Download on the App Store"
			  />
			</Link>
			<Link to="https://play.google.com" target="_blank" rel="noopener noreferrer">
			  <img
				src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Google%20Play%20%E8%8B%B1%E6%96%87%20%E9%BB%91%E8%89%B2-5ip16nv7GXomrgrIDICT4vu5DL5slS.png"
				alt="Get it on Google Play"
			  />
			</Link>
		  </div>
		</div>
	  </div>
	</div>

	{/* Bottom Bar */}
	
  </footer>
  )
}

export default Footer