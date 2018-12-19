/* -----------------Loading Circle------------ */

let circle = document.getElementsById("loader");



let fade = setInterval(function () {
    if (circle.style.opacity > 0) {
        circle.style.opacity -= .1;
    }
    else {
        clearInterval(fade);
    }
}, 200)

window.addEventListener('click', fade);