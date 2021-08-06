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
let lastCheckIndex=-1;
let lastUnCheckIndex=-1;
let toggler=1;
let firstClick=0;
let min=999;
let firstUnClick=0;
function checker(e,index){
    if(check_box[index].checked && !e.shiftKey){
        lastCheckIndex=index;
        firstClick=1;
    }
    if(lastCheckIndex==-1 && check_box[index].checked){
        lastCheckIndex=index;
    }
    if(e.shiftKey && check_box[index].checked && lastCheckIndex!==-1){
    firstClick=1;
    let gre=(lastCheckIndex<index)?index:lastCheckIndex;
    let sma=(lastCheckIndex>index)?index:lastCheckIndex;
    if( lastCheckIndex!==lastUnCheckIndex){
        for(let i=sma;i<=gre;i++){
            check_box[i].checked=true;
        }
    }
    if(check_box[index].checked){
        lastCheckIndex=index;
    }
    }
}
function unchecker(e,index){
    if(!check_box[index].checked && !e.shiftKey){
        console.log("Entered here");
        lastUnCheckIndex=index;
        firstUnClick=1;
    }
    if(lastUnCheckIndex==-1 && !check_box[index].checked){
        lastUnCheckIndex=index;
    }
    if(e.shiftKey && !check_box[index].checked){
    firstUnClick=1;
    let gre=(lastCheckIndex<index)?index:lastCheckIndex;
    let sma=(lastCheckIndex>index)?index:lastCheckIndex;
    if(lastCheckIndex!==lastUnCheckIndex){
    for(let i=sma;i<=gre;i++){
        check_box[i].checked=false;
    }
    }
    lastUnCheckIndex=index;
}
}
check_box.forEach((check,index)=>{
    check.addEventListener('click',(e)=>{
        checker(e,index);
        unchecker(e,index);
    });
})