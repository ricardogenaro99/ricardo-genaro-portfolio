import React from "react";
import "./Card.css";
const Card = ({ children }) => {
	return (
		<div className="box">
			<div className="content">{children}</div>
		</div>
	);
};

export default Card;
