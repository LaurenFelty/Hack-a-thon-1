document.addEventListener('DOMContentLoaded', () => {
  console.log('This is a popup!');

  //div container that hold options to select your mode
  //options tag: party, relaxation, nostalgia

  //event listener that when an option is selected it goes into that mode

  const submitButton = document.querySelector('.glow-on-hover');
  const homepage = document.querySelector('.homepage');
  const body = document.querySelectorAll('body');
  const partyBackground = document.querySelector('#partyBackground');
  submitButton.addEventListener('click', function () {
    //define selected mood to know the users input
    let selectedMood = document.getElementById('mood').value;
    //remove current homepage
    homepage.style.display = 'none';
    //display selected theme
    if (selectedMood === 'party') {
      console.log('Party Time');
      document.body.style.backgroundImage = "url('party-time.gif')";
      document.body.style.backgroundSize = '200px';
      const partyMusic = new Audio('partymusic.mp3');
      partyMusic.play();
    }

    //if the user selects relax
    if (selectedMood === 'relaxation') {
      console.log('Relaxxxxx');
      document.body.style.backgroundImage = "url('peaceful.gif')";
      document.body.style.backgroundSize = 'cover';
      const relaxMusic = new Audio('relax-music.mp3');
      relaxMusic.play();
    }

    //if the user selects sad
    if (selectedMood === 'sad') {
      console.log('Sad time');
      const sadMusic = new Audio('sad-music.m4a');
      document.body.style.backgroundImage = "url('sad-cat.svg')";
      document.body.style.backgroundSize = 'cover';
      sadMusic.play();
    }

    //if the user selects sad
    if (selectedMood === 'broken') {
      console.log('broken time');
    }
    //if the user selects sad
    if (selectedMood === 'chaos') {
      console.log('chaos');
      document.body.style.backgroundImage = "url('chaos.gif')";
      document.body.style.backgroundSize = 'cover';
    }
  });
});
