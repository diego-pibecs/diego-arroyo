contactBtn = document.getElementById("contact-btn");
contactBtn.addEventListener("click", contactTransition);

function contactTransition() {
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

    // aboutMeThings = document.getElementsByClassName("about-me-container");
    // for (let index = 0; index < aboutMeThings.length; index++) {
    //     const aboutMe = aboutMeThings[index];
    //     aboutMe.style.visibility = "hidden";
    //     aboutMe.style.opacity = "0";
    //     aboutMe.style.display = "none"; 
    // }

    document.getElementById("main-wrapper").scrollIntoView({behavior: "smooth"})

    mainArticle = document.getElementById("main-article");
    mainArticle.style.display = "none";

    mainWrapper = document.getElementById("main-wrapper");
    mainWrapper.style.backgroundImage = "none"

    mainTitle = document.getElementById("main-title-sign");
    mainTitle.classList.add("change-title-contact");

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