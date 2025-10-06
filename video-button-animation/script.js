const videoPlayer = document.getElementById("videoPlayer");
const videoSource = videoPlayer.querySelector("source");
const zooButton = document.getElementById("zooButton");
const videoFiles = ["zoo.mp4", "zoo1.mp4"];

let currentVideoIndex = 0;

videoPlayer.addEventListener("ended", () => {
    currentVideoIndex = (currentVideoIndex + 1) % videoFiles.length;
    const nextVideoSrc = videoFiles[currentVideoIndex];
    videoPlayer.src = nextVideoSrc;
    videoPlayer.load();
    videoPlayer.play().catch(error => {
        console.log("Video oynatma hatası:", error);
    });
});

zooButton.addEventListener("click", () => {
    alert("Welcome to the Jungle Zoo! 🐘🐅🦜");
});

