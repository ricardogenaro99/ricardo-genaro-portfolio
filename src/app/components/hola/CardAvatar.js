import React from "react";
import "./CardAvatar.css";

const CardAvatar = ({ children }) => {
	return (
		<div className="box">
			<div className="content">{children}</div>
		</div>
	);
};

export default CardAvatar;
