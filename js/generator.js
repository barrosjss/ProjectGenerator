const options = [
  ["Ableton", "https://www.frontendpractice.com/projects/ableton"],
  ["Bonsai", "https://www.frontendpractice.com/projects/bonsai"],
  ["Pulse", "https://www.frontendpractice.com/projects/pulse"],
  ["Podia", "https://www.frontendpractice.com/projects/podia"],
  ["Starbucks", "https://www.frontendpractice.com/projects/starbucks"],
  ["Ecwid", "https://www.frontendpractice.com/retired/ecwid"],
  ["Grasshopper", "https://www.frontendpractice.com/retired/grasshopper"],
  ["Red Square", "https://www.frontendpractice.com/retired/red-square"],
  ["Instrument", "https://www.frontendpractice.com/retired/instrument"],
  ["Shopify Dev", "https://www.frontendpractice.com/retired/shopify-dev"],
];

const resultDiv = document.getElementById("result");
const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * options.length);
  const [optionName, optionLink] = options[randomIndex];
  resultDiv.innerHTML = `<p>Opción seleccionada: <a href="${optionLink}" target="_blank">${optionName}</a></p>`;
});