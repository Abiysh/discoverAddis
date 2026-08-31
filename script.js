/* =========================================================
   DISCOVER ADDIS TOUR
   MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const mobileMenu = document.getElementById("mobileMenu");
    const mobileNav = document.getElementById("mobileNav");

    if (mobileMenu && mobileNav) {

        mobileMenu.addEventListener("click", () => {

            mobileNav.classList.toggle("active");

            const icon = mobileMenu.querySelector("i");

            if (mobileNav.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });


        /* Close mobile menu after clicking a link */

        const mobileLinks =
            mobileNav.querySelectorAll("a");

        mobileLinks.forEach(link => {

            link.addEventListener("click", () => {

                mobileNav.classList.remove("active");

                const icon =
                    mobileMenu.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            });

        });

    }



    /* =====================================================
       STICKY HEADER
    ===================================================== */

    const header =
        document.querySelector(".site-header");


    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 60) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }


    updateHeader();

    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );



    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    internalLinks.forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {

                return;

            }


            const target =
                document.querySelector(targetId);


            if (!target) return;


            event.preventDefault();


            const headerHeight =
                header
                    ? header.offsetHeight
                    : 0;


            const targetPosition =
                target.getBoundingClientRect().top
                +
                window.scrollY
                -
                headerHeight;


            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

        });

    });



    /* =====================================================
       SCROLL REVEAL ANIMATION
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".experience-card, " +
            ".benefit, " +
            ".destination-card, " +
            ".testimonial-card, " +
            ".experience-photo, " +
            ".experience-copy"
        );


    revealElements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.7s ease, " +
            "transform 0.7s ease";

    });


    const revealObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";


                    revealObserver.unobserve(
                        entry.target
                    );

                });

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });



    /* =====================================================
       TOUR CARD STAGGER
    ===================================================== */

    const tourCards =
        document.querySelectorAll(
            ".experience-card"
        );


    tourCards.forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 80}ms`;

    });



    /* =====================================================
       DESTINATION CARD HOVER
    ===================================================== */

    const destinationCards =
        document.querySelectorAll(
            ".destination-card"
        );


    destinationCards.forEach(card => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.classList.add("hovered");

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.classList.remove("hovered");

            }
        );

    });



    /* =====================================================
       BOOKING DATE
    ===================================================== */

    const dateInput =
        document.querySelector(
            '.booking-field input[type="date"]'
        );


    if (dateInput) {

        const today =
            new Date().toISOString().split("T")[0];

        dateInput.setAttribute(
            "min",
            today
        );

    }



    /* =====================================================
       BOOKING FORM VALIDATION
    ===================================================== */

    const bookingButton =
        document.querySelector(
            ".booking-submit"
        );


    if (bookingButton) {

        bookingButton.addEventListener(
            "click",
            event => {

                const destination =
                    document.querySelector(
                        '.booking-field select'
                    );


                const date =
                    document.querySelector(
                        '.booking-field input[type="date"]'
                    );


                if (
                    date &&
                    date.value === ""
                ) {

                    event.preventDefault();

                    date.focus();

                    alert(
                        "Please select your travel date."
                    );

                }

            }
        );

    }



    /* =====================================================
       HERO PARALLAX
    ===================================================== */

    const heroBackground =
        document.querySelector(
            ".hero-background"
        );


    if (
        heroBackground &&
        window.innerWidth > 768
    ) {

        window.addEventListener(
            "scroll",
            () => {

                const scroll =
                    window.scrollY;


                if (scroll < window.innerHeight) {

                    heroBackground.style.transform =
                        `translateY(${scroll * 0.15}px) scale(1.02)`;

                }

            },
            { passive: true }
        );

    }



    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const yearElements =
        document.querySelectorAll(
            ".current-year"
        );


    yearElements.forEach(element => {

        element.textContent =
            new Date().getFullYear();

    });



    /* =====================================================
       ESC KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                if (
                    mobileNav &&
                    mobileNav.classList.contains("active")
                ) {

                    mobileNav.classList.remove(
                        "active"
                    );


                    const icon =
                        mobileMenu.querySelector("i");


                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );

                }

            }

        }
    );

});