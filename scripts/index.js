document.addEventListener('DOMContentLoaded', function() {
  const images = [
      'resources/img/1.jpg',
      'resources/img/2.jpg',
      'resources/img/3.jpg',
      'resources/img/4.jpg',
      'resources/img/5.jpg'
  ];

  function getRandomImage() {
      const randomIndex = Math.floor(Math.random() * images.length);
      return images[randomIndex];
  }

  const randomImage = getRandomImage();
  document.body.style.backgroundImage = `url('${randomImage}')`;

  const audio = document.getElementById('music');
  const muteButton = document.getElementById('mute-button');

  audio.volume = 0.15; 
  audio.play().catch(error => {
      console.log('Audio playback failed: ', error);
  });

  muteButton.addEventListener('click', function() {
      if (audio.paused) {
          audio.play();
          muteButton.textContent = '🔊';
      } else {
          audio.pause();
          muteButton.textContent = '🔇';
      }
  });

  document.getElementById('discord').addEventListener('click', function() {
    window.open('https://discord.gg/jQMhrpjKYv', '_blank');
  });
});