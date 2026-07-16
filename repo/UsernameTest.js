setTimeout(coolfunction, 3000);

function coolfunction(){
    console.log(`registered username: ${window.username}`);
    setTimeout(coolfunction, 3000);
}


