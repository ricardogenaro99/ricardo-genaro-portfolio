import React from "react";
import "./Checked.css";

const Checked = ({ name, active, setActive }) => {
	return (
		<label className="cbx" htmlFor={name}>
			<div className="checkmark">
				<input
					type="checkbox"
					className="cbx-input"
					id={name}
					checked={active}
					onChange={setActive}
				/>
				<div className="flip">
					<div className="front"></div>
					<div className="back">
						<svg viewBox="0 0 15 15" height="10" width="12">
							<path d="M2 8.5L6 12.5L14 1.5"></path>
						</svg>
					</div>
				</div>
			</div>
		</label>
	);
};

export default Checked;
