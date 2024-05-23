// document.addEventListener('DOMContentLoaded', () => {
//   const body = document.querySelector('body');
//   const board = document.querySelector('#board');

//   //instantiate and append head and apple nodes to 'board'
//   const head = new Head(board);
//   new Apple(board);

//   body.addEventListener('keydown', (e) => {
//     if (e.code === 'ArrowLeft') {
//       console.log('pressed left');
//       head.currentDirection = 'left';
//     }
//   });

//   body.addEventListener('keydown', (e) => {
//     if (e.code === 'ArrowUp') {
//       console.log('pressed up');
//       head.currentDirection = 'up';
//     }
//   });

//   body.addEventListener('keydown', (e) => {
//     if (e.code === 'ArrowDown') {
//       console.log('pressed down');
//       head.currentDirection = 'down';
//     }
//   });

//   body.addEventListener('keydown', (e) => {
//     if (e.code === 'ArrowRight') {
//       console.log('pressed right');
//       head.currentDirection = 'right';
//     }
//   });
// });
//   body.addEventListener('keydown', (e) => {
//     if (e.code === 'ArrowRight') {
//       console.log('pressed right');
//       head.currentDirection = 'right';
//     //  head.move();
//     }
//   });

//   body.addEventListener('keydown', (e) => {
//     if (e.code === 'ArrowDown') {
//       console.log('pressed down');
//       head.currentDirection = 'down';
//     //  head.move();
//     }
//   });
// });

// document.addEventListener('DOMContentLoaded', () => {
//   const body = document.querySelector('body');
//   const board = document.querySelector('#board');

//   const head = new Head(board);
//   new Apple(board);

//   document.addEventListener('keydown', (e) => {
//     console.log('Key pressed:', e.code);
//     if (e.code === 'ArrowLeft' && head.currentDirection !== 'right') {
//       head.currentDirection = 'left';
//     } else if (e.code === 'ArrowUp' && head.currentDirection !== 'down') {
//       head.currentDirection = 'up';
//     } else if (e.code === 'ArrowDown' && head.currentDirection !== 'up') {
//       head.currentDirection = 'down';
//     } else if (e.code === 'ArrowRight' && head.currentDirection !== 'left') {
//       head.currentDirection = 'right';
//     }
//     console.log('Current direction:', head.currentDirection);
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const board = document.querySelector('#board');

  let head = null; // Store a reference to the head
  let apple = null; // Store a reference to the apple

  const initializeGame = () => {
    if (!head) {
      head = new Head(board); // Create the head only if it doesn't exist
    }
    if (!apple) {
      apple = new Apple(board); // Create the apple only if it doesn't exist
    }
  };

  document.addEventListener('keydown', (e) => {
    console.log('Key pressed:', e.code);
    if (head) {
      if (e.code === 'ArrowLeft' && head.currentDirection !== 'right') {
        head.currentDirection = 'left';
      } else if (e.code === 'ArrowUp' && head.currentDirection !== 'down') {
        head.currentDirection = 'up';
      } else if (e.code === 'ArrowDown' && head.currentDirection !== 'up') {
        head.currentDirection = 'down';
      } else if (e.code === 'ArrowRight' && head.currentDirection !== 'left') {
        head.currentDirection = 'right';
      }
      console.log('Current direction:', head.currentDirection);
    }
  });

  // Initialize the game when the DOM content is loaded
  initializeGame();
});