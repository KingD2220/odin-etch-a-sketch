const container = document.querySelector('.container');

//Initial 16x16 grid
generateGrid(16);

//Change square to black on mouse over
container.addEventListener('mouseover', (e) => {
    let target = e.target;
    target.style.backgroundColor = 'black';
});


//Button to generate a new grid
const button = document.querySelector('button');
button.addEventListener('click', () => {
    let n = Number(prompt('How many squares per side? (Up to 100)'));
    while (!Number.isInteger(n) || n < 1 || n > 100) {
        n = Number(prompt('Input is invalid. Please enter a number between 1 and 100'));
    }
    generateGrid(n);
});

//Generate grid of with numSquares squares per side
function generateGrid(numSquares) {

    removeGrid();

    let squareSize = 100 / numSquares;

    //Create new grid
    for (let i = 1; i <= numSquares; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.style.height = squareSize + '%'
        container.appendChild(row);

        for (let j = 1; j <= numSquares; j++) {
            const col = document.createElement('div');
            col.classList.add('col');
            col.style.width = squareSize + '%';
            col.style.height = '100%';
            row.appendChild(col);
        }
    }
}

//Remove current grid
function removeGrid() {
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }
}