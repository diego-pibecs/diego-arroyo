let comesFrom = 0;
aboutMeBtn = document.getElementById("about-me-btn");
aboutMeBtn.addEventListener("click", aboutMeTransition);

currentlyReadingBookCover = document.getElementById("currently-reading-book-cover")
currentlyReadingBtn = document.getElementById("currently-reading");
currentlyReadingBtn.addEventListener("click", () => {
    currentlyReadingBookCover.classList.add("currently-reading-box-shadow");
    setTimeout(() => {
        currentlyReadingBookCover.classList.remove("currently-reading-box-shadow");
    }, 2000)
})

function aboutMeTransition() {
    let comesFromAbout = 0;

    let contactBtn = document.getElementById("contact-btn");
    contactBtn.removeEventListener("click", contactTransition);
    contactBtn.addEventListener("click", function () {
        contactTransition(comesFromAbout);
    });

    let navMenuIcon = document.getElementById("nav-menuicon");
    navMenuIcon.style.fill = "azure";

    const menuLinks = document.getElementsByClassName("nav-menu-link");
    for (let index = 0; index < menuLinks.length; index++) {
        const link = menuLinks[index];
        link.style.color = "black";
    }

    const menuLinksHover = document.querySelectorAll(".nav-menu-item");
    for (let index = 0; index < menuLinksHover.length; index++) {
        const linkHover = menuLinksHover[index];
        linkHover.style.backgroundColor = "white";
        linkHover.addEventListener("mouseover", () => {
            linkHover.style.backgroundColor = "#D1D1D1";
        })
        linkHover.addEventListener("mouseleave", () => {
            linkHover.style.backgroundColor = "#FFFFFF";
        })
    }

    aboutMeBtn.innerHTML = "inicio";
    let controllerAboutMe = 1;

    document.getElementById("main-wrapper").scrollIntoView({behavior: "smooth"})

    mainArticle = document.getElementById("main-article");
    mainArticle.style.display = "none";

    mainWrapper = document.getElementById("main-wrapper");
    mainWrapper.style.backgroundImage = "none"

    mainTitle = document.getElementById("main-title-sign");
    mainTitle.classList.add("change-title");

    mainSubtitle = document.getElementById("main-title-sub");
    mainSubtitle.classList.add("hide");

    const bodyTag = document.getElementsByTagName("body");
    for (let index = 0; index < bodyTag.length; index++) {
        const body = bodyTag[index];
        body.style.backgroundImage = "none";
        body.style.backgroundColor = "black";
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundSize = "cover";
        body.style.height = "100vh";
        body.style.overflow = "hidden";
    }

    mainWrapperSection = document.getElementById("main-wrapper-section");
    mainWrapperSection.classList.add("change-main-albums", "unclickable", "t");

    // Termina la primera animación
    mainWrapperSection.addEventListener("animationend", () => {
        setTimeout(() => {
            mainWrapperSection.classList.add("rotate180");

            // Termina la segunda animación
            mainWrapperSection.addEventListener("animationend", () => {
                mainWrapperSection.classList.add("animation-infinite");
            });

            setTimeout(() => {
                mainWrapperSectionHoverable = document.getElementsByClassName("main-wrapper-section-hoverable");
                for (let index = 0; index < mainWrapperSectionHoverable.length; index++) {
                    const hoverable = mainWrapperSectionHoverable[index];
                    hoverable.style.visibility = "hidden";    
                }

                arrows = document.getElementsByClassName("about-me-arrows");
                for (let index = 0; index < arrows.length; index++) {
                    const arrow = arrows[index];
                    arrow.style.opacity = "1";
                }

                textAboutMe = document.getElementsByClassName("text-about-me");
                const texto1 = textAboutMe[0];
                texto1.classList.add("show");
                // Termina la tercera animación
                texto1.addEventListener("animationend", () => {
                    const texto2 = textAboutMe[1];
                    texto2.classList.add("show");   
                    
                    texto2.addEventListener("animationend", () => {
                        const texto3 = textAboutMe[2];
                        texto3.classList.add("show");

                        texto3.addEventListener("animationend", () => {
                            const texto4 = textAboutMe[3];
                            texto4.classList.add("show");
                        });
                    });
                });
            }, 2000);
        }, 500);
    });

    theGlowPt2 = document.getElementById("theGlowPt2");
    theGlowPt2.classList.add("rotate-the-glow-pt2");

    okComputer = document.getElementById("okComputer");
    okComputer.classList.add("rotate-ok-computer");

    
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

    if (controllerAboutMe == 1) {
        aboutMeBtn.removeEventListener("click", aboutMeTransition);
        aboutMeBtn.addEventListener("click", () => {
            location.reload();
        });
    }

    comesFromAbout == 2;
}

