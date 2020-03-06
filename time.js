const currentTime = document.getElementById('time');
const currentDate = document.getElementById('date');

function getDayOfWeek(day){
    const week = new Array('Sun','Mon','Tue','Wed','Thu','Fri','Sat');
    return week[day]
}

function getToday(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();
    const dayOfWeek = getDayOfWeek(date.getDay());

    currentDate.innerText = `${year}.${month<10?`0${month}`:month}.${day<10?`0${day}`:day}.${dayOfWeek}`;
}

function getTime(){
    const time = new Date();
    const hour = time.getHours()<10 ? "0"+time.getHours() : time.getHours();
    const minute = time.getMinutes()<10 ? "0"+time.getMinutes() : time.getMinutes();
    const second = time.getSeconds()<10 ? "0"+time.getSeconds() : time.getSeconds();
        
    currentTime.innerText = `${hour}:${minute}:${second}`;
}

function init(){
    getToday();
    setInterval(getTime,1000);
}

init();