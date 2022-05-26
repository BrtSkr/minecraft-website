const closeOpenNav = (nav, button)=>{
    var isOpen = false;
    button.addEventListener("click", ()=>{
        if (isOpen) {
            nav.style.transform = "translateX(-20rem)";
            isOpen = !isOpen;
            console.log(isOpen);
        } else {
            nav.style.transform = "translateX(-1.5rem)";
            isOpen = !isOpen;
            console.log(isOpen);
        }
    });
};
closeOpenNav(document.querySelector(".nav-subholder"), document.querySelector(".nav-closeOpen-button"));

//# sourceMappingURL=index.aa69868b.js.map
