let no = 0;
let type;
let question;
let a;
let b;
let c;
let abtn;
let bbtn;
let cbtn;
let aimg;
let bimg;
let cimg;
let typeArr = ["Learning","Decision Making","Daily Routine","Energy",
                "Teamwork","Planning","Sleep","Appetite","Temperament",
                "Stress",
                ""];
let questArr = ["When playing a brand new game how do you learn the instructions?",
                "When making important decisions, which type are you?",
                "How do you prefer your daily routines to be?",
                "In general, how is your stamina over the course of a day?",
                "You are assigned to work on a group project. What role would you normally take?",
                "How do you approach planning a vacation?",
                "Describe your typical night of Sleep?",
                "Describe your appetite on a typical day?",
                "In general, which of the following best describes you?",
                "You have an online assignment worth 50% of your grade. It is due in 15min. But the power and internet go out!",
                ""];
let aArr = ["Read the rules to determine the objectives.",
            "Thoroughly research all options before deciding.",
            "Goal-oriented for maximum productivity.",
            "Average. but I can push myself when needed.",
            "I take the lead and delegate tasks.",
            "I prepare an itinerary and schedule to follow.",
            "Moderate, regular sleeper.",
            "I don't like to skip meals. I can get irritable when I miss them.",
            "Purposeful and goal-oriented",
            "Fustration or irritability.",];
let bArr = ["Hop in and start playing, and learn as I go",
            "Go with my gut and pick what I intuitively like.",
            "Flexible and adaptable to life.",
            "Mild. I tend to start strong with lots of energy, but lose steam.",
            "I excel in roles that require high technical skill.",
            "I want something flexible and spontaneous.",
            "Light sleeper, I wake up easily.",
            "It fluctuates. Sometimes I snack a lot, sometimes I forget to eat.",
            "Enthusiastic and enjoy trying new things.",
            "Worry or anxiety",
            ""];
let cArr = ["Look for tutorials or guidance from someone else who has played",
            "Ask people I trust for recommendations.",
            "Predictable and steady for consistency.",
            "Enduring. I have great stamina, but don't typically reach my limit.",
            "I prefer to help where needed and empower my team members.",
            "I stick to what I know and enjoy familiarity.",
            "Deep sleeper, waking up in the morning is hard.",
            "I tend to feel full for a while after a mean. I can comfortable dalay eating if needed.",
            "Easygoing and go with the flow.",
            "Hopeless or loss of motivation.",
            ""];
