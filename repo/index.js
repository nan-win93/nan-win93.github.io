// Username settings for repo index.html. Once submit, fetches the input

let username;

document.getElementById("usernameSubmit").onclick = function() {
    username = document.getElementById("usernameInput").value;
    document.getElementById("p1").textContent = `Hello ${username}!`;
};