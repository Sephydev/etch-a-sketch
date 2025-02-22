const container = document.querySelector("#container");
const reset = document.querySelector("#reset");
let size = 16;

createGrid();

reset.addEventListener('click', (e) => {
    size = prompt('Please enter the side size of the new Etch a Sketch', 16);
    if (size <= 100) {
        removeGrid();
        createGrid();
    } else {
        let error = document.createElement("p");
        error.textContent = "Error. Cannot create a grid bigger than 100 x 100. Please try again";
        reset.after(error);
    }
})

function removeGrid() {
    const row = document.querySelectorAll(".row");
    Array.from(row).map(cell => {
        cell.remove();
    })

    let error = document.querySelector("p");
    if (error) {
        error.remove();
    }
}

function createGrid() {
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add('row');

        for (let j = 0; j < size; j++) {
            let cell = document.createElement("div");
            cell.setAttribute('class', 'cell');
            cell.setAttribute('style', 'opacity: 0.1;')
            row.appendChild(cell);

            cell.addEventListener('mouseenter', (e) => {
                let opacity = +cell.style.opacity + 0.1
                console.log(opacity);
                cell.setAttribute('style', `
                    background-color: rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()});
                    opacity: ${opacity};
                    `);
            })
        }

        container.appendChild(row)


    }
}

function randomRGB() {
    rdmRGB = Math.floor((Math.random() * 255) + 1);
    return rdmRGB;
}