// ------------------ ScrollReveal ---------------------
// h1 principal
    window.sr = ScrollReveal({ reset: true });

    // home
    sr.reveal('.home-content', {
        duration: 2000,
        delay: 50
    });
    sr.reveal('.home-image', {
        duration: 2000,
        origin: 'left',
        distance: '70px',
    })
    

    // quem-somos
    //sr.reveal('.quem-somos', {duration: 2000});
// ------------------ ScrollReveal ---------------------

// ------------------ Menu Responsivo ---------------------
let show = true;

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toogle")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;
})
// ------------------ Menu Responsivo ---------------------