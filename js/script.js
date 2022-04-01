
let gridSize = 16;



const GRID_CONTAINER = document.getElementById("grid_container");

const CONTROL_PANEL = document.getElementById("control_panel");


const grid_item = document.createElement("div");
grid_item.classList.add("grid-item");


const createGridItems = () => {
    GRID_CONTAINER.innerHTML = '';
    for (let i = 1; i <= gridSize * gridSize; i++) {
        const grid_item = document.createElement("div");
        grid_item.classList.add("grid-item");
        grid_item.setAttribute("id", i);
        GRID_CONTAINER.appendChild(grid_item);
    }
    GRID_CONTAINER.setAttribute("style", `grid-template-rows: repeat(${gridSize}, 1fr); grid-template-columns: repeat(${gridSize}, 1fr)`);
}

const createSizeSelector = () => {
    const SIZE_SELECTOR = document.createElement("input");
    SIZE_SELECTOR.setAttribute("id", "size_selector");
    SIZE_SELECTOR.setAttribute("type", "range");
    SIZE_SELECTOR.setAttribute("min", "1");
    SIZE_SELECTOR.setAttribute("max", "64");
    SIZE_SELECTOR.setAttribute("value", 16);
    CONTROL_PANEL.appendChild(SIZE_SELECTOR);
}

const createControlPanel = () => {
    createSizeSelector();
}

createControlPanel();
createGridItems();

const SIZE_SELECTOR = document.getElementById("size_selector");

const updateGridSize = () => {
    gridSize = SIZE_SELECTOR.value;
    console.log(gridSize);
    createGridItems();
  }
  

SIZE_SELECTOR.addEventListener("click", updateGridSize);


