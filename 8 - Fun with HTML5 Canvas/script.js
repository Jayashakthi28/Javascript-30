const canvas=document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
const ctx=canvas.getContext("2d");
ctx.strokeStyle="#BADA55";
ctx.lineJoin="round";
ctx.lineCap="round";
ctx.lineWidth=10;
let isDrawing=false;
let lastX=0;
let lastY=0;
let hue=0;
let customFlag=true;
let direction=true;
const button=document.querySelector(".button");
const clear=document.querySelector('.clear');
const [widther,color]=document.querySelectorAll('input');
button.addEventListener('click',()=>{
    if( button.textContent=="Randomize"){
        document.querySelectorAll('.width-wrap').forEach(temp=>{temp.style.display="none"});
        customFlag=false;
        button.textContent="Customize";
    }
    else{
        document.querySelectorAll('.width-wrap').forEach(temp=>{temp.style.display="flex"});
        button.textContent="Randomize";
        customFlag=true;
    }
});
clear.addEventListener('click',()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})
function draw(e){
    if(!isDrawing) return;
    ctx.beginPath();
    if(!customFlag){
    ctx.strokeStyle=`hsl(${hue},100%,50%)`;
    }
    else{
        ctx.strokeStyle=color.value;
    }
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    lastX=e.offsetX;
    lastY=e.offsetY;
    if(!customFlag){
    hue++;
    if(hue>=360){
        hue=0;
    }
    if(ctx.lineWidth>=100 || ctx.lineWidth<=1){
        direction= !direction;
    }
    if(direction){
        ctx.lineWidth++;
    }
    else{
        ctx.lineWidth--;
    }
    }
    else{
        ctx.lineWidth=widther.value;
    }
}
canvas.addEventListener("mousedown",(e)=>{
    isDrawing=true;
    lastX=e.offsetX;
    lastY=e.offsetY;
});
canvas.addEventListener("mousemove",draw);
canvas.addEventListener("mouseup",()=>{
    isDrawing=false;
});
canvas.addEventListener("mouseout",()=>{
    isDrawing=false;
});
widther.addEventListener('mousemove',()=>{
    ctx.lineWidth=widther.value;
})