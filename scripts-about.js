
aboutMeBtn = document.getElementById("about-me-btn");
aboutMeBtn.addEventListener("click", aboutMeTransition);


function aboutMeTransition() {
    document.getElementById("main-wrapper").scrollIntoView({behavior: "smooth"})

    mainArticle = document.getElementById("main-article");
    mainArticle.style.display = "none";

    mainWrapper = document.getElementById("main-wrapper");
    mainWrapper.style.backgroundImage = "none"

    mainTitle = document.getElementById("main-title-sign");
    mainTitle.classList.add("change-title");

    mainSubtitle = document.getElementById("main-title-sub");
    mainSubtitle.classList.add("hide");

    bodyTag = document.getElementsByTagName("body");
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

                            texto4.addEventListener("animationend", () => {
                                const texto5 = textAboutMe[4];
                                texto5.classList.add("show");
                            });
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
}
