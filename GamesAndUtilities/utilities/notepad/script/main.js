let textbox1;
let textbox2;
let textbox3;
let textbox4;
let textbox5;
let textbox6;
let destroy1;
let destroy2;
let destroy3;
let destroy4;
let destroy5;
let destroy6;
let no = 0;
let int1;
let int2;
let int3;
let int4;
let int5;
let int6;
let input1 = "key1";
let input2 = "key2";
let input3 = "key3";
let input4 = "key4";
let input5 = "key5";
let input6 = "key6";
let state1 = "state1";
let state2 = "state2";
let state3 = "state3";
let state4 = "state4";
let state5 = "state5";
let state6 = "state6";
let dialogContainer;
let dialog;
let dialog2;
let dialog3;
let pswset;
let pswent;
let password;
window.onload = ()=>{
    
    textbox1 = document.querySelector("#txt1");
    textbox2 = document.querySelector("#txt2");
    textbox3 = document.querySelector("#txt3");
    textbox4 = document.querySelector("#txt4");
    textbox5 = document.querySelector("#txt5");
    textbox6 = document.querySelector("#txt6");
    destroy1 = document.querySelector("#des1");
    destroy2 = document.querySelector("#des2");
    destroy3 = document.querySelector("#des3");
    destroy4 = document.querySelector("#des4");
    destroy5 = document.querySelector("#des5");
    destroy6 = document.querySelector("#des6");
    body = document.getElementsByTagName("BODY")[0];
    dialogContainer = document.querySelector(".dialog-container");
    dialog = document.querySelector("#pswsetdialog");
    dialog2 = document.querySelector("#pswdialog");
    dialog3 = document.querySelector("#resetdialog");
    pswset = document.querySelector("#pswset");
    pswreminder = document.querySelector("#pswreminder");
    pswent = document.querySelector("#pswent");
    pswrem = document.querySelector("#pswrem");
    pswnew = document.querySelector("#pswnew");
    password = localStorage.getItem("psw");
    if(password){
        showDialog(dialog2);
    }
    else{
        showDialog(dialog);
    }
}
function chkPsw(){
    if(pswent.value == localStorage.getItem("psw")){
        textbox1.style.visibility = localStorage.getItem(state1);
        textbox2.style.visibility = localStorage.getItem(state2);
        textbox3.style.visibility = localStorage.getItem(state3);
        textbox4.style.visibility = localStorage.getItem(state4);
        textbox5.style.visibility = localStorage.getItem(state5);
        textbox6.style.visibility = localStorage.getItem(state6);
        destroy1.style.visibility = localStorage.getItem(state1);
        destroy2.style.visibility = localStorage.getItem(state2);
        destroy3.style.visibility = localStorage.getItem(state3);
        destroy4.style.visibility = localStorage.getItem(state4);
        destroy5.style.visibility = localStorage.getItem(state5);
        destroy6.style.visibility = localStorage.getItem(state6);
        textbox1.value = localStorage.getItem(input1);
        textbox2.value = localStorage.getItem(input2);
        textbox3.value = localStorage.getItem(input3);
        textbox4.value = localStorage.getItem(input4);
        textbox5.value = localStorage.getItem(input5);
        textbox6.value = localStorage.getItem(input6);
        closeDialog(dialog2);
    }
    else if(pswent.value =="$PASSWORDRESET$"){
        closeDialog(dialog2);
        showDialog(dialog3);
    }
    else{
        pswent.value = "";
        alert("Wrong Password, If you have forgotten your password type in \"$PASSWORDRESET$\" to reset your password.");
    }
}
function setPsw(){
    localStorage.setItem("psw", pswset.value);
    localStorage.setItem("pswreminder", pswreminder.value);
    closeDialog(dialog);
    alert("Your password is: "+pswset.value+" And your password reminder is: "+pswreminder.value);
}
function pswReset(){
    if(localStorage.getItem("pswreminder") == pswrem.value){
        localStorage.setItem("psw", pswnew.value);
        textbox1.style.visibility = localStorage.getItem(state1);
        textbox2.style.visibility = localStorage.getItem(state2);
        textbox3.style.visibility = localStorage.getItem(state3);
        textbox4.style.visibility = localStorage.getItem(state4);
        textbox5.style.visibility = localStorage.getItem(state5);
        textbox6.style.visibility = localStorage.getItem(state6);
        destroy1.style.visibility = localStorage.getItem(state1);
        destroy2.style.visibility = localStorage.getItem(state2);
        destroy3.style.visibility = localStorage.getItem(state3);
        destroy4.style.visibility = localStorage.getItem(state4);
        destroy5.style.visibility = localStorage.getItem(state5);
        destroy6.style.visibility = localStorage.getItem(state6);
        textbox1.value = localStorage.getItem(input1);
        textbox2.value = localStorage.getItem(input2);
        textbox3.value = localStorage.getItem(input3);
        textbox4.value = localStorage.getItem(input4);
        textbox5.value = localStorage.getItem(input5);
        textbox6.value = localStorage.getItem(input6);
        closeDialog(dialog3);
        alert("New password is: "+pswnew.value);
    }
    else{
        alert("Wrong Input!");
    }
}
function showDialog(x){
    dialogContainer.style.visibility = "visible";
    x.style.visibility = "visible";
    body.style.height = "100%";
    body.style.overflow = "hidden";
}
function closeDialog(x){
    dialogContainer.style.visibility = "hidden";
    x.style.visibility = "hidden";
    body.style.height = "auto%";
    body.style.overflow = "auto";
}
function showNotepad(){
    let string;
    if(no == 6){
        alert("Max Notepads Reached")
        no = 0;
    }
    no += 1;
    if(no == 1){
        if(textbox1.style.visibility == "visible"){
            no += 1;
        }
        else{
            box1();
        }
    }
    if(no == 2){
        if(textbox2.style.visibility == "visible"){
            no += 1;
        }
        else{
            box2();
        }
    }
    if(no == 3){
        if(textbox3.style.visibility == "visible"){
            no += 1;
        }
        else{
            box3();
        }
    }
    if(no == 4){
        if(textbox4.style.visibility == "visible"){
            no += 1;
        }
        else{
            box4();
        }
    }
    if(no == 5){
        if(textbox5.style.visibility == "visible"){
            no += 1;
        }
        else{
            box5();
        }
    }
    if(no == 6){
        if(textbox6.style.visibility == "visible"){
            no += 1;
        }
        else{
            box6();
        }
    }
}
function box1(){
    destroy1.style.visibility = "visible";
    string = localStorage.getItem(input1);
    textbox1.style.visibility = "visible";
    textbox1.value = string;
    textbox1.focus()
    int1 = setInterval(()=>{
        localStorage.setItem(input1, textbox1.value);
    }, 500);
    localStorage.setItem(state1, "visible");
}
function box2(){
    destroy2.style.visibility = "visible";
    string = localStorage.getItem(input2);
    textbox2.style.visibility = "visible";
    textbox2.value = string;
    textbox2.focus()
    int2 = setInterval(()=>{
        localStorage.setItem(input2, textbox2.value);
    }, 500);
    localStorage.setItem(state2, "visible");
}
function box3(){
    destroy3.style.visibility = "visible";
    string = localStorage.getItem(input3);
    textbox3.style.visibility = "visible";
    textbox3.value = string;
    textbox3.focus()
    int3 = setInterval(()=>{
        localStorage.setItem(input3, textbox3.value);
    }, 500);
    localStorage.setItem(state3, "visible");
}
function box4(){
    destroy4.style.visibility = "visible";
    string = localStorage.getItem(input4);
    textbox4.style.visibility = "visible";
    textbox4.value = string;
    textbox4.focus()
    int4 = setInterval(()=>{
        localStorage.setItem(input4, textbox4.value);
    }, 500);
    localStorage.setItem(state4, "visible");
}
function box5(){
    destroy5.style.visibility = "visible";
    string = localStorage.getItem(input5);
    textbox5.style.visibility = "visible";
    textbox5.value = string;
    textbox5.focus()
    int5 = setInterval(()=>{
        localStorage.setItem(input5, textbox5.value);
    }, 500);
    localStorage.setItem(state5, "visible");
}
function box6(){
    destroy6.style.visibility = "visible";
    string = localStorage.getItem(input6);
    textbox6.style.visibility = "visible";
    textbox6.value = string;
    textbox6.focus()
    int6 = setInterval(()=>{
        localStorage.setItem(input6, textbox6.value);
    }, 500);
    localStorage.setItem(state6, "visible");
}
function box1Remove(){
    textbox1.style.visibility = "hidden";
    destroy1.style.visibility = "hidden";
    clearInterval(int1);
    localStorage.removeItem(input1);
    localStorage.removeItem(state1);
    no = 0;
}
function box2Remove(){
    textbox2.style.visibility = "hidden";
    destroy2.style.visibility = "hidden";
    clearInterval(int2);
    localStorage.removeItem(input2);
    localStorage.removeItem(state2);
    no = 0;
}
function box3Remove(){
    textbox3.style.visibility = "hidden";
    destroy3.style.visibility = "hidden";
    clearInterval(int3);
    localStorage.removeItem(input3);
    localStorage.removeItem(state3);
    no = 0;
}
function box4Remove(){
    textbox4.style.visibility = "hidden";
    destroy4.style.visibility = "hidden";
    clearInterval(int4);
    localStorage.removeItem(input4);
    localStorage.removeItem(state4);
    no = 0;
}
function box5Remove(){
    textbox5.style.visibility = "hidden";
    destroy5.style.visibility = "hidden";
    clearInterval(int5);
    localStorage.removeItem(input5);
    localStorage.removeItem(state5);
    no = 0;
}
function box6Remove(){
    textbox6.style.visibility = "hidden";
    destroy6.style.visibility = "hidden";
    clearInterval(int6);
    localStorage.removeItem(input6);
    localStorage.removeItem(state6);
    no = 0;
}