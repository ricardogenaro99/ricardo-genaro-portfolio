import React from "react";
import styled from "styled-components";

const gapPadding = "20px";

const Container = styled.article`
	max-width: ${(props) => props.maxWidth};
	width: 100%;
	display: grid;
	gap: 20px;

	.name-project {
		color: var(--secondary-color-purple);
	}
`;

const CardModelStyle = styled.div`
	display: grid;
	grid-template-rows: auto 1fr;
	border-radius: 15px;
	overflow: hidden;
	outline: 1px solid var(--lines-color);
	background: var(--primary-color-blue-active);

	.img-project {
		object-fit: cover;
		height: 145px;
		width: 100%;
	}

	.body-card {
		display: grid;
		gap: ${gapPadding};
		padding: ${gapPadding} 0;
		> * {
			padding: 0 ${gapPadding};
		}
		> p {
			max-height: 169px;
			overflow-y: auto;
		}
		div {
			display: flex;
			a {
				padding: 10px;
				background: #1c2b3a;
				text-decoration: none;
				border-radius: 8px;
				color: #fff;
			}
		}
	}

	width: 100%;
	height: 100%;
`;

const CardModel = ({ srcImage, linkProject, alt }) => {
	return (
		<CardModelStyle>
			<img className="img-project" src={srcImage} alt={alt} />
			<section className="body-card">
				<p>Lorem ipsum dolor sit amet, consectetur</p>
				<div>
					<a
						href={linkProject}
						target="_blank"
						rel="noopener noreferrer"
					>
						ver-proyecto
					</a>
				</div>
			</section>
		</CardModelStyle>
	);
};

const CardProyecto = ({ name, srcImage, linkProject, maxWidth }) => {
	return (
		<Container maxWidth={maxWidth}>
			<h3 className="name-project">{name}</h3>
			<CardModel
				srcImage={srcImage}
				linkProject={linkProject}
				alt={name}
			/>
		</Container>
	);
};

export default CardProyecto;