let activeIndex = 0;
const sections = document.getElementsByClassName("about-me-section");
const sign = document.getElementById("main-wrapper-section-img-mine");

const handleRightClick = () => {
    const nextIndex = activeIndex + 1 <= sections.length - 1 ? activeIndex + 1 : 0;
    const currentSection = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextSection = document.querySelector(`[data-index="${nextIndex}"]`);

    if (activeIndex == 2) {
        sign.classList.remove('hideSign');
        sign.classList.add('showSign');
    } else if (activeIndex == 1 || activeIndex == 0) {
        sign.classList.remove('showSign');
        sign.classList.add('hideSign');
    }

    currentSection.dataset.status = "after";
    nextSection.dataset.status = "becoming-active-from-before";
    
    setTimeout(() => {
        nextSection.dataset.status = "active";
        activeIndex = nextIndex;
    })
}

const handleLeftClick = () => {
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : sections.length - 1;
    const currentSection = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextSection = document.querySelector(`[data-index="${nextIndex}"]`);

    if (activeIndex == 0 || activeIndex == 2) {
        sign.classList.remove('showSign');
        sign.classList.add('hideSign');
    } else if (activeIndex == 1) {
        sign.classList.remove('hideSign');
        sign.classList.add('showSign');
    }

    currentSection.dataset.status = "before";
    nextSection.dataset.status = "becoming-active-from-after";

    setTimeout(() => {
        nextSection.dataset.status = "active";
        activeIndex = nextIndex;
    });
}


// Para contact
let comesFromHome = 1;
contactBtn = document.getElementById("contact-btn");
contactBtn.addEventListener("click", function () {
    contactTransition(comesFromHome);
});

function contactTransition(comesFrom) {
    if (comesFrom == 0) {
        mainTitle = document.getElementById("main-title-sign");
        mainTitle.classList.remove("change-title");
        mainTitle.classList.remove("change-title-contact");
        mainTitle.classList.add("changing-from-about");

        let containers = document.querySelectorAll(".about-me-container");
        containers.forEach(container => {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        });

        signWhite = document.getElementById("firma-white");
        signWhite.classList.add("hideSign");
    }

    signBlack = document.getElementById("firma-black");
    signBlack.classList.remove('hide');

    let navMenuIcon = document.getElementById("nav-menuicon");
    navMenuIcon.removeEventListener('click', displayMenu);
    navMenuIcon.removeEventListener('click', transitionMenuIcon);

    navMenuIcon.setAttribute('id', 'new-menu-icon');
    let newMenuIcon = document.getElementById("new-menu-icon");
    newMenuIcon.style.fill = "black";
    newMenuIcon.firstElementChild.setAttribute("d", "M17.026 22.957c10.957-11.421-2.326-20.865-10.384-13.309l2.464 2.352h-9.106v-8.947l2.232 2.229c14.794-13.203 31.51 7.051 14.794 17.675z");
    newMenuIcon.addEventListener("click", () => {
        location.reload();
    });


    document.getElementById("main-wrapper").scrollIntoView({behavior: "smooth"})

    mainArticle = document.getElementById("main-article");
    mainArticle.style.display = "none";

    mainWrapper = document.getElementById("main-wrapper");
    mainWrapper.style.backgroundImage = "none"

    mainTitle = document.getElementById("main-title-sign");
    if (comesFrom != 0) {
        mainTitle.classList.add("change-title-contact");
    }

    mainSubtitle = document.getElementById("main-title-sub");
    mainSubtitle.classList.add("hide");

    const bodyTag = document.getElementsByTagName("body");
    for (let index = 0; index < bodyTag.length; index++) {
        const body = bodyTag[index];
        body.style.backgroundImage = "none";
        body.style.backgroundColor = "white";
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundSize = "cover";
        body.style.height = "100vh";
        body.style.overflow = "hidden";
    }

    mainWrapperSection = document.getElementById("main-wrapper-section");
    mainWrapperSection.classList.add("hide-smooth");

    contactText = document.getElementsByClassName("text-contact");
    for (let index = 0; index < contactText.length; index++) {
        const text = contactText[index];
        text.classList.add("show-contact");
    }

    contactTextContainer = document.getElementsByClassName("text-contact-container");
    for (let index = 0; index < contactTextContainer.length; index++) {
        const textContainer = contactTextContainer[index];
        textContainer.style.display = "flex";
    }
}