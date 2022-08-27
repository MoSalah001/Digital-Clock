let clock = document.getElementById("clock");
let dateDiv = document.getElementById("date");
let btn = document.getElementById("timeFormat");
let date = new Date();
let day = date.getDay() < 10 ? `0${date.getDay()}`: `${date.getDay()}`;
let month = date.getMonth() < 10 ? `0${date.getMonth()}` : `${date.getMonth()}`;
let strMonth = date.toLocaleString('default',{month : "short"}); 
let fullDay = false
let fullDate = 
`${day}.${strMonth}.${date.getFullYear()}`
dateDiv.innerText = fullDate
function changeFormat() {
    if(fullDay)
    {
        fullDay = false
        liveTime();
    }
    else
    {
        fullDay = true
        liveTime();
    }
}

btn.addEventListener("click",changeFormat)

function liveTime() 
{
    date = new Date();
    let seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
    let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    let hours = date.getHours()
    let timeOfDay , fixHours , time
    if (fullDay === false)
        {
            btn.innerText = "24 Format"
            if (hours > 12) 
                {
                    hours -= 12
                    fixHours = hours < 10 ? `0${hours}` : `${hours}`
                    timeOfDay = "PM"
                    time = `${fixHours} : ${minutes} : ${seconds} ${timeOfDay}`
                    clock.innerText = time
                }
            else 
                {
                    fixHours = hours < 10 ? `0${hours}` : `${hours}`
                    timeOfDay = "AM"
                    time = `${fixHours} : ${minutes} : ${seconds} ${timeOfDay}`
                    clock.innerText = time
                }
        }
    else
        {
            btn.innerText = "12 Format"
            hours= date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`
            time = `${hours} : ${minutes} : ${seconds}`
            clock.innerText = time
        } 
}
setInterval(liveTime,1000)