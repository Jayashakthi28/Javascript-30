// ❚ ❚
// ►
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const play_pause = player.querySelector(".toggle");
const slider = player.querySelectorAll("input[type=range]");
const skip_btn = player.querySelectorAll("button[data-skip]");
const progress=player.querySelector('.progress');
const progress_Filled=player.querySelector('.progress__filled');
const fullScr=document.querySelector('.full-scr');
function play_toggle() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
function updateButton() {
  if (this.paused) {
    play_pause.textContent = "►";
  } else {
    play_pause.textContent = "❚ ❚";
  }
}
function video_skipper() {
  video.currentTime +=  parseFloat(this.dataset.skip);
}
function slider_changer(){
    video[this.name]=this.value;
}
function progress_update(e){
    const widther=(e.offsetX/progress.offsetWidth);
    video.currentTime=video.duration*widther;
    progress_Filled.style.flexBasis=`${widther*100}%`;
}
function progresser(e){
    const widther=(video.currentTime/video.duration)*100;
    progress_Filled.style.flexBasis=`${widther}%`;
}
video.addEventListener("click", play_toggle);
play_pause.addEventListener("click", play_toggle);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
skip_btn.forEach((data) => {
  data.addEventListener("click", video_skipper);
});
slider.forEach(data=>{
    data.addEventListener("input",slider_changer);
})
let mouseclick=false;
progress.addEventListener("mousedown",()=>{mouseclick=true});
progress.addEventListener("mouseup",()=>{mouseclick=false});
progress.addEventListener("mouseleave",()=>{mouseclick=false});
progress.addEventListener("click",progress_update);
progress.addEventListener("mousemove",(e)=>{mouseclick && progress_update(e)});
video.addEventListener("timeupdate",progresser);
fullScr.addEventListener("click",()=>{
    player.requestFullscreen;
    player.classList.toggle('fullscr');
    if(player.classList.contains('fullscr')){
        fullScr.textContent='Small Screen';
    }
    else{
        fullScr.textContent='Full Screen';
    }
})