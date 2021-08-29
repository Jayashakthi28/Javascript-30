const timeCont=[...document.querySelectorAll('[data-time]')];

let seconds=timeCont.map(data=>{return data.dataset.time})
                                          .map(data=>{
                                              let [min,secs]=data.split(":").map(parseFloat);
                                              let sec=(min*60)+secs;
                                              return sec;
                                          })
                                          .reduce((totalseconds,secs)=>{
                                              return totalseconds+secs;
                                          });
let hr=Math.floor(seconds/3600);
seconds=(seconds%3600);
let min=Math.floor(seconds/60);
seconds=(seconds%60);
console.log(`${hr}:${min}:${seconds}`);