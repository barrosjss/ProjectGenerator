const options = [
    "Opción 1",
    "Opción 2",
    "Opción 3",
    "Opción 4",
    "Opción 5"
];

const resultDiv = document.getElementById("result");
const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomOption = options[randomIndex];
    resultDiv.textContent = `Opción seleccionada: ${randomOption}`;
});
