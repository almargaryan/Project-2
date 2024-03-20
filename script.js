function f(i){
    const links = document.querySelectorAll('.link');
    links.forEach((link, index) => {
        if (index === i) {
            link.classList.add('clicked');
        } else {
            link.classList.remove('clicked');
        }
    });
}

function home(){
    let all = document.getElementById("all")
    all.style.transform="translateX(0)"
    all.style.transition="0.5s"
}
function about(){
    let all = document.getElementById("all")
    all.style.transform="translateX(-100%)"
    all.style.transition="0.5s"
}
function entries(){
    let all = document.getElementById("all")
    all.style.transform="translateX(-200%)"
    all.style.transition="0.5s"
}
function work(){
    let all = document.getElementById("all")
    all.style.transform="translateX(-300%)"
    all.style.transition="0.5s"
}
function contact(){
    let all = document.getElementById("all")
    all.style.transform="translateX(-400%)"
    all.style.transition="0.5s"
}