let audio = document.querySelector(".music"),
    btnImg = document.querySelector(".play-btn"),
    audioName = document.querySelector(".music-name"),
    audioImg = document.querySelector(".music-img"),
    audioTitle = document.querySelector(".title"),
    progressBar = document.querySelector(".time"),
    progressContainer = document.querySelector(".bar"),
    timeBar = document.querySelector('.time-bar'),
    timeCurrent = document.querySelector('.current-time'),
    songDuration = document.querySelector('.song-duration');

let isPlay = false;

function play() {
    btnImg.src = "./assets/svg/pause-btn.svg";
    isPlay = true;
    audio.play();
}

function pause() {
    btnImg.src ="./assets/svg/play-btn.svg";
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
    timeBar.value = 0;
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


function formatTime(time) {
    let min = Math.floor(time/60);
    if(min<10){
        min=`0${min}`;
    }
    let sec = Math.floor(time%60);
    if(sec<10){
        sec=`0${sec}`;
    }
    return `${min}:${sec}`;
}


function musicBar(){
    const duration = audio.duration;
    const currTime = audio.currentTime;    
    timeBar.value = currTime;    
    songDuration.innerHTML = formatTime(duration);
    timeCurrent.innerHTML = formatTime(currTime);
};

audio.addEventListener("timeupdate", musicBar);

function changeTime(){
    audio.currentTime = timeBar.value;    
}



timeBar.addEventListener('click', changeTime)