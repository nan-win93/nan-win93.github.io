//github link hover
const github = document.getElementById("githubHover");

github.onmouseenter = function(){
    github.src = "link-images/hover/githublink_hover.png";
};
github.onmouseleave = function(){
    github.src = "link-images/normal/githublinktest.png";
};



//cydia repo link hover
const cydia = document.getElementById("cydiaHover");

cydia.onmouseenter = function(){
    cydia.src = "link-images/hover/cydiarepo_hover.png";
}
cydia.onmouseleave = function(){
    cydia.src = "link-images/normal/cydiarepo.png"
}