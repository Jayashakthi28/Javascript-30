let check_box=document.querySelectorAll('input');
let inBtw=false;
let checkToggle=false;
let lastIndex;
let toggler=1;
let first=0;
let lastcheckIndex=-1;
function checker(e,index){
    if(check_box[index].checked && !e.shiftKey){
        first=1;
        lastcheckIndex=index;
    }
    if(e.shiftKey && index!==0 && check_box[index].checked && first==0){
        lastIndex=index;
        for(let i=0;i<=index;i++){
            check_box[i].checked=true;
        }
        lastcheckIndex=-1;
    }
    if(lastcheckIndex!==-1 && e.shiftKey){
        // console.log(lastcheckIndex,index);
        let gre=(lastcheckIndex<index)?index:lastcheckIndex;
        let sma=(lastcheckIndex>index)?index:lastcheckIndex;
        for(let i=sma;i<=gre;i++){
            check_box[i].checked=true;
        }
        if(check_box[index].checked){
            lastcheckIndex=index;
        }
    }
}
function unchecker(e,index){
    let gre=(lastcheckIndex<index)?index:lastcheckIndex;
    let sma=(lastcheckIndex>index)?index:lastcheckIndex;
    if(!e.shiftKey && !check_box[index].checked && lastcheckIndex===index){
        lastcheckIndex=-1;
        first=0;
    }
    if(e.shiftKey && lastIndex && !check_box[index].checked){
        if(lastcheckIndex!==-1){
            for(let i=sma;i<=gre;i++){
                check_box[i].checked=false;
            }
        }
        else{
            let gre=(lastIndex<index)?index:lastIndex;
            let sma=(lastIndex>index)?index:lastIndex;
            for(let i=sma;i<=gre;i++){
                check_box[i].checked=false;
            }
        }
    }
}
check_box.forEach((check,index)=>{
    check.addEventListener('click',(e)=>{
        checker(e,index);
        unchecker(e,index);
    });
})