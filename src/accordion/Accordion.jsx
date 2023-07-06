import React from "react";
import { accordionData } from "./AccordionData.js";
import AccordionCard from "./AccordionCard.jsx";
function Accordion() {
	return (
		<div
			style={{
				width: "90rem",
				justifyContent: "center",
				alignItems: "center",
				margin: "auto",
				padding: "100px",
			}}
			className="d-flex flex-row justify-content-between align-content-start"
		>
			<div className="flex-grow-1">
				<iframe
					width="253"
					height="380"
					src="https://www.youtube.com/embed/BU7t8JlYgv0"
					title="Step by step Blockchain Developer Roadmap 2023 | Code Eater - Blockchain | English"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				></iframe>
			</div>
			<div class="accordion mx-2 w-50" id="accordionExample">
				{accordionData.map(({ title, id, description }) => (
					<AccordionCard
						key={id}
						head={title}
						id={id}
						text={description}
					/>
				))}
			</div>
		</div>
	);
}

export default Accordion;
