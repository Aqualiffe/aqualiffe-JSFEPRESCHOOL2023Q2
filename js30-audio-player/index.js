let audio = document.querySelector(".music"),
    btnImg = document.querySelector(".play-btn"),
    audioName = document.querySelector(".music-name"),
    audioImg = document.querySelector(".music-img"),
    audioTitle = document.querySelector(".title"),
    progressBar = document.querySelector(".time"),
    progressContainer = document.querySelector(".bar");


let isPlay = false;

function play() {
    btnImg.src = "./assets/svg/pause.png";
    isPlay = true;
    audio.play();
}

function pause() {
    btnImg.src ="./assets/svg/play.png";
    isPlay = false;
    audio.pause();
}

document.querySelector('.btn').addEventListener('click', () => {    
    if(!isPlay) {
        play();
    } else {
        pause();
    }
})

let audioIndex = 0;

const songs = [
    {
        name: "Don't Hurt Yourself",
        path: "./assets/audio/beyonce.mp3",
        img: "./assets/img/lemonade.png",
        singer: "Beyonce"
    },
    {
        name: "Don't Start Now",
        path: "./assets/audio/dontstartnow.mp3",
        img: "./assets/img/dontstartnow.png",
        singer: "Dua Lipa"
    },
    {
        name: "Headbanger",
        path: "./assets/audio/headbanger.mp3",
        img: "./assets/img/headbanger.jpg",
        singer: "Babymetal"
    }  
];

function changeAudio(song) {
    audioName.innerHTML = songs[audioIndex].name;
    audio.src = songs[audioIndex].path;
    audioImg.src = songs[audioIndex].img;
    audioTitle.innerHTML = songs[audioIndex].singer;
}

document.querySelector('.next_btn').addEventListener('click', () => {
    audioIndex ++;
    if(audioIndex > songs.length - 1) {   
        audioIndex = 0;   
    } 
    changeAudio(songs[audioIndex]);
    play();    
})

document.querySelector('.prev_btn').addEventListener('click', () => {
    audioIndex --;
    if(audioIndex < 0) {   
        audioIndex = songs.length - 1;   
    } 
    changeAudio(songs[audioIndex]);
    play();    
})

function musicBar(){
    const duration = audio.duration;
    const currentTime = audio.currentTime;
    let width = currentTime/duration * 100;
    progressBar.style.width = `${width}%`
};

audio.addEventListener("timeupdate", musicBar);

function changeTime(elem){
    const width = this.clientWidth;
    const clickX = elem.offsetX;
    const duration = audio.duration;
    audio.currentTime = clickX/width * duration;
}

progressContainer.addEventListener("click", changeTime);