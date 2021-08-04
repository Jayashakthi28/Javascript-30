const imgs=document.querySelectorAll('img');
function scroller(){
imgs.forEach(img=>{
    const half_Shown=(window.scrollY+window.innerHeight)-img.height/2;
    const imgbottom=(img.offsetTop+img.height);
    if(half_Shown>img.offsetTop && window.scrollY<imgbottom){
        img.classList.add('active');
    }
    else{
        img.classList.remove('active');
    }
});
}
window.addEventListener('scroll',scroller);