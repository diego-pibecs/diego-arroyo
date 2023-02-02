
let controller = 0;

let menuIcon = document.getElementById('nav-menuicon');
menuIcon.addEventListener('click', displayMenu);
menuIcon.addEventListener('click', transitionMenuIcon);

/* Estudien muy bien estas funciones, para que se comprenda el movimiento del ícono y del menú. */

/* Si controller vale 0, entonces el menú se moverá a su posición original.
Si el controlador vale 1, el menú se moverá hacia abajo. */

function displayMenu() {
    switch (controller) {
        case 0: {
            let menu = document.getElementById("nav-menu");
            menu.style.visibility = "visible";
            menu.style.opacity = "1";
            menu.style.transform = "translateY(0px)";
            menu.style.transitionDuration = "1s";
            controller++;
        }   break;
        case 1: {
            let menu = document.getElementById("nav-menu");
            menu.style.visibility = "hidden";
            menu.style.opacity = "0";
            menu.style.transform = "translateY(40px)";
            menu.style.transitionDuration = "0.1s";
            controller--;
            transitionMenuIcon();
        }
    }
}

/* Si controller vale 0, entonces el ícono del menú se moverá a su posición original.
Si el controlador vale 1, el ícono del menú se moverá hacia abajo. */

function transitionMenuIcon() {
    switch (controller) {
        case 0: {
            menuIcon.style.transform = "translate(0px, 0px)";
            menuIcon.style.transitionDuration = "0.8s";
        }   break;
        case 1: {
            menuIcon.style.transform = "translate(-45px, 0px)";
            menuIcon.style.transitionDuration = "0.4s";
        }   break;
    }
}

let imgClickable = document.getElementsByClassName("img-clickable")
for (let index = 0; index < imgClickable.length; index++) {
    imgClickable[index].addEventListener('click', displayImgContent);
}


let displayImgContentController = 0;

let displayImgContentCollapser = document.getElementsByClassName("img-hidden-collapse")
for (let index = 0; index < displayImgContentCollapser.length; index++) {
    displayImgContentCollapser[index].addEventListener('click', displayImgContent);
}

function displayImgContent() {
    const imgContent = document.getElementsByClassName('div-img-hidden-clickable');
    for (let index = 0; index < imgContent.length; index++) {
        const element = imgContent[index];
        if (displayImgContentController == 0){
            element.style.display = "flex";
            displayImgContentController = 1;
            document.body.style.overflow = "hidden";
        } else {
            element.style.display = "none";
            displayImgContentController = 0;
            document.body.style.overflow = "visible";
        }
    }
}

/*  No le hagan mucho caso a esto, estaba probando cosas.

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) { document.querySelector('body').style.opacity = 1 });
*/

// window.onscroll = function() {myFunction()};

// function myFunction() {
//   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//     document.getElementById("section-wrapper").className = "slideUp";
//   }
// }
