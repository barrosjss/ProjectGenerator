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

const messageP = document.getElementById("message");
const projectDisplay = document.getElementById("projectDisplay");
const generateBtn = document.getElementById("generateBtn");
const historySection = document.getElementById("historySection");
const historyList = document.getElementById("historyList");

let history = [];

const updateHistory = (name, link) => {
  // Add to history and keep only the last 3
  if (history.find(item => item.name === name)) return;
  
  history.unshift({ name, link });
  if (history.length > 3) history.pop();

  // Render history
  historySection.style.display = "block";
  historyList.innerHTML = history
    .map(
      (item) => `
    <div class="history-item">
      <span>${item.name}</span>
      <a href="${item.link}" target="_blank" style="color: var(--primary); text-decoration: none;">Link</a>
    </div>
  `
    )
    .join("");
};

const getRandomOption = () => options[Math.floor(Math.random() * options.length)];

generateBtn.addEventListener("click", () => {
  if (generateBtn.disabled) return;

  generateBtn.disabled = true;
  messageP.textContent = "Buscando inspiración...";
  projectDisplay.innerHTML = `<p class="selected-project spinning">Cocinando...</p>`;

  let iterations = 0;
  const maxIterations = 15;
  const interval = setInterval(() => {
    const tempOption = getRandomOption();
    projectDisplay.innerHTML = `<p class="selected-project spinning">${tempOption[0]}</p>`;
    iterations++;

    if (iterations >= maxIterations) {
      clearInterval(interval);
      const [optionName, optionLink] = getRandomOption();
      
      messageP.textContent = "¡Proyecto seleccionado!";
      projectDisplay.innerHTML = `
        <div class="selected-project">${optionName}</div>
        <a href="${optionLink}" target="_blank" class="project-link">Ver detalles</a>
      `;
      
      updateHistory(optionName, optionLink);
      generateBtn.disabled = false;
    }
  }, 80);
});