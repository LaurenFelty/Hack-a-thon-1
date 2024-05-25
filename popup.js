// document.addEventListener('DOMContentLoaded', () => {
//   console.log('This is a popup!');

//   //div container that hold options to select your mode
//   //options tag: party, relaxation, nostalgia

//   //event listener that when an option is selected it goes into that mode

//   //div
//   //we go crazy
//   const submitButton = document.querySelector('.glow-on-hover');
//   const homepage = document.querySelector('.homepage');
//   const body = document.querySelectorAll('body');
//   const partyBackground = document.querySelector('#partyBackground');
//   submitButton.addEventListener('click', function () {
//     //define selected mood to know the users input
//     let selectedMood = document.getElementById('mood').value;
//     //remove current homepage
//     homepage.style.display = 'none';
//     //display selected theme
//     if (selectedMood === 'party') {
//       console.log('Party Time');
//       document.body.style.backgroundImage = "url('party-time.gif')";
//       document.body.style.backgroundSize = '200px';
//       const partyMusic = new Audio('partymusic.mp3');
//       partyMusic.play();
//     }

//     //if the user selects relax
//     if (selectedMood === 'relaxation') {
//       console.log('Relaxxxxx');
//       document.body.style.backgroundImage = "url('peaceful.gif')";
//       document.body.style.backgroundSize = '600px';
//       const relaxMusic = new Audio('relax-music.mp3');
//       relaxMusic.play();
//     }

//     //if the user selects sad
//     if (selectedMood === 'sad') {
//       console.log('Sad time');
//       const sadMusic = new Audio('sad-music.m4a');
//       document.body.style.backgroundImage = "url('sad-cat.svg')";
//       document.body.style.backgroundSize = 'cover';
//       sadMusic.play();
//     }

//    // if the user selects sad
//    if (selectedMood === 'broken') {
//     console.log('Broken time');
//     const board = document.getElementById('board');
//     const score = document.getElementById('score');
//     board.style.display = "inline";
//     score.style.display = 'inline';
//  // Ensure that the game initializes correctly when "broken" is selected
//  const initializeGame = () => {
//   if (!head) {
//     head = new Head(board); // Create the head only if it doesn't exist
//   }
//   if (!apple) {
//     apple = new Apple(board); // Create the apple only if it doesn't exist
//   }
// };
// initializeGame();
     
//    }
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  console.log('This is a popup!');

  //div container that hold options to select your mode
  //options tag: party, relaxation, nostalgia

  //event listener that when an option is selected it goes into that mode

  const submitButton = document.querySelector('.glow-on-hover');
  const homepage = document.querySelector('.homepage');
  let head = null; // Move head and apple references outside the function
  let apple = null;

  submitButton.addEventListener('click', function () {
    let selectedMood = document.getElementById('mood').value;
    homepage.style.display = 'none';

    if (selectedMood === 'party') {
      console.log('Party Time');
      document.body.style.backgroundImage = "url('party-time.gif')";
      document.body.style.backgroundSize = '200px';
      const partyMusic = new Audio('partymusic.mp3');
      partyMusic.play();
    } else if (selectedMood === 'relaxation') {
      console.log('Relaxxxxx');
      document.body.style.backgroundImage = "url('peaceful.gif')";
      document.body.style.backgroundSize = 'cover';
      const relaxMusic = new Audio('relax-music.mp3');
      relaxMusic.play();
    } else if (selectedMood === 'sad') {
      console.log('Sad time');
      const sadMusic = new Audio('sad-music.m4a');
      document.body.style.backgroundImage = "url('sad-cat.svg')";
      document.body.style.backgroundSize = 'cover';
      sadMusic.play();
    } else if (selectedMood === 'broken') {
      console.log('Broken time');
      const board = document.getElementById('board');
      const score = document.getElementById('score');
      board.style.display = "inline";
      score.style.display = 'inline';

      // Ensure that the game initializes correctly when "broken" is selected
      if (!head) {
        head = new Head(board); // Create the head only if it doesn't exist
      }
      if (!apple) {
        apple = new Apple(board); // Create the apple only if it doesn't exist
      }
    }
    //if the user selects sad
    if (selectedMood === 'chaos') {
      console.log('chaos');
      const chaosMusic = new Audio('chaos-music.mp3');
      document.body.style.backgroundImage = "url('chaos.gif')";
      document.body.style.backgroundSize = 'cover';
      chaosMusic.play();
    }
  });
});
