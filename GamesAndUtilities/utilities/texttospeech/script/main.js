let hrs;
let min;
let sec;
let txt;
let voiceSelect;
let speech = new SpeechSynthesisUtterance();
let voices = [];

window.onload = function(){
    hrs = document.querySelector(".hrs");
    min = document.querySelector(".min");
    sec = document.querySelector(".sec");
    txt = document.querySelector("#txt");
    voiceSelect = document.querySelector("#voice");
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[10];
    voices.forEach((voice,i) => (voiceSelect.options[i] = new Option(voice.name,i)));
    voiceSelect.addEventListener("change", ()=>{
        speech.voice = voices[voiceSelect.value];
    });
}
function play(){
    let x;
    let plcholder;
    if(txt.value == "$f"){
        x = "Hello Dear Friend, Type in anything and i will say it aloud";
        txt.value = "";
        txt.setAttribute("placeholder", x);
    }
    else if(txt.value == "$l"){
        x = "Hello darling, how are you today? Type in anything and i will say it aloud";
        txt.value = "";
        txt.setAttribute("placeholder", x);
    }
    else if(txt.value == "$lm"){
        x = "Darling sweetheart, I have three words to say to you, there are... I.. LOVE.. YOU!";
        txt.value = "";
        txt.setAttribute("placeholder", x);
    }
    else if(txt.value == "$glory"){
        x = "Glory, I love you!!";
        console.log("As a friend");
        txt.value = "";
        txt.setAttribute("placeholder", x);
    }
    else if(txt.value == "$layemi"){
        x = "Layemi, you are one of a kind, special and warm-hearted, I'm so lucky to have you";
        txt.value = "";
        txt.setAttribute("placeholder", x);
    }
    else{
        x = txt.value;
    }
    speech.text = x;
    window.speechSynthesis.speak(speech);
}
setInterval(()=>{
    let timeobject = new Date();
    hrs.innerHTML = (timeobject.getHours()<10?"0":"")+timeobject.getHours();
    min.innerHTML = (timeobject.getMinutes()<10?"0":"")+timeobject.getMinutes();
    sec.innerHTML = (timeobject.getSeconds()<10?"0":"")+timeobject.getSeconds();
}, 1000);