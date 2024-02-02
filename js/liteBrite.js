var colorClass = '';
var blinking = false;
var interval;

function createLites(rows, cols) {
    const container = document.getElementById('liteBriteContainer'); // Replace with your container ID

    container.innerHTML = ''; // Clear previous content if any

    const cellSize = '1fr'; // Size of each cell in pixels

    container.style.display = 'grid';
    container.style.gridTemplateRows = `repeat(${rows}, ${cellSize})`; // Fix the syntax here
    container.style.gridTemplateColumns = `repeat(${cols}, ${cellSize})`; // Fix the syntax here

    for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement('div');
        cell.classList.add('liteBriteLite'); // You can add your own CSS class here
        container.appendChild(cell);

        // Add a click event listener to each grid cell
        cell.addEventListener('click', function (event) {
            // Toggle the "on" class on the clicked cell
            if (cell.classList.contains('on')) {
                cell.classList.remove('on');
            } else {
                cell.classList.add('on');
            }
        });
    }
}

function resetGrid() {
    const liteElements = document.getElementsByClassName('liteBriteLite');

    for (const element of liteElements) {
        element.classList.remove('on');
    }
}