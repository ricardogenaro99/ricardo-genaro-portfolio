import { useEffect, useRef, useState } from "react";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { valuePx } from "../../styles/Breakpoints";
import "./Accordion.css";
import Chevron from "./Chevron";

const Accordion = (props) => {
	const content = useRef(null);

	const [active, setActiveState] = useState("");
	const [height, setHeightState] = useState("0px");
	const [rotate, setRotateState] = useState("accordion__icon");

	const { widthWindow } = useWindowDimensions();

	useEffect(() => {
		if (widthWindow > valuePx.tabletS && active === "") {
			toggleAccordion();
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
