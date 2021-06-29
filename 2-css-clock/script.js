setInterval(clock,1000)
const hour=document.querySelector('.hour-hand');
const min=document.querySelector('.min-hand');
const sec=document.querySelector('.second-hand');
const dater=document.querySelector('.date-dis');
function clock(){
    const date=new Date();
    const second_ratio=date.getSeconds()/60;
    const min_ratio=(date.getMinutes()+second_ratio)/60;
    const hour_ratio=(date.getHours()+min_ratio)/12;
    dater.textContent=`${date.getDay()} : ${date.getMonth()} : ${date.getFullYear()}`;
    rotation_set(sec,second_ratio);
    rotation_set(min,min_ratio);
    rotation_set(hour,hour_ratio);
}
function rotation_set(element,ratio){
    if(element.className == "hand second-hand" && ratio == 0){
        element.style.transition = "none";
    }
    else{
        element.style.transition = "transform 0.1s cubic-bezier(0, 3.68, 0, 0.48)";
    }
    element.style.setProperty('--rotation',`${ratio*360}deg`);
}
clock();
