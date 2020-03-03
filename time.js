const currentTime = document.getElementById('time');

function getTime(){
    const time = new Date();
    const hour = time.getHours()<10 ? "0"+time.getHours() : time.getHours();
    const minute = time.getMinutes()<10 ? "0"+time.getMinutes() : time.getMinutes();
    const second = time.getSeconds()<10 ? "0"+time.getSeconds() : time.getSeconds();
        
    currentTime.innerText = hour+" : "+minute+" : "+second;
}

function init(){
    setInterval(getTime,1000);
}

init();