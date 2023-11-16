let timeline = document.getElementById("timeline");
let audio = document.getElementById("audio");
let play_ctrl = document.getElementById("play_ctrl");
let song_palying = document.getElementById("song_playing");
let current_song =  document.getElementById("current_song");
let audioIndex = 0 ;
let songs = [
    {title:"Desperado",song_path:"song/Desperado(PagalWorld.com.pe).mp3", cover_art:"cover_art/Desperado.jpg"},
    {title:"Desperado",song_path:"song/Desperado(PagalWorld.com.pe).mp3", cover_art:"cover_art/Desperado.jpg"},
    {title:"Desperado",song_path:"song/Desperado(PagalWorld.com.pe).mp3", cover_art:"cover_art/Desperado.jpg"},
    {title:"Desperado",song_path:"song/Desperado(PagalWorld.com.pe).mp3", cover_art:"cover_art/Desperado.jpg"},
    {title:"Desperado",song_path:"song/Desperado(PagalWorld.com.pe).mp3", cover_art:"cover_art/Desperado.jpg"},
    {title:"Desperado",song_path:"song/Desperado(PagalWorld.com.pe).mp3", cover_art:"cover_art/Desperado.jpg"},
    {title:"Desperado",song_path:"song/Desperado(PagalWorld.com.pe).mp3", cover_art:"cover_art/Desperado.jpg"},
    {title:"Desperado",song_path:"song/Desperado(PagalWorld.com.pe).mp3", cover_art:"cover_art/Desperado.jpg"},
]
audio.onloadedmetadata = function() {

    timeline.max = audio.duration;
    timeline.value = audio.currentTime;
}
function playPause(){
    if (play_ctrl.classList.contains("fa-pause")){
    audio.pause();  
    play_ctrl.classList.remove("fa-pause");
    play_ctrl.classList.add("fa-play");
    }
    else {
    audio.play();
    play_ctrl.classList.remove("fa-play");
    play_ctrl.classList.add("fa-pause");
    }
}

audio.addEventListener('timeupdate', () => {
    timeline.value = audio.currentTime;
});

/*
if(audio.play()){
    setInterval(() => {
        timeline.value = audio.currentTime;
    }, 500);
*/

} 
timeline.onchange = function(){
    audio.play();
    audio.currentTime = timeline.value ;
    play_ctrl.classList.remove("fa-play");
    play_ctrl.classList.add("fa-pause");
}
