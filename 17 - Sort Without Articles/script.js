
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function check(a){
    return a.replace(/^(a |an |the )/i,'');
}
bands.sort((a,b)=>(check(a)>check(b))?1:-1);
console.log(bands);
document.querySelector('#bands').innerHTML=bands.map(band=>{
    return `<li>${band}</li>`;
}).join('');