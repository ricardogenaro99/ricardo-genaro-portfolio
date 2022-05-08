import React, { useState, useRef } from "react";
import Chevron from "./Chevron";

import "./Accordion.css";

const Accordion = (props) => {
	const [active, setActiveState] = useState("");
	const [height, setHeightState] = useState("0px");
	const [rotate, setRotateState] = useState("accordion__icon");

	const content = useRef(null);

	const toggleAccordion = () => {
		setActiveState(active === "" ? "active_accordion" : "");
		setHeightState(
			active === "active_accordion"
				? "0px"
				: `${content.current.scrollHeight}px`,
		);
		setRotateState(
			active === "active_accordion"
				? "accordion__icon"
				: "accordion__icon rotate",
		);
	};

	return (
		<section className="accordion__section">
			<button className={`accordion ${active}`} onClick={toggleAccordion}>
				<p className="accordion__title">{props.title}</p>
				<Chevron
					className={`${rotate}`}
					width={10}
					fill={"var(--secondary-color-gray)"}
				/>
			</button>
			<div
				ref={content}
				style={{ maxHeight: `${height}` }}
				className="accordion__content"
			>
				<div className="accordion__text">{props.content}</div>
			</div>
		</section>
	);
};

export default Accordion;
