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
    <div className="min-h-screen flex flex-col justify-center ">
      <CustomContainer className="bg-eeeef7  rounded-4xl  relative -mb-16">
          <div className="absolute top-0 right-0 h-64 w-64">
            <div className="relative w-full h-full"><img src="https://res.cloudinary.com/digrh1wj1/image/upload/v1742433295/Kodo-image-2-2we_1_op5x1b.png" 
          alt="vector" fill objectFit="contain" objectPosition="right"/></div>
          </div>
            <div className=" ">
            <h1 className="mb-8 text-[32px] font-bold leading-tight text-[#1A1060]">Reach Out to us</h1>

                <div className="mb-16 grid gap-6 md-grid-cols-3 z-20">
                  {contactInfo.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center rounded-4xl bg-white text-center p-8"
                      >
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-kodo-cyan"
                          style={{
                            marginTop: 20
                          }}
                        >
                          <img src={item.icon} alt="" width={24} height={24} />
                        </div>
                        <h3 className="mb-2 text-base font-medium text-[#1A1060]">{item.title}</h3>
                        <p className="text-sm text-[#666666]">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CustomContainer>
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

			</CustomContainer>
		</div>
      </div>
              <div className='map'>
                  <h2 className="mb-8 text-center text-[28px] font-bold leading-tight text-[#1A1060]">
                    Scholarships all around the world
                  </h2>
                  <div className="relative aspect-[1.85/1] w-full overflow-hidden rounded-[32px] ">
                    <img src={mapImage} alt="World Map" fill className="object-cover  rounded-lg" />
                  </div>
              </div>

              <section className="" style={{
                width: '90%',
                margin: 'auto'
              }}>
                <div className=" rounded-4xl pb-24  relative">
                  <FindScholarships />
                </div>
                <div className="h-60 w-full"/>
              </section>
        </div>
  );
}
