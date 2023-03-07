
// Menú desplegable
let controller = 0;
let menuIcon = document.getElementById('nav-menuicon');
menuIcon.addEventListener('click', displayMenu);
menuIcon.addEventListener('click', transitionMenuIcon);

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
//


// Imágenes y sus descripciones
let imgClickable = document.getElementsByClassName("img-clickable");
let displayImgContentControllers = new Array(imgClickable.length).fill(0);

for (let index = 0; index < imgClickable.length; index++) {
    imgClickable[index].addEventListener('click', function() {
        const imgContent = this.nextElementSibling.nextElementSibling;
        let displayImgContentController = 0;
        if (displayImgContentController === 0){
            imgContent.style.display = "flex";
            displayImgContentController = 1;
            document.body.style.overflow = "hidden";
        } else {
            imgContent.style.display = "none";
            displayImgContentController = 0;
            document.body.style.overflow = "visible";
        }
    });
}

let imgCloseButton = document.getElementsByClassName("img-hidden-collapse");
for (let index = 0; index < imgCloseButton.length; index++) {
    imgCloseButton[index].addEventListener('click', hideImgContent);
}

function hideImgContent() {
    const imgContent = document.getElementsByClassName('div-img-hidden-clickable');
    for (let index = 0; index < imgContent.length; index++) {
        const element = imgContent[index];
        element.style.display = "none";
    }
    document.body.style.overflow = "visible";
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        hideImgContent();
    }
});
//


// Álbumes aleatoriamente cada que se actualiza la página
const sectionWrapper = document.getElementById("section-wrapper");
const childrenArray = Array.from(sectionWrapper.childNodes);

childrenArray.sort(function() {
  return 0.5 - Math.random();
});

for (let i = 0; i < childrenArray.length; i++) {
  sectionWrapper.appendChild(childrenArray[i]);
}
//
