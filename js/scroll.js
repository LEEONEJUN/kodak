$(document).ready(function() {
    gsap.to(".white img.product", {
        scrollTrigger : {
            trigger : ".white img.product",
            start : "top 50%",
            end : "top top",
            scrub: true,
        },
        x : "-50%",
        y : "-29%",
    })

    gsap.to(".white .rail", {
        scrollTrigger : {
            trigger : ".white .rail",
            start : "top bottom",
            end : "top top",
            scrub: true,
        },
        x : "-50%",
        y : "-50%"
    })

    gsap.to(".yellow .product", {
        scrollTrigger : {
            trigger : ".yellow .product",
            start : "top 50%",
            end : "top top",
            scrub: true,
        },
        x : "-50%",
        y : "-29%"
    })

    gsap.to(".yellow .rail", {
        scrollTrigger : {
            trigger : ".yellow .rail",
            start : "top bottom",
            end : "top top",
            scrub: true,
        },
        x : "-50%",
        y : "-50%"
    })

    gsap.utils.toArray(".theme").forEach(elem => {
        gsap.to(elem, {
            scrollTrigger : {
                trigger: elem,
                start : "top 80%",
                end : "bottom top",
                toggleClass: {targets: elem.childNodes[1], className: "active"}
            }
        })
    })

    gsap.utils.toArray(".theme .txt_box").forEach(elem => {
        gsap.to(elem, {
            scrollTrigger : {
                trigger: elem,
                start : "top 80%",
                end : "bottom top",
                scrub: 0.5
            }
            ,y : -180
        })
    })

    gsap.utils.toArray("span.circle").forEach(elem => {
        gsap.to(elem, {
            scrollTrigger : {
                trigger: elem,
                start : "top 80%",
                end : "bottom top",
                scrub: 1
            }
            ,y : -150
        })
    });

    gsap.to(".main_font span", {
        scrollTrigger : {
            trigger : ".main_font span",
            start : "top 50%",
            end : "bottom end",
            markers: true,
            scrub: 0.2
        },
        y : -600
    })
    
})