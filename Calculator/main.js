let one;
let two;
let three;
let four;
let five;
let six;
let seven;
let eight;
let nine;
let zero;
let dotw;
let clear;
let absx;
let sign;
let smalloutput;
let x;
let y;
let z;
let pressed = false;
let absolute;
let output;
let click;
window.onload = function (){
    one = document.querySelector(".one");
    two = document.querySelector(".two");
    three = document.querySelector(".three");
    four = document.querySelector(".four");
    five = document.querySelector(".five");
    six = document.querySelector(".six");
    seven = document.querySelector(".seven");
    eight = document.querySelector(".eight");
    nine = document.querySelector(".nine");
    zero = document.querySelector(".zero");
    dotw = document.querySelector(".dot");
    clear = document.querySelector("#ac");;
    output = document.querySelector(".output");
    smalloutput = document.querySelector(".small-output");
    click = new Audio();
}
function no1(){
    click.src = "assets/aud1.wav";
    click.play();
    if (pressed){
        output.innerText = "";
        pressed = false;
    }
    if(output.innerText == "0"){
        output.innerText = "";
    }
    clear.innerText = "C";
    output.innerText += "1";
    y = output.innerText;
}
function no2(){
    click.src = "assets/aud1.wav";
    click.play();
    if (pressed){
        output.innerText = "";
        pressed = false;
    }
    if(output.innerText == "0"){
        output.innerText = "";
    }
    clear.innerText = "C";
    output.innerText += "2";
    y = output.innerText;
}
function no3(){
    click.src = "assets/aud1.wav";
    click.play();
    if (pressed){
        output.innerText = "";
        pressed = false;
    }
    if(output.innerText == "0"){
        output.innerText = "";
    }
    clear.innerText = "C";
    output.innerText += "3";
    y = output.innerText;
}
function no4(){
    click.src = "assets/aud1.wav";
    click.play();
    if (pressed){
        output.innerText = "";
        pressed = false;
    }
    if(output.innerText == "0"){
        output.innerText = "";
    }
    clear.innerText = "C";
    output.innerText += "4";
    y = output.innerText;
}
function no5(){
    click.src = "assets/aud1.wav";
    click.play();
    if (pressed){
        output.innerText = "";
        pressed = false;
    }
    if(output.innerText == "0"){
        output.innerText = "";
    }
    clear.innerText = "C";
    output.innerText += "5";
    y = output.innerText;
}
function no6(){
    click.src = "assets/aud1.wav";
    click.play();
    if (pressed){
        output.innerText = "";
        pressed = false;
    }
    if(output.innerText == "0"){
        output.innerText = "";
    }
    clear.innerText = "C";
    output.innerText += "6";
    y = output.innerText;
}
function no7(){
    click.src = "assets/aud1.wav";
    click.play();
    if (pressed){
        output.innerText = "";
        pressed = false;
    }
    if(output.innerText == "0"){
        output.innerText = "";
    }
    clear.innerText = "C";
    output.innerText += "7";
    y = output.innerText;
}
function no8(){
    click.src = "assets/aud1.wav";
    click.play();
    if (pressed){
        output.innerText = "";
        pressed = false;
    }
    if(output.innerText == "0"){
        output.innerText = "";
    }
    clear.innerText = "C";
    output.innerText += "8";
    y = output.innerText;
}
function no9(){
    click.src = "assets/aud1.wav";
    click.play();
    if (pressed){
        output.innerText = "";
        pressed = false;
    }
    if(output.innerText == "0"){
        output.innerText = "";
    }
    clear.innerText = "C";
    output.innerText += "9";
    y = output.innerText;
}
function no0(){
    click.src = "assets/aud1.wav";
    click.play();
    if (pressed){
        output.innerText = "";
        pressed = false;
    }
    if(output.innerText == "0"){
        output.innerText = "";
    }
    clear.innerText = "C";
    output.innerText += "0";
    y = output.innerText;
}
function dot(){
    click.src = "assets/aud1.wav";
    click.play();
    if (pressed){
        output.innerText = "";
        pressed = false;
    }
    clear.innerText = "C";
    output.innerText += ".";
    y = output.innerText;
}
function ac(){
    click.src = "assets/aud1.wav";
    click.play();
    if(clear.innerText == "AC"){
        x = "";
        y = "";
        smalloutput.style.innerText = "";
    }
    clear.innerText = "AC";
    output.innerText = "0";
    smalloutput.style.visibility = "hidden";
    smalloutput.style.opacity = "0";
}
function abs(){
    click.src = "assets/aud1.wav";
    click.play();
    if (pressed){
        output.innerText = "-0";
        pressed = false;
    }
    absx = output.innerText;
    if(absx < 0){
        output.innerText = -1 *  parseFloat(absx);
    }
    else if(absx > 0){
        output.innerText = "-" +absx;
    }
    y = output.innerText;
}
function pct(){
    click.src = "assets/aud1.wav";
    click.play();
    pressed = true;
    let pctx = output.innerText;
    let pcty = parseFloat(pctx) / 100;
    output.innerText = pcty;
    y = output.innerText;
}
function div(){
    click.src = "assets/aud1.wav";
    click.play();
    pressed = true;
    x = output.innerText;
    sign = "÷";
    smalloutput.style.visibility = "visible";
    smalloutput.style.opacity = "1";
    smalloutput.innerText = x + sign;
}
function mul(){
    click.src = "assets/aud1.wav";
    click.play();
    pressed = true;
    x = output.innerText;
    sign = "×";
    smalloutput.style.visibility = "visible";
    smalloutput.style.opacity = "1";
    smalloutput.innerText = x + sign;
}
function add(){
    click.src = "assets/aud1.wav";
    click.play();
    pressed = true;
    x = output.innerText;
    sign = "+";
    smalloutput.style.visibility = "visible";
    smalloutput.style.opacity = "1";
    smalloutput.innerText = x + sign;
}
function min(){
    click.src = "assets/aud1.wav";
    click.play();
    pressed = true;
    x = output.innerText;
    sign = "-";
    smalloutput.style.visibility = "visible";
    smalloutput.style.opacity = "1";
    smalloutput.innerText = x + sign;
}
function equals(){
    click.src = "assets/aud1.wav";
    click.play();
    pressed = true;
    if(sign == "+"){
        z =  parseFloat(x)+ parseFloat(y);
    }
    else if(sign == "-"){
        z =  parseFloat(x) - parseFloat(y);
    }
    else if(sign == "×"){
        z =  parseFloat(x)* parseFloat(y);
    }
    else if(sign == "÷"){
        z =  parseFloat(x)/ parseFloat(y);
    }
    else{
        z = y;
    }
    smalloutput.style.visibility = "visible";
    smalloutput.style.opacity = "1";
    smalloutput.innerText += y;
    if(z.toString().length > 10){
        output.innerText = z.toFixed(10);
    }
    else{
        output.innerText = z;
    }
    x = z;
}