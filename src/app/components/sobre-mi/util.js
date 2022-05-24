import { removeAccents } from "../../shared/utils/Funtions";

export const getItems = (pathNameLink = [], sectionName = "") => {
	return (
		pathNameLink.filter(
			(section) =>
				removeAccents(section.sectionName) ===
				removeAccents(sectionName),
		)[0].items || []
	);
};
