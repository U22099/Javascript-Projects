let musicPlayer;
let slider;
let ctrlIcon;
let title;
let artist;
let musArr = ["music/mus1.mp3","music/mus2.mp3",
"music/mus3.mp3","music/mus4.mp3","music/mus5.mp3"];
let musTitles = ["Unity","Ainsi Bas La Vida","Spinnin","Le Monde","Sweet Dreams"];
let artistNames = ["Alan Walker Ft Walkers","SamWep","Connor Price","Richard Carter","Eurythmics"];
let count = 0;

window.onload = ()=>{
    musicPlayer = document.querySelector("#music");
    slider = document.querySelector("#slider");
    ctrlIcon = document.querySelector("#ctrlIcon");
    title = document.querySelector("#title");
    artist = document.querySelector("#artist");
    slider.max = musicPlayer.duration;
    slider.value = musicPlayer.currentTime;
    setInterval(()=>{
        slider.value = musicPlayer.currentTime;
    }, 500);
    slider.onchange = ()=>{
        musicPlayer.currentTime = slider.value;
        musicPlayer.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }
    
}
function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        musicPlayer.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
        musicPlayer.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }
}
function next(){
    count++;
    if(count == musArr.length){
        count = 0;
    }
    musicPlayer.src = musArr[count];
    title.innerHTML = musTitles[count];
    artist.innerHTML = artistNames[count];
    musicPlayer.play();
    slider.max = musicPlayer.duration;
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
}
function previous(){
    count--;
    if(count < 0){
        count = 4;
    }
    musicPlayer.src = musArr[count];
    title.innerHTML = musTitles[count];
    artist.innerHTML = artistNames[count];
    musicPlayer.play();
    slider.max = musicPlayer.duration;
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
}