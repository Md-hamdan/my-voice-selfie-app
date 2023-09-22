var SpeechRecognition = window.webkitSpeechRecognition;
var recogniton = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML="";
    recogniton.start();
}

recogniton.onresult = function (event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie") {
        speak();
    }  
}

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
    })
}

function speak() {
    var synth = window.speechSynthesis;
    var speak_data = "taking you selfie in 5 seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);

setTimeout(function(){
    take_snapshot();
    save();
},5000);
}

function save() {
    link=document.getElementById("link");
    img = document.getElementById("selfie_image").scroll;
    link.href=img;
    link.click();
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});

var camera = document.getElementById("camera");