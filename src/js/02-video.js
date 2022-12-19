import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(saveTime, 1000));

setSavedTime();

// variant 1
function saveTime() {
  player.on('timeupdate', function (data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
  });
}

function setSavedTime() {
  try {
    const savedData = JSON.parse(
      localStorage.getItem('videoplayer-current-time')
    );

    player.setCurrentTime(savedData.seconds).catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          break;

        default:
          break;
      }
    });
  } catch (error) {
    error.name;
    error.message;
  }
}

// variant 2
// function saveTime() {
//   player.on('timeupdate', function (data) {
//     localStorage.setItem('videoplayer-current-time', data.seconds);
//   });
// }

// function setSavedTime() {
// const videoSeconds = localStorage.getItem('videoplayer-current-time');
//   player.setCurrentTime(videoSeconds).catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         break;

//       default:
//         break;
//     }
//   });
// }
