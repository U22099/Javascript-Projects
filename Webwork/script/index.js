let input;
function verify(){
    input = document.querySelector("#pass");
    if (input.value === "h3sf4h"){
        window.localStorage.setItem("check", "visited");
        window.location = "quote.html";
    }
    else{
        input.value = "";
        input.style.border = "2px solid red";
    }
}