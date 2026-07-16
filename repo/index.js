// Username settings for repo index.html
window.username;
const p1 = document.getElementById("p1");
const main = document.getElementsByClassName("main");

document.getElementById("usernameSubmit").onclick = function() {
    window.username = document.getElementById("usernameInput").value;
    //EASTER EGGS
    if(username === "me"){
        p1.textContent = `Hello yourself!`;
    }else if(username === "you"){
        p1.textContent = `You ain't me blud`;
    }else if(username === "gigachad"){
        p1.textContent = `no you're not?`;
    }else if(username === "nan" || username === "nan-win93"){
        p1.textContent = `nope - nan`;
    }else if(username === "gio1010" || username === "_krisdreemurr_"){
        p1.textContent = `nope - gio1010`;
    }else if(username === "toby fox" || username === "undertale"){
        p1.textContent = `sans.`;
    }else if(username === "hi" || username === "hello"){
        p1.textContent = `put an actual username`;
    }else{

    //actual username
        p1.textContent = `hello ${username}!`;
    }


    };

