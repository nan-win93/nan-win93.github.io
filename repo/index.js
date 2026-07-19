// Username settings for repo index.html
let username;
let maxChar;

const p1 = document.getElementById("p1");
const main = document.getElementsByClassName("main");

document.getElementById("usernameSubmit").onclick = function() {
    username = document.getElementById("usernameInput").value;
    //EASTER EGGS
    if(username === "me"){
        p1.textContent = `Hello yourself!`;
        a1.textContent = ``;
    }else if(username === "you"){
        p1.textContent = `You ain't me blud`;
        a1.textContent = ``;
    }else if(username === "gigachad"){
        p1.textContent = `no you're not?`;
        a1.textContent = ``;
    }else if(username === "nan" || username === "nan-win93"){
        a1.textContent = ``;
        p1.textContent = `nope - nan`;
    }else if(username === "gio1010" || username === "_krisdreemurr_"){
        a1.textContent = ``;
        p1.textContent = `nope - gio1010`;
    }else if(username === "toby fox" || username === "undertale"){
        a1.textContent = ``;
        p1.textContent = `sans.`;
    }else if(username === "hi" || username === "hello"){
        a1.textContent = ``;
        p1.textContent = `put an actual username`;
    }else if(username === ""){
        a1.textContent = ``;
        p1.textContent = `please input a valid username`;
    }else{

    //check if username exceeded max length
        maxChar = username.charAt(9);
    if(maxChar != ""){
        p1.textContent = `Your username exceeded the maximum length`;
        a1.textContent = ``;
    }else{
        if(username.includes(" ")){
            p1.textContent = `username can't have spaces`;
            a1.textContent = ``;
        }else{
        //username print
            p1.textContent = `hello ${username}!`;
            a1.textContent = `Proceed`;
        
        //remember username in other site
        localStorage.setItem("username", username);
        }
    }
    
}


};

