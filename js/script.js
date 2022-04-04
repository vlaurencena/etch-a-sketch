// ELEMENTS

const GRID_CONTAINER = document.getElementById("grid_container");
const CONTROL_PANEL = document.getElementById("control_panel");
const MODE_SELECTOR = document.getElementById("mode_selector");
const SIZE_SELECTOR = document.getElementById("size_selector");

// INITIAL CONFIGURATION & SETUP

const DEFAULT_COLOR = "#333333";
const DEFAULT_MODE = "color";
const DEFAULT_SIZE = 16;

const firstLoadModeSelector = () => {
    document.getElementById(`${DEFAULT_MODE}`).classList.add("active");
}
firstLoadModeSelector();

const createColorSelector = () => {
    const COLOR_SELECTOR = document.createElement("input");
    COLOR_SELECTOR.setAttribute("id", "color_selector");
    COLOR_SELECTOR.setAttribute("type", "color");
    CONTROL_PANEL.prepend(COLOR_SELECTOR);
}
createColorSelector();

// LATER MODIFICATIONS
let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;
let gridSize = DEFAULT_SIZE;

const updateGridItem = (e) => {
    console.log(currentMode);
    if (currentMode === "rainbow") {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        currentColor = `rgb(${randomR}, ${randomG}, ${randomB})`;

    }
    document.getElementById(e.target.id).setAttribute("style", `background-color: ${currentColor}`);
}
const createGridItems = () => {
    GRID_CONTAINER.innerHTML = '';
    const grid_item = document.createElement("div");
    grid_item.classList.add("grid-item");
    for (let i = 1; i <= gridSize * gridSize; i++) {
        const grid_item = document.createElement("div");
        grid_item.classList.add("grid-item");
        grid_item.setAttribute("id", i);
        grid_item.addEventListener("click", updateGridItem)
        GRID_CONTAINER.appendChild(grid_item);
    }
    GRID_CONTAINER.setAttribute("style", `grid-template-rows: repeat(${gridSize}, 1fr); grid-template-columns: repeat(${gridSize}, 1fr)`);
}

createGridItems();
const updateCurrentColor = (e) => {
    currentColor = e.target.value;
}

const updateModeButtons = () => {
    for (i = 0; i < 4; i++) {
        MODE_SELECTOR.getElementsByTagName("button")[i].classList.remove("active");
    }
    document.getElementById(`${currentMode}`).classList.add("active");
}
const updateModeSelector = (e) => {
    currentMode = e.target.id;
    console.log(currentMode);
    updateModeButtons();
    if (currentMode === "eraser") {
        currentColor = "transparent";
    } else if (currentMode === "clear") {
        currentMode = "color";
        updateGridSize();
        createGridItems();
        updateModeButtons();
        currentColor = DEFAULT_COLOR;
    } else if (currentMode === "color") {
        currentColor = DEFAULT_COLOR;
    }
}
const updateGridSize = () => {
    gridSize = SIZE_SELECTOR.value;
    document.getElementById("size_selector_display").innerText = `${gridSize} x ${gridSize}`;
    console.log(gridSize);

}



updateGridSize();

SIZE_SELECTOR.addEventListener("click", updateGridSize);
for (i = 0; i < 4; i++) {
    MODE_SELECTOR.getElementsByTagName("button")[i].addEventListener("click", updateModeSelector);
}


document.getElementById("color_selector").addEventListener("input", updateCurrentColor);