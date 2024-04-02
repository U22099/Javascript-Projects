let output;
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbols = "/!@#$%^&*()_+=-|~`}{[].,:;";

window.onload = function(){
    output = document.querySelector("#output");
}
function generateRandomPassword(){
    let w = Math.floor(Math.random()*uppercase.length+1);
    let x = Math.floor(Math.random()*lowercase.length+1);
    let y = Math.floor(Math.random()*number.length+1);
    let z = Math.floor(Math.random()*symbols.length+1);
    let a = Math.floor(Math.random()*uppercase.length+1);
    let b = Math.floor(Math.random()*lowercase.length+1);
    let c = Math.floor(Math.random()*number.length+1);
    let d = Math.floor(Math.random()*symbols.length+1);
    let string1 = lowercase.charAt(x)+uppercase.charAt(w)+symbols.charAt(z)+number.charAt(y);
    let string2 = number.charAt(c)+symbols.charAt(d)+lowercase.charAt(b)+uppercase.charAt(a);
    let helper1 = "", helper2 = "";
    // while((helper1.length<=string1.length)&&(helper2.length<=string2.length)){
    //     let randint = Math.floor(Math.random()*string1+1);
    //     if(helper1.includes(string1.charAt(randint))){
    //     }
    //     else{
    //         helper1 += string1.charAt(randint);
    //     }
    //     if(helper2.includes(string2.charAt(randint))){
    //     }
    //     else{
    //         helper2 += string2.charAt(randint);
    //     }
    // }
    output.value = string1+string2;
    output.innerHTML = string1+string2;
}
function save(){
    navigator.clipboard.writeText(output.value);
    output.value = "";
    output.placeholder = "Added To Clipboard";
    setTimeout(()=>{
        output.placeholder = "";
    }, 2000);
}