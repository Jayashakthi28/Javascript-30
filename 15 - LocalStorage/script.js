const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('item'))||[];
function items_adder(e){
    e.preventDefault();
    items.push({
        text:this.querySelector('input[type=text]').value,
        checked:false
    });
    itemsList.innerHTML=items.map((data,index)=>{
        return`<li><input type="checkbox" name='${index}' id='${index}' ${(data.checked)?"checked":''}>
        <label for='${index}'>${data.text}</label></li>`
    }).join('');
    localStorage.setItem('item',JSON.stringify(items));
    this.reset();
}
function list_updater(){
    itemsList.innerHTML=items.map((data,index)=>{
        return`<li><input type="checkbox" name='${index}' id='${index}' ${(data.checked)?"checked":''}>
        <label for='${index}'>${data.text}</label></li>`
    }).join('');
    localStorage.setItem('item',JSON.stringify(items));
}
function checker(e){
    if(!e.target.matches('input')) return;
    items[e.target.name].checked= !items[e.target.name].checked;
    localStorage.setItem('item',JSON.stringify(items));
}
addItems.addEventListener("submit",items_adder);
itemsList.addEventListener('click',checker);
if(items.length){
    list_updater();
}