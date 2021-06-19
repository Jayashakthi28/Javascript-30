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
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
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
let key_list=document.querySelectorAll('.cont');
key_list.forEach(keys => keys.addEventListener("transitionend",function(e){
if(e.propertyName != "box-shadow") return;
    keys.childNodes[1].classList.remove('playing');
    keys.classList.remove('playing-bg');
}))
let button=document.querySelector('.rec-stp');
function delayer(){
    setTimeout(function(){
        console.log("Entering into pause..");
    },3000);
}
function main_player(keys){
            console.log(keys);
            keyer=document.querySelector(`.cont[data-key="${keys}"]`);
            let snd=document.querySelector(`audio[data-key=${mapper[keys]}]`);
            if(!snd) return;
            sleep(200);
            snd.currentTime=0;
            snd.play();
            let child=keyer.childNodes;
            console.log(keyer);
            console.log(child[1]);
            child[1].classList.add('playing');
            keyer.classList.add('playing-bg');
}
function record_player(){
    console.log("Entered");
    console.log(snd_record);
    if(snd_record.length!=0){
        console.log("Entered if");
        snd_record.forEach(temp=>
            main_player(temp));
    }
}
button.addEventListener("click",function(e){
    if(button.textContent==="Record"){
        flag=1;
        button.textContent="Stop and Play";
    }
    else{
        flag=0;
        button.textContent="Record";
        record_player();
        snd_record=[];
    }
})