let aStore = 0;
let bStore = 0;
let cStore = 0;
let win;
let brainType;;
window.onload = function(){
    type = document.querySelector("#type");
    question = document.querySelector("#question");
    a = document.querySelector("#a");
    b = document.querySelector("#b");
    c = document.querySelector("#c");
    abtn = document.querySelector("#abtn");
    bbtn = document.querySelector("#bbtn");
    cbtn = document.querySelector("#cbtn");
    aimg  = document.querySelector("#aimg");
    bimg  = document.querySelector("#bimg");
    cimg  = document.querySelector("#cimg");
    type.innerHTML = typeArr[no];
    question.innerHTML = questArr[no];
    a.innerHTML = aArr[no];
    b.innerHTML = bArr[no];
    c.innerHTML = cArr[no];
    no += 1;
}
function showBrainType(x){
    type.innerHTML = "RESULT";
    question.innerHTML = "Your brain type is the "+x+" group!";
    a.style.visibility = "hidden";
    b.style.visibility = "hidden";
    c.style.visibility = "hidden";
    a.style.width = "10px";
    b.style.width = "10px";
    c.style.width = "10px";
    abtn.addEventListener("click", function(){
        window.location = "tora.html";
    });
    bbtn.addEventListener("click", function(){
        window.location = "kitsune.html";
    });
    cbtn.addEventListener("click", function(){
        window.location = "kuma.html";
    });
    aimg.addEventListener("click", function(){
        window.location = "tora.html";
    });
    bimg.addEventListener("click", function(){
        window.location = "kitsune.html";
    });
    cimg.addEventListener("click", function(){
        window.location = "kuma.html";
    });
}
function apress(){
    aStore += 1;
    type.innerHTML = typeArr[no];
    question.innerHTML = questArr[no];
    a.innerHTML = aArr[no];
    b.innerHTML = bArr[no];
    c.innerHTML = cArr[no];
    if(no >= 10){
        if(aStore == bStore){
            win = Math.max(aStore, cStore);
            if(win == aStore){
                brainType = "Tora And Kitsune";
                aimg.style.width = "150px";
                aimg.style.height = "180px";
                aimg.src = "images/IMG_0935.JPG";
                abtn.style.width = "70%";
                abtn.innerHTML = "Tora Group";
                bimg.style.width = "150px";
                bimg.style.height = "180px";
                bimg.src = "images/IMG_0934.JPG";
                bbtn.style.width = "70%";
                bbtn.innerHTML = "Kitsune Group";
                cbtn.style.visibility = "hidden";
            }
            else if(win == cStore){
                brainType = "Kuma";
                cimg.style.width = "150px";
                cimg.style.height = "180px";
                cimg.src = "images/IMG_0936.JPG";
                cbtn.style.width = "70%";
                cbtn.innerHTML = "Kuma Group";
                bbtn.style.visibility = "hidden";
                abtn.style.visibility = "hidden";
            }
        }
        else if(aStore == cStore){
            win = Math.max(aStore, bStore);
            if(win == aStore){
                brainType = "Tora And Kuma";
                aimg.style.width = "150px";
                aimg.style.height = "180px";
                aimg.src = "images/IMG_0935.JPG";
                abtn.style.width = "70%";
                abtn.innerHTML = "Tora Group";
                cimg.style.width = "150px";
                cimg.style.height = "180px";
                cimg.src = "images/IMG_0936.JPG";
                cbtn.style.width = "70%";
                cbtn.innerHTML = "Kuma Group";
                bbtn.style.visibility = "hidden";
            }
            else if(win == bStore){
                brainType = "Kitsune";
                bimg.style.width = "150px";
                bimg.style.height = "180px";
                bimg.src = "images/IMG_0934.JPG";
                bbtn.style.width = "70%";
                bbtn.innerHTML = "Kitsune Group";
                abtn.style.visibility = "hidden";
                cbtn.style.visibility = "hidden";
            }
        }
        else if(bStore == cStore){
            win = Math.max(bStore, cStore);
            if(win == bStore){
                brainType = "Kitsune And Kuma";
                bimg.style.width = "150px";
                bimg.style.height = "180px";
                bimg.src = "images/IMG_0934.JPG";
                bbtn.style.width = "70%";
                bbtn.innerHTML = "Kitsune Group";
                cimg.style.width = "150px";
                cimg.style.height = "180px";
                cimg.src = "images/IMG_0936.JPG";
                cbtn.style.width = "70%";
                cbtn.innerHTML = "Kuma Group";
                abtn.style.visibility = "hidden";
            }
            else if(win == aStore){
                brainType = "Tora";
                aimg.style.width = "150px";
                aimg.style.height = "180px";
                aimg.src = "images/IMG_0935.JPG";
                abtn.style.width = "70%";
                abtn.innerHTML = "Tora Group";
                bbtn.style.visibility = "hidden";
                cbtn.style.visibility = "hidden";
            }
        }
        else if(aStore == bStore && bStore == cStore){
            brainType = "Tora, Kitsuna And Kuma";
            aimg.style.width = "150px";
            aimg.style.height = "180px";
            aimg.src = "images/IMG_0935.JPG";
            abtn.style.width = "70%";
            abtn.innerHTML = "Tora Group";
            bimg.style.width = "150px";
            bimg.style.height = "180px";
            bimg.src = "images/IMG_0934.JPG";
            bbtn.style.width = "70%";
            bbtn.innerHTML = "Kitsune Group";
            cimg.style.width = "150px";
            cimg.style.height = "180px";
            cimg.src = "images/IMG_0936.JPG";
            cbtn.style.width = "70%";
            cbtn.innerHTML = "Kuma Group";
        }
        else{
            win = Math.max(aStore, bStore, cStore);
            if(win == aStore){
                brainType = "Tora";
                aimg.style.width = "150px";
                aimg.style.height = "180px";
                aimg.src = "images/IMG_0935.JPG";
                abtn.style.width = "70%";
                abtn.innerHTML = "Tora Group";
                bbtn.style.visibility = "hidden";
                cbtn.style.visibility = "hidden";
            }
            else if(win == bStore){
                brainType = "Kitsune";
                bimg.style.width = "150px";
                bimg.style.height = "180px";
                bimg.src = "images/IMG_0934.JPG";
                bbtn.style.width = "70%";
                bbtn.innerHTML = "Kitsune Group";
                abtn.style.visibility = "hidden";
                cbtn.style.visibility = "hidden";
            }
            else if(win == cStore){
                brainType = "Kuma";
                cimg.style.width = "150px";
                cimg.style.height = "180px";
                cimg.src = "images/IMG_0936.JPG";
                cbtn.style.width = "70%";
                cbtn.innerHTML = "Kuma Group";
                bbtn.style.visibility = "hidden";
                abtn.style.visibility = "hidden";
            }
            else{
                brainType = "Error";
            }
        }
        showBrainType(brainType);
    }
    no += 1;
}
function bpress(){
    bStore += 1;
    type.innerHTML = typeArr[no];
    question.innerHTML = questArr[no];
    a.innerHTML = aArr[no];
    b.innerHTML = bArr[no];
    c.innerHTML = cArr[no];
    if(no == 10){
        if(aStore == bStore){
            win = Math.max(aStore, cStore);
            if(win == aStore){
                brainType = "Tora And Kitsune";
                aimg.style.width = "150px";
                aimg.style.height = "180px";
                aimg.src = "images/IMG_0935.JPG";
                abtn.style.width = "70%";
                abtn.innerHTML = "Tora Group";
                bimg.style.width = "150px";
                bimg.style.height = "180px";
                bimg.src = "images/IMG_0934.JPG";
                bbtn.style.width = "70%";
                bbtn.innerHTML = "Kitsune Group";
                cbtn.style.visibility = "hidden";
            }
            else if(win == cStore){
                brainType = "Kuma";
                cimg.style.width = "150px";
                cimg.style.height = "180px";
                cimg.src = "images/IMG_0936.JPG";
                cbtn.style.width = "70%";
                cbtn.innerHTML = "Kuma Group";
                bbtn.style.visibility = "hidden";
                abtn.style.visibility = "hidden";
            }
        }
        else if(aStore == cStore){
            win = Math.max(aStore, bStore);
            if(win == aStore){
                brainType = "Tora And Kuma";
                aimg.style.width = "150px";
                aimg.style.height = "180px";
                aimg.src = "images/IMG_0935.JPG";
                abtn.style.width = "70%";
                abtn.innerHTML = "Tora Group";
                cimg.style.width = "150px";
                cimg.style.height = "180px";
                cimg.src = "images/IMG_0936.JPG";
                cbtn.style.width = "70%";
                cbtn.innerHTML = "Kuma Group";
                bbtn.style.visibility = "hidden";
            }
            else if(win == bStore){
                brainType = "Kitsune";
                bimg.style.width = "150px";
                bimg.style.height = "180px";
                bimg.src = "images/IMG_0934.JPG";
                bbtn.style.width = "70%";
                bbtn.innerHTML = "Kitsune Group";
                abtn.style.visibility = "hidden";
                cbtn.style.visibility = "hidden";
            }
        }
        else if(bStore == cStore){
            win = Math.max(bStore, cStore);
            if(win == bStore){
                brainType = "Kitsune And Kuma";
                bimg.style.width = "150px";
                bimg.style.height = "180px";
                bimg.src = "images/IMG_0934.JPG";
                bbtn.style.width = "70%";
                bbtn.innerHTML = "Kitsune Group";
                cimg.style.width = "150px";
                cimg.style.height = "180px";
                cimg.src = "images/IMG_0936.JPG";
                cbtn.style.width = "70%";
                cbtn.innerHTML = "Kuma Group";
                abtn.style.visibility = "hidden";
            }
            else if(win == aStore){
                brainType = "Tora";
                aimg.style.width = "150px";
                aimg.style.height = "180px";
                aimg.src = "images/IMG_0935.JPG";
                abtn.style.width = "70%";
                abtn.innerHTML = "Tora Group";
                bbtn.style.visibility = "hidden";
                cbtn.style.visibility = "hidden";
            }
        }
        else if(aStore == bStore && bStore == cStore){
            brainType = "Tora, Kitsuna And Kuma";
            aimg.style.width = "150px";
            aimg.style.height = "180px";
            aimg.src = "images/IMG_0935.JPG";
            abtn.style.width = "70%";
            abtn.innerHTML = "Tora Group";
            bimg.style.width = "150px";
            bimg.style.height = "180px";
            bimg.src = "images/IMG_0934.JPG";
            bbtn.style.width = "70%";
            bbtn.innerHTML = "Kitsune Group";
            cimg.style.width = "150px";
            cimg.style.height = "180px";
            cimg.src = "images/IMG_0936.JPG";
            cbtn.style.width = "70%";
            cbtn.innerHTML = "Kuma Group";
        }
        else{
            win = Math.max(aStore, bStore, cStore);
            if(win == aStore){
                brainType = "Tora";
                aimg.style.width = "150px";
                aimg.style.height = "180px";
                aimg.src = "images/IMG_0935.JPG";
                abtn.style.width = "70%";
                abtn.innerHTML = "Tora Group";
                bbtn.style.visibility = "hidden";
                cbtn.style.visibility = "hidden";
            }
            else if(win == bStore){
                brainType = "Kitsune";
                bimg.style.width = "150px";
                bimg.style.height = "180px";
                bimg.src = "images/IMG_0934.JPG";
                bbtn.style.width = "70%";
                bbtn.innerHTML = "Kitsune Group";
                abtn.style.visibility = "hidden";
                cbtn.style.visibility = "hidden";
            }
            else if(win == cStore){
                brainType = "Kuma";
                cimg.style.width = "150px";
                cimg.style.height = "180px";
                cimg.src = "images/IMG_0936.JPG";
                cbtn.style.width = "70%";
                cbtn.innerHTML = "Kuma Group";
                bbtn.style.visibility = "hidden";
                abtn.style.visibility = "hidden";
            }
            else{
                brainType = "Error";
            }
        }
        showBrainType(brainType);
    }
    no += 1;
}
function cpress(){
    cStore += 1;
    type.innerHTML = typeArr[no];
    question.innerHTML = questArr[no];
    a.innerHTML = aArr[no];
    b.innerHTML = bArr[no];
    c.innerHTML = cArr[no];
    if(no == 10){
        if(aStore == bStore){
            win = Math.max(aStore, cStore);
            if(win == aStore){
                brainType = "Tora And Kitsune";
                aimg.style.width = "150px";
                aimg.style.height = "180px";
                aimg.src = "images/IMG_0935.JPG";
                abtn.style.width = "70%";
                abtn.innerHTML = "Tora Group";
                bimg.style.width = "150px";
                bimg.style.height = "180px";
                bimg.src = "images/IMG_0934.JPG";
                bbtn.style.width = "70%";
                bbtn.innerHTML = "Kitsune Group";
                cbtn.style.visibility = "hidden";
            }
            else if(win == cStore){
                brainType = "Kuma";
                cimg.style.width = "150px";
                cimg.style.height = "180px";
                cimg.src = "images/IMG_0936.JPG";
                cbtn.style.width = "70%";
                cbtn.innerHTML = "Kuma Group";
                bbtn.style.visibility = "hidden";
                abtn.style.visibility = "hidden";
            }
        }
        else if(aStore == cStore){
            win = Math.max(aStore, bStore);
            if(win == aStore){
                brainType = "Tora And Kuma";
                aimg.style.width = "150px";
                aimg.style.height = "180px";
                aimg.src = "images/IMG_0935.JPG";
                abtn.style.width = "70%";
                abtn.innerHTML = "Tora Group";
                cimg.style.width = "150px";
                cimg.style.height = "180px";
                cimg.src = "images/IMG_0936.JPG";
                cbtn.style.width = "70%";
                cbtn.innerHTML = "Kuma Group";
                bbtn.style.visibility = "hidden";
            }
            else if(win == bStore){
                brainType = "Kitsune";
                bimg.style.width = "150px";
                bimg.style.height = "180px";
                bimg.src = "images/IMG_0934.JPG";
                bbtn.style.width = "70%";
                bbtn.innerHTML = "Kitsune Group";
                abtn.style.visibility = "hidden";
                cbtn.style.visibility = "hidden";
            }
        }
        else if(bStore == cStore){
            win = Math.max(bStore, cStore);
            if(win == bStore){
                brainType = "Kitsune And Kuma";
                bimg.style.width = "150px";
                bimg.style.height = "180px";
                bimg.src = "images/IMG_0934.JPG";
                bbtn.style.width = "70%";
                bbtn.innerHTML = "Kitsune Group";
                cimg.style.width = "150px";
                cimg.style.height = "180px";
                cimg.src = "images/IMG_0936.JPG";
                cbtn.style.width = "70%";
                cbtn.innerHTML = "Kuma Group";
                abtn.style.visibility = "hidden";
            }
            else if(win == aStore){
                brainType = "Tora";
                aimg.style.width = "150px";
                aimg.style.height = "180px";
                aimg.src = "images/IMG_0935.JPG";
                abtn.style.width = "70%";
                abtn.innerHTML = "Tora Group";
                bbtn.style.visibility = "hidden";
                cbtn.style.visibility = "hidden";
            }
        }
        else if(aStore == bStore && bStore == cStore){
            brainType = "Tora, Kitsuna And Kuma";
            aimg.style.width = "150px";
            aimg.style.height = "180px";
            aimg.src = "images/IMG_0935.JPG";
            abtn.style.width = "70%";
            abtn.innerHTML = "Tora Group";
            bimg.style.width = "150px";
            bimg.style.height = "180px";
            bimg.src = "images/IMG_0934.JPG";
            bbtn.style.width = "70%";
            bbtn.innerHTML = "Kitsune Group";
            cimg.style.width = "150px";
            cimg.style.height = "180px";
            cimg.src = "images/IMG_0936.JPG";
            cbtn.style.width = "70%";
            cbtn.innerHTML = "Kuma Group";
        }
        else{
            win = Math.max(aStore, bStore, cStore);
            if(win == aStore){
                brainType = "Tora";
                aimg.style.width = "150px";
                aimg.style.height = "180px";
                aimg.src = "images/IMG_0935.JPG";
                abtn.style.width = "70%";
                abtn.innerHTML = "Tora Group";
                bbtn.style.visibility = "hidden";
                cbtn.style.visibility = "hidden";
            }
            else if(win == bStore){
                brainType = "Kitsune";
                bimg.style.width = "150px";
                bimg.style.height = "180px";
                bimg.src = "images/IMG_0934.JPG";
                bbtn.style.width = "70%";
                bbtn.innerHTML = "Kitsune Group";
                abtn.style.visibility = "hidden";
                cbtn.style.visibility = "hidden";
            }
            else if(win == cStore){
                brainType = "Kuma";
                cimg.style.width = "150px";
                cimg.style.height = "180px";
                cimg.src = "images/IMG_0936.JPG";
                cbtn.style.width = "70%";
                cbtn.innerHTML = "Kuma Group";
                bbtn.style.visibility = "hidden";
                abtn.style.visibility = "hidden";
            }
            else{
                brainType = "Error";
            }
        }
        showBrainType(brainType);
    }
    no += 1;
}