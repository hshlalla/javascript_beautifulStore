/* eslint-disable no-use-before-define */
/* eslint-disable func-names */
// Back to top button
// eslint-disable-next-line no-unused-vars
document.addEventListener('DOMContentLoaded', (event) => {
  const backToTopButton = document.getElementById('backToTopButton');

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  }

  backToTopButton.onclick = function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
});

var videoID = 'uVqe_DcUcLM';

// YouTube iframe API script
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// YouTube API callback function
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-container', {
        videoId: videoID,
        playerVars: {
            controls: 0,
            showinfo: 0,
            modestbranding: 1,
            loop: 1,
            playlist: videoID,
            fs: 0,
            autohide: 0,
            rel: 0,
            enablejsapi: 1,
        
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

// Function to start the video in fullscreen when ready
function onPlayerReady(event) {
    player.mute();
    player.playVideo();
    player.setPlaybackQuality('hd720');
    player.setVolume(0);
    player.seekTo(0);
    player.pauseVideo();
    player.unMute();
    player.playVideo();
    player.setSize(window.innerWidth, window.innerHeight);
    player.setPlaybackQuality('hd720');
    player.setLoop(true);
    player.setVolume(0);
}

// Function to handle window resize
window.onresize = function() {
    player.setSize(window.innerWidth, window.innerHeight);
};
