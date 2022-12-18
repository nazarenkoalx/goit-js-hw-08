import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(saveTime, 1000));

setSavedTime();

function saveTime() {
  player.on('timeupdate', function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  });
}

function setSavedTime() {
  const videoSeconds = localStorage.getItem('videoplayer-current-time');
  player
    .setCurrentTime(videoSeconds)
    .then(function (seconds) {})
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          break;

        default:
          break;
      }
    });
}
