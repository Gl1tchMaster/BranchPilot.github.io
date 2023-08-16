const videoPlayer = document.getElementById('videoPlayer');
const playButton = document.querySelector('.play-button');

videoPlayer.addEventListener('play', () => {
  playButton.style.display = 'none';
  
});

videoPlayer.addEventListener('pause', () => {
  playButton.style.display = 'block';
});

playButton.addEventListener('click', () => {
  videoPlayer.play();
  playButton.style.display = 'none'; 
});







