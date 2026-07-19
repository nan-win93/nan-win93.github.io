let username = localStorage.getItem("username");

if(username === null){
    document.getElementById("usernameWarning").textContent = "Hey! You haven't inserted a username. It is recommended you put one:";
    document.getElementById("usernameWarning2").textContent = "Here";
}else{
    console.log(`username input: ${username}`);
    document.getElementById("welcomeP").textContent = `Welcome, ${username}!`;
}