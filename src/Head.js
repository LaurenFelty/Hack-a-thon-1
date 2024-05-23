// - [ ] Make the head of the snake be able to turn based on the arrow keys
// - [ ] When the head of the snake reaches a border, end the game

// class Head {
//   constructor(el) {
//     this.node = document.createElement('img');
//     this.node.setAttribute('id', 'head');
//     this.node.setAttribute('src', 'src/assets/snake.png');
//     el.appendChild(this.node);

//     this.currentDirection = 'right';
//     this.SPEED = 250;

//     this.node.style.top = 0;
//     this.node.style.left = 0;

//     this.score = 0;

//     // Create a bound version of `this.move`
//     this.boundMove = this.move.bind(this);
//     this.incrementScore = this.incrementScore.bind(this);
    
//     // Call `this.boundMove` asynchronously using setTimeout
//     setTimeout(this.boundMove, this.SPEED);
//   }

//   move() {
//     const head = this.node;
//     const direction = this.currentDirection;

//     let leftPosition = Number(head.style.left.replace('px', ''));
//     let topPosition = Number(head.style.top.replace('px', ''));


//     if (direction === 'right') {
//       head.style.left = `${(leftPosition += 50)}px`;
//     } else if (direction === 'down') {
//       head.style.top = `${(topPosition += 50)}px`;
//     } else if (direction === 'left') {
//       head.style.left = `${(leftPosition -= 50)}px`;
//     } else if (direction === 'up') {
//       head.style.top = `${(topPosition -= 50)}px`;
//     }

//     const appleElement = document.querySelector('#apple');
//     if (appleElement) {
//       const appleRect = appleElement.getBoundingClientRect();
//       const snakeHeadRect = head.getBoundingClientRect();

//       if (
//         appleRect.left < snakeHeadRect.right &&
//         appleRect.right > snakeHeadRect.left &&
//         appleRect.top < snakeHeadRect.bottom &&
//         appleRect.bottom > snakeHeadRect.top
//       ) {
//         appleElement.remove(); // Remove the apple if collision detected
//         new Apple(board);
//         this.incrementScore();
//       }
//     }
//     const boardWidth = this.node.parentElement.clientWidth;
//     const boardHeight = this.node.parentElement.clientHeight;

//     if (
//       leftPosition < 0 || topPosition < 0 || leftPosition >= boardWidth || topPosition >= boardHeight) {
//      // this.endGame();
//       return;
//     }
//     // Call `this.boundMove` again after a delay
//     setTimeout(this.boundMove, this.SPEED);
//   }

//   incrementScore(){
//   //adds 1 to score each time an apple is hit
//     this.score += 1;
//   document.getElementById(`score`).innerHTML = `Score = ${this.score}`;
//   }

//   endGame() {
//   // Clear the timeout to stop the movement
//     alert('Game Over!');
//     clearTimeout(this.timeoutId);
//   }
// }

class Head {
  constructor(board) {
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'head');
    this.node.setAttribute('src', 'src/assets/snake.png');
    board.appendChild(this.node);

    this.currentDirection = 'right';
    this.SPEED = 250;

    this.node.style.top = '0px';
    this.node.style.left = '0px';

    this.score = 0;

    this.boundMove = this.move.bind(this);
    this.incrementScore = this.incrementScore.bind(this);

    setTimeout(this.boundMove, this.SPEED);
  }

  move() {
    const head = this.node;
    const direction = this.currentDirection;

    let leftPosition = Number(head.style.left.replace('px', ''));
    let topPosition = Number(head.style.top.replace('px', ''));

    if (direction === 'right') {
      head.style.left = `${leftPosition + 50}px`;
    } else if (direction === 'down') {
      head.style.top = `${topPosition + 50}px`;
    } else if (direction === 'left') {
      head.style.left = `${leftPosition - 50}px`;
    } else if (direction === 'up') {
      head.style.top = `${topPosition - 50}px`;
    }

    const appleElement = document.querySelector('#apple');
    if (appleElement) {
      const appleRect = appleElement.getBoundingClientRect();
      const snakeHeadRect = head.getBoundingClientRect();

      if (
        appleRect.left < snakeHeadRect.right &&
        appleRect.right > snakeHeadRect.left &&
        appleRect.top < snakeHeadRect.bottom &&
        appleRect.bottom > snakeHeadRect.top
      ) {
        appleElement.remove();
        apple = new Apple(board);
        this.incrementScore();
      }
    }

    const boardWidth = head.parentElement.clientWidth;
    const boardHeight = head.parentElement.clientHeight;

    if (
      leftPosition < 0 || topPosition < 0 ||
      leftPosition >= boardWidth || topPosition >= boardHeight
    ) {
      //this.endGame();
      return;
    }

    setTimeout(this.boundMove, this.SPEED);
  }

  incrementScore() {
    this.score += 1;
    document.getElementById('score').innerHTML = `Score = ${this.score}`;
  }

  endGame() {
    alert('Game Over!');
    clearTimeout(this.timeoutId);
  }
}
