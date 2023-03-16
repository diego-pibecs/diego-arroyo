
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

    mainWrapperSection.addEventListener("animationend", () => {
        setTimeout(() => {
            mainWrapperSection.classList.add("rotate180");
            mainWrapperSection.addEventListener("animationend", () => {
                mainWrapperSection.classList.add("animation-infinite");
            }); 
        }, 500);
        
    });    

    theGlowPt2 = document.getElementById("theGlowPt2");
    theGlowPt2.classList.add("rotate-the-glow-pt2");

    okComputer = document.getElementById("okComputer");
    okComputer.classList.add("rotate-ok-computer");

}
