  // Here we will listen when the key is press, as soon as is press, it will execute the function
window.addEventListener('keydown', function (e) {
    // this will log us the key ex. A = 65 
    console.log(e.keyCode);
    // if the pressed key has an audio, play it; is querySelector and not querySelectorAll because we are only looking for one
    // we will use ES6 to get the audio of the data-key selected
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    console.log(audio);
    // adding the animation from css when the key is press
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)    
    // this will make the audio play every time you press the key / rewind to the start
    audio.currentTime = 0;
    // audio will play if the key has audio
    audio.play();
    // if the press key has no audio, function will stop from running all together
    if(!audio) return;
    // applying .PLAYING from CSS when the key is pressed
    key.classList.add('playing')



})
