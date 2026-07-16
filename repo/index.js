// Username settings for repo index.html. Once submit, fetches the input

let username;
const p1 = document.getElementById("p1");

document.getElementById("usernameSubmit").onclick = function() {
    username = document.getElementById("usernameInput").value;
    if(username === "me"){
        p1.textContent = `Hello yourself!`;
    }else if(username === "you"){
        p1.textContent = `You ain't me blud`;
    }else if(username === "gigachad"){
        p1.textContent = `no you're not?`;
    }else if(username === "nan" || username === "nan-win93"){
        p1.textContent = `nope`;
    }else{
        p1.textContent = `hello ${username}!`;
    }
    
};