function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let icon = document.querySelector('.icon');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        icon.src = "imagens/menu_white_36dp (1).svg";
    } else {
        menuMobile.classList.add('open');
        icon.src = "imagens/close_white_36dp.svg";
    }
}


let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 10000)

function nextImage() {
    count++;
    if(count>7){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}