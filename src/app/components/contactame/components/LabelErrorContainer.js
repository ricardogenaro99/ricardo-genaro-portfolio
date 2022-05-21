import React from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
`;
const LabelErrorContainer = ({ id, label, error }) => {
	const textLabel = `_${label}:`;

	return (
		<Container>
			<label htmlFor={id}>{textLabel} </label>
			{error && <span className="error-msg">{error}</span>}
		</Container>
	);
};

export default LabelErrorContainer;
