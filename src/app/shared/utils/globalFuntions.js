export function convertSizeCss(value, metric = "px") {
  return "".concat(value, metric);
}

export const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};
