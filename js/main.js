// To change the appearance of the phone

let img = document.querySelector(".img");
function phone(x) {
    img.src = x;
}

// To change the background shape
let container = document.querySelector(".container")
function bg(bg) {
    container.style.backgroundImage = bg;
};

// scroll ..
let up = document.getElementById('up');
window.onscroll = function(){
    if(scrollY >= 20){
        up.style.display = "block"
    }else{
        up.style.display = "none"
    }
}
up.onclick = function(){
    scroll({
        top:0,
        left:0,
        behavior:'smooth'
    })
};
