const container = document.querySelector("#container");

const numOfCell = 16 * 16;

for (let i = 0; i < numOfCell; i++) {
    let cell = document.createElement("div");
    cell.setAttribute('class', 'cell');
    container.appendChild(cell);

    cell.addEventListener('mouseenter', (e) => {
        cell.classList.add('cellHovering');
    })
}