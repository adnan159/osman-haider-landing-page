
let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '540',
        width: '960',
        videoId: 'mUGYPlAgJPw',
        events: {
            'onReady': onPlayerReady,
        }
    });
    player.getIframe().style.display = 'none'; // Hide the video by default
}

function onPlayerReady(event) {
    let playButton = document.getElementById("oh-play-button");
    playButton.addEventListener("click", function() {
        let videoContainer = document.querySelector(".oh-video-section-logo");
        let videoContainer2 = document.querySelector(".oh-video-container-section-play");
        videoContainer.style.display = 'none'; // Hide the video container
        videoContainer2.style.display = 'none'; // Hide the video container
        player.getIframe().style.display = 'block'; // Show the video
        player.playVideo();
    });
}

// This code loads the IFrame Player API code asynchronously.
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);