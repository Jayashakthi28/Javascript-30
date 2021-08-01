let check_box=document.querySelectorAll('input');
let lastChecked=null;
let lastUnchecked=null;
function checker(e){
    let inBtw=false;
    if(e.shiftKey && this.checked && lastChecked){
    check_box.forEach(check=>{
        if(this===check || check===lastChecked){
            inBtw=!inBtw;
        }
        if(inBtw){
            check.checked=true;
        }
    })
    }
    if(e.shiftKey && !(this.checked) && lastUnchecked){
            check_box.forEach(check=>{
                if(this===check || check===lastUnchecked){
                    inBtw=!inBtw;
                }
                if(inBtw){
                    check.checked=false;
                }
            })
        }
    if(lastChecked && lastChecked.checked===false){
        lastUnchecked=this;
    }
    lastChecked=this;
}

check_box.forEach((check)=>{
    check.addEventListener('click',checker);

})