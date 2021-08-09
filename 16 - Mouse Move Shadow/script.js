const hero=document.querySelector('.hero');
const cont=hero.querySelector('h1');
function shadower(e){
    let{offsetX : x,offsetX : y}=e;
    const{offsetWidth:width,offsetHeight:height}=hero;
    if(this !==e.target){
        x=x+e.target.offsetLeft;
        y=y+e.target.offsetTop;
    }
    const walk=100;
    const xWalk=Math.round((x/width*walk)-(walk/2));
    const yWalk=Math.round((y/height*walk)-(walk/2));
    cont.style.textShadow=`${xWalk}px ${yWalk}px 0 rgba(0,255,0,0.8),
    ${xWalk*-1}px ${yWalk}px 0 rgba(255,0,0,0.8),
    ${yWalk}px ${xWalk}px 0 rgba(0,0,255,0.8),
    ${yWalk}px ${xWalk*-1}px 0 rgba(255,255,0,0.8)`;
}
hero.addEventListener('mousemove',shadower)