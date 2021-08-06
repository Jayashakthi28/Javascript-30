let check_box=document.querySelectorAll('input');
// let lastChecked=null;
// let lastUnchecked=null;
// function checker(e){
//     let inBtw=false;
//     if(e.shiftKey && this.checked && lastChecked){
//     check_box.forEach(check=>{
//         if(this===check || check===lastChecked){
//             inBtw=!inBtw;
//         }
//         if(inBtw){
//             check.checked=true;
//         }
//     })
//     }
//     if(e.shiftKey && !(this.checked) && lastUnchecked){
//             check_box.forEach(check=>{
//                 if(this===check || check===lastUnchecked){
//                     inBtw=!inBtw;
//                 }
//                 if(inBtw){
//                     check.checked=false;
//                 }
//             })
//         }
//     if(lastChecked && lastChecked.checked===false){
//         lastUnchecked=this;
//     }
//     lastChecked=this;
// }
let inBtw=false;
let checkToggle=false;
let lastIndex;
let toggler=1;
function checker(e,index){
    console.log('Hellooo');
    if(e.shiftKey && index!==0 && check_box[index].checked){
        lastIndex=index;
        for(let i=0;i<=index;i++){
            check_box[i].checked=true;
        }
    }
}
function unchecker(e,index){
    let gre=(lastIndex<index)?index:lastIndex;
    let sma=(lastIndex>index)?index:lastIndex;
    if(e.shiftKey && index!=check_box.length-1 && lastIndex && !check_box[index].checked){
        console.log(lastIndex,index);
        for(let i=sma;i<=gre;i++){
            check_box[i].checked=false;
        }
    }
}
check_box.forEach((check,index)=>{
    check.addEventListener('click',(e)=>{
        checker(e,index);
        unchecker(e,index);
    });
})