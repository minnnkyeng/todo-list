const currentTime = document.getElementById('time');
const currentDate = document.getElementById('date');

function getToday(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();

    currentDate.innerText = `${year}.${month<10?`0${month}`:month}.${day<10?`0${day}`:day}`;
}

function getTime(){
    const time = new Date();
    const hour = time.getHours()<10 ? "0"+time.getHours() : time.getHours();
    const minute = time.getMinutes()<10 ? "0"+time.getMinutes() : time.getMinutes();
    const second = time.getSeconds()<10 ? "0"+time.getSeconds() : time.getSeconds();
        
    currentTime.innerText = `${hour<10?`0${hour}`:hour}:${minute<10?`0${minute}`:minute}:${second<10?`0${second}`:second}`;
}

function init(){
    getToday();
    setInterval(getTime,1000);
}

init();