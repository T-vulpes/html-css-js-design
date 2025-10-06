const videoPlayer = document.getElementById("videoPlayer");
const videoSource = videoPlayer.querySelector("source");
const zooButton = document.getElementById("zooButton");
const videoFiles = ["zoo.mp4", "zoo1.mp4"];

let currentVideoIndex = 0;

videoPlayer.addEventListener("ended", () => {
    currentVideoIndex = (currentVideoIndex + 1) % videoFiles.length;
    const nextVideoSrc = videoFiles[currentVideoIndex];
    
    // Video kaynağını değiştir
    // Sadece 'src' niteliği yerine 'videoSource' elementini kullanmak daha doğru bir yaklaşımdır
    // Ancak daha basit olması ve tarayıcı uyumluluğu için bu şekilde de yapabiliriz:
    videoPlayer.src = nextVideoSrc;

    // Yeni kaynak yüklendikten sonra videoyu tekrar başlat
    // load() metodu tarayıcıya yeni kaynağı yüklemesini söyler.
    videoPlayer.load();
    // play() metodu videoyu oynatır.
    videoPlayer.play().catch(error => {
        // Otomatik oynatma hatasını yakala (genellikle tarayıcı kısıtlamaları nedeniyle olur)
        console.log("Video oynatma hatası:", error);
    });
});

// Orijinal click olayı (buton işlevi)
zooButton.addEventListener("click", () => {
    alert("Welcome to the Jungle Zoo! 🐘🐅🦜");

});

