const gray =document.querySelector(".gray");
const white =document.querySelector(".white");
const blue =document.querySelector(".blue");
const yellow =document.querySelector(".yellow");
const body = document.querySelector("body")


gray.addEventListener("click", function(e){
    body.style.backgroundColor = "gray";
});

white.addEventListener("click", function(e){
    body.style.backgroundColor = "white";
});

blue.addEventListener("click", function(e){
    body.style.backgroundColor = "blue";
});

yellow.addEventListener("click", function(e){
    body.style.backgroundColor = "yellow";
});
