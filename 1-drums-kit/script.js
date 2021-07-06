let mapper={
    65:"boom",
    66:"clap",
    67:"hihat",
    68:"kick",
    69:"openhat",
    70:"ride",
    71:"snare",
    72:"tink",
    73:"tom",
    74:"boom",
    75:"clap",
    76:"hihat",
    77:"kick",
    78:"openhat",
    79:"ride",
    80:"snare",
    81:"tink",
    82:"tom",
    83:"boom",
    84:"clap",
    85:"hihat",
    86:"kick",
    87:"openhat",
    88:"ride",
    89:"snare",
    90:"tink",
};
let key;
let flag=0;
let snd_record=[];
let button=document.querySelector('.rec-stp');
let key_list=document.querySelectorAll('.cont');
let exp=document.querySelector('.btn-info-show');
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
 function main_player(keys){
    keyer=document.querySelector(`.cont[data-key="${keys}"]`);
    let snd=document.querySelector(`audio[data-key=${mapper[keys]}]`);
    if(!snd) return;
    sleep(200);
    snd.currentTime=0;
    snd.play();
    let child=keyer.childNodes;
    child[1].classList.add('playing');
    keyer.classList.add('playing-bg');
}
function record_player(){
if(snd_record.length!=0){
snd_record.forEach(temp=>
    main_player(temp));
}
}
key_list.forEach(keys => keys.addEventListener("transitionend",function(e){
    keys.children[0].classList.remove('playing');
    keys.classList.remove('playing-bg');
}))
window.addEventListener("keydown",function(e){
    if(flag != 0){
        snd_record.push(e.keyCode);
    }
    key=this.document.querySelector(`.cont[data-key="${e.keyCode}"]`);
    let snd=this.document.querySelector(`audio[data-key=${mapper[e.keyCode]}]`);
    if(!snd) return;
    snd.currentTime=0;
    snd.play();
    let child=key.childNodes;
    child[1].classList.add('playing');
    key.classList.add('playing-bg');
})
button.addEventListener("click",function(e){
    if(button.textContent=="Record"){
        flag=1;
        button.textContent="Stop and Play";
        exp.textContent="Please Wait...";
    }
    else{
        flag=0;
        button.textContent="Record";
        exp.textContent="Just click Record Button to Record";
        record_player();
        snd_record=[];
    }
})




