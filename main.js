var wakeuptime;
var dstime;
var sleeptime;
car noon = 12;

function showCurrentTime(){

    var clock= document.getElementById("clock");
    var currentTime = new Date();

    var hour =currentTime.getHours();
    var minutes =currentTime.getMinutes();
    var second =currentTime.getSeconds();

    var meridian ="PM";
    
    if(hour >=noon){
        meridian="PM";
    }

    var clockTime =hour +":" +minutes +":" + meridian;
    clockTime.innerText = clockTime;

}

var onesecond = 1000;
setInterval(ShowCurrentTime , onesecond);

function changeImage(){
    var time=new Date().getHours();
    console.log(time);

    var image= "img/"
    var imageHTML =document.getElementById("text");

    if(time ==wakeuptime){
        image = "img/mornig.gif"
        console.log("morning");

    }
    else if(time==dstime){
        image="img/class.gif"
    }
}