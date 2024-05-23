document.addEventListener('DOMContentLoaded', () => {
  console.log('This is a popup!');

  //div container that hold options to select your mode
  //options tag: party, relaxation, nostalgia

  //event listener that when an option is selected it goes into that mode

  //div
  //we go crazy
  const submitButton = document.querySelector('.glow-on-hover');
  const homepage = document.querySelector('.homepage');
  submitButton.addEventListener('click', function () {
    //define selected mood to know the users input
    let selectedMood = document.getElementById('mood').value;
    //remove current homepage
    homepage.style.display = 'none';
    //display selected theme
    if (selectedMood === 'party') {
      console.log('Party Time');
      const partyMusic = new Audio('partymusic.mp3');
      partyMusic.play();
    }

    //if the user selects relax
    if (selectedMood === 'relaxation') {
      console.log('Relaxxxxx');
      const relaxMusic = new Audio('partymusic.mp3');
      partyMusic.play();
    }

    //if the user selects sad
    if (selectedMood === 'sad') {
      console.log('Sad time');
      const sadMusic = new Audio('partymusic.mp3');
      partyMusic.play();
    }
  });
});
