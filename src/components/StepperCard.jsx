import React from "react";
import {
	BiSignal1,
	BiSignal2,
	BiSignal3,
	BiSignal4,
	BiSignal5,
} from "react-icons/bi";
import "./stepperFourCss.css";

function StepperCard({ item, handleClick, selectedCard }) {
	const signal = (id) => {
		switch (id) {
			case 1:
				return (
					<BiSignal1
						style={{
							color: "red",
							width: "6rem",
							height: "4rem",
						}}
					/>
				);
			case 2:
				return (
					<BiSignal2
						style={{
							color: "red",
							width: "6rem",
							height: "4rem",
						}}
					/>
				);
			case 3:
				return (
					<BiSignal3
						style={{
							color: "red",
							width: "6rem",
							height: "4rem",
						}}
					/>
				);
			case 4:
				console.log("It's Monday!");
				return (
					<BiSignal4
						style={{
							color: "red",
							width: "6rem",
							height: "4rem",
						}}
					/>
				);
			case 5:
				console.log("It's Monday!");
				return (
					<BiSignal5
						style={{
							color: "red",
							width: "6rem",
							height: "4rem",
						}}
					/>
				);
			case 6:
				console.log("It's Monday!");
				return (
					<BiSignal5
						style={{
							color: "red",
							width: "6rem",
							height: "4rem",
						}}
					/>
				);
			default:
				return null;
		}
	};

	return (






		<div className="_option_9bife_5 _selected_9bife_44">
                  <div className="_optionInner_9bife_23">
                    <input
                      id="Associate"
                      type="checkbox"
                      className="_optionCheckmark_9bife_94"
                      data-testid="educationlevel-associates"
                      value="associates"
                    />
                    <label htmlFor="Associate" className="_optionBody_9bife_90">
                      <span className="_optionIcon_9bife_48">
                        <div style={{ height: "1.5rem", width: "1.5rem" }}>
                          <img
                            loading="lazy"
                            src="https://res.cloudinary.com/highereducation/image/upload/co_rgb:e22944,e_colorize:100,f_auto,fl_lossy,q_auto,h_48,w_48/v1/Voyager/signal2"
                            alt="signal2"
                          />
                        </div>
                      </span>
                      <div>
                        <span className="_optionLabel_9bife_106 _normal_9bife_137">
                          Associate
                        </span>
                      </div>
                    </label>
                  </div>
                </div>


								
		// <div
		//     style={{height:"8rem"}}
		// 	className={`card  ${
		// 		selectedCard === item.id ? "selected" : "notSelected"
		// 	}`}
		// 	onClick={() => handleClick(item.text, item.id)}
		// >
		// 	<div
		// 		style={{
		// 			borderRadius: "50%",
		// 			background: "#E6E9ED",
		// 			width: "2.5rem",
		// 			height: "2.3rem",
		// 			display: "flex",
		// 			alignItems: "center",
		// 			justifyContent: "center",
		// 			padding: "px",
		// 		}}
		// 	>
		// 		{signal(item.id)}
		// 	</div>

		// 	<div
		// 		style={{
		// 			marginTop: "1rem",
		// 			display: "flex",
		// 			alignItems: "center",
		// 			justifyContent: "center",
		// 			width: "100%",
		// 			padding: "1rem",
		// 		}}
		// 	>
		// 		<h5>{item.text}</h5>
		// 	</div>
		// </div>
	);
}

export default StepperCard;
