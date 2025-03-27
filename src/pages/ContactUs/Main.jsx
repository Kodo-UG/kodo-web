import React from "react";
import FindScholarships from "../../components/about/FindScholarships";
import CustomContainer from "../../components/ShredComponents/CustomerContainer";
import mapImage from "./map.jpg";
import "./main.css"; // Import CSS file

export default function Main() {
  const contactInfo = [
    {
      title: "Phone Number",
      icon: "https://res.cloudinary.com/digrh1wj1/image/upload/v1742433873/ic_baseline-phone_dcixhz.png",
      value: "+46 72 848 83 13",
    },
    {
      title: "Email Address",
      icon: "https://res.cloudinary.com/digrh1wj1/image/upload/v1742433873/mynaui_envelope-solid_l1mphe.png",
      value: "info@kodoscholarships.com",
    },
    {
      title: "Office Address",
      icon: "https://res.cloudinary.com/digrh1wj1/image/upload/v1742433873/mage_pin-fill_mlegus.png",
      value: "Oppegårdsstråket 5 A, lgh 1B04, 191 60 Sollentuna",
    },
  ];

  return (
    <div className="main-container">
      {/* Contact Section */}
      <div className="contact-section">
        <CustomContainer>
          <div style={{ position: "absolute", top: 0, right: 0, height: "16rem", width: "16rem" }}>
            <img
              src="https://res.cloudinary.com/digrh1wj1/image/upload/v1742433295/Kodo-image-2-2we_1_op5x1b.png"
              alt="vector"
              style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "right" }}
            />
          </div>

          <h1 className="contact-header">Reach Out to Us</h1>

          <div className="contact-grid">
            {contactInfo.map((item, index) => (
              <div key={index} className="contact-card">
                <div className="contact-icon">
                  <img src={item.icon} alt={item.title} width={24} height={24} />
                </div>
                <h3 className="contact-title">{item.title}</h3>
                <p className="contact-value">{item.value}</p>
              </div>
            ))}
          </div>
        </CustomContainer>
      </div>

      {/* Contact Form */}
      <div className="form-section">
		<div
			className="form-section-container"
		>
			<CustomContainer>
			<h2 className="contact-header">Send us a message</h2>

			<form className="form-container">
				<div className="input-grid">
				<input className="input-field" placeholder="Name" />
				<input className="input-field" placeholder="Phone" type="tel" />
				</div>
				<input className="input-field" placeholder="Email Address" type="email" />
				<textarea className="input-field" placeholder="Message or inquiry" />
				<button className="send-button">Send Message</button>
			</form>

			{/* Scholarship World Map Section */}
			<h2 className="scholarship-header">Scholarships all around the world</h2>

			<div className="scholarship-map">
				<img src={mapImage} alt="World Map" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" }} />
			</div>
			</CustomContainer>
		</div>
      </div>

      {/* Find Scholarships Section */}
      <section>
        <div>
          <FindScholarships />
        </div>
        <div style={{ height: "15rem", width: "100%" }} />
      </section>
    </div>
  );
}
