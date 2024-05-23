// - [ ] The apple should appear randomly on the screen
// - [ ] The apple should appear within the size of the board
// - [ ] Remove the apple when the head of the snake reaches the apple
// - [ ] Another apple should appear on the screen
// - [ ] The apple should not appear on the snake


// class Apple {
//   constructor(el) {
//     this.node = document.createElement('img');
//     this.node.setAttribute('id', 'apple');
//     this.node.setAttribute('src', 'src/assets/apple3.png');

//     el.appendChild(this.node);

   
//     const gridSize = 50; // The size of the grid cells

//     const boardWidth = Math.floor(el.clientWidth / gridSize) * gridSize;
//     const boardHeight = Math.floor(el.clientHeight / gridSize) * gridSize;

//     // Generate random coordinates for the apple's position within the board dimensions, aligned to the grid
//     const leftPosition = Math.floor(Math.random() * (boardWidth / gridSize)) * gridSize;
//     const topPosition = Math.floor(Math.random() * (boardHeight / gridSize)) * gridSize;


//     this.node.style.left = `${leftPosition}px`;
//     this.node.style.top = `${topPosition}px`;
//   }

//   remove() {
//     // Remove the apple from the DOM
//     this.node.remove();
//   }
// }

class Apple {
  constructor(board) {
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'apple');
    this.node.setAttribute('src', 'src/assets/apple3.png');
    board.appendChild(this.node); // Append to board

    const gridSize = 50; // The size of the grid cells
    const boardWidth = Math.floor(board.clientWidth / gridSize) * gridSize;
    const boardHeight = Math.floor(board.clientHeight / gridSize) * gridSize;

    const leftPosition = Math.floor(Math.random() * (boardWidth / gridSize)) * gridSize;
    const topPosition = Math.floor(Math.random() * (boardHeight / gridSize)) * gridSize;

    this.node.style.left = `${leftPosition}px`;
    this.node.style.top = `${topPosition}px`;
  }

  remove() {
    this.node.remove();
  }
}

