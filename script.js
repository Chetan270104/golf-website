var crsr = document.querySelector("#cursor");
var crsrBlur = document.querySelector("#crsr-blur");
var h4Nav = document.querySelectorAll(".nav h4");
var footerRows = document.querySelectorAll(
    "#footer .row1 img, #footer .row1 .social-icons, #footer .row2 h1, #footer .row3 h1"
);


gsap.registerPlugin(ScrollTrigger);

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length
            ? scroll.scrollTo(value, 0, 0)
            : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

scroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.refresh();



let mouseX = 0;
let mouseY = 0;

/* Cursor position */
let curX = 0;
let curY = 0;

/* Blur position */
let blurX = 0;
let blurY = 0;

/* Track mouse */
document.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

/* Smooth animation loop */
function animateCursor() {

    // Cursor follows faster
    curX += (mouseX - curX) * 0.2;
    curY += (mouseY - curY) * 0.2;

    // Blur follows slower
    blurX += (mouseX - blurX) * 0.08;
    blurY += (mouseY - blurY) * 0.08;

    crsr.style.left = curX - 10 + "px";
    crsr.style.top = curY - 10 + "px";

    crsrBlur.style.left = blurX - 150 + "px";
    crsrBlur.style.top = blurY - 150 + "px";

    requestAnimationFrame(animateCursor);
}

animateCursor();



footerRows.forEach(function (elem) {

    elem.addEventListener("mouseenter", function () {
        crsr.style.transform = "scale(3)";
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
        crsr.style.cursor = "pointer",
            elem.style.color = "#fff"
    });

    elem.addEventListener("mouseleave", function () {
        crsr.style.transform = "scale(1)";
        crsr.style.border = "1px solid #95C115";
        crsr.style.backgroundColor = "#95C115";
        elem.style.color = "black"

    });

});


var footer = document.querySelector("#footer");

footer.addEventListener("mouseenter", function () {
    crsrBlur.style.opacity = 0;
});

footer.addEventListener("mouseleave", function () {
    crsrBlur.style.opacity = 1;
});

// document.addEventListener("mousemove", function (dets) {
//     crsr.style.left = dets.x - 10 + "px",
//         crsr.style.top = dets.y - 10 + "px"
//     crsrBlur.style.left = dets.x - 150 + "px",
//         crsrBlur.style.top = dets.y - 150 + "px"
// })

h4Nav.forEach(function (elem) {

    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 3,
            crsr.style.border = "1px solid #fff",
            crsr.style.backgroundColor = "transparent",
            elem.style.color = "#95c115"
        elem.style.transform = "scale(1.1)"

    })
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1,
            crsr.style.border = "#95C115",
            crsr.style.backgroundColor = "#95C115"
        elem.style.color = "#fff"
        elem.style.transform = "scale(1)"
    })

})

gsap.to('header', {
    backgroundColor: "black",
    duration: 0.5,
    height: "7rem",
    scrollTrigger: {
        trigger: "header",
        scroller: "#main",
        markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 2
    }
})

gsap.to('#main', {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "#main",
        markers: true,
        start: "top -30%",
        end: "top -80%",
        scrub: 2
    }
})

gsap.from(".about-us img, .about-us-in", {
    y: 30,
    opacity: 0,
    duration: 0.1,
    stagger: 0.1,    //elements come one by one
    scrollTrigger: {
        trigger: ".about-us",
        scroller: "#main",
        markers: true,
        start: "top 80%",
        end: "top 75%",
        scrub: 2
    }
})
gsap.registerPlugin(ScrollTrigger);

gsap.from(".cards-container", {
    y: 50,
    scale: 1,
    opacity: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".cards-container",
        scroller: "#main",
        start: "top 70%",
        end: "top 40%",
        scrub: 2,
        markers: true
    }
});


document.querySelectorAll(".cards").forEach(card => {

    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;   // mouse X inside card
        const y = e.clientY - rect.top;    // mouse Y inside card

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = (x - centerX) / 40;   // left-right
        const rotateX = (y - centerY) / 40;  // up-down (negative = opposite)

        card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0deg) rotateY(0deg)";
    });

});

gsap.to(".info .colon1", {
    x: 20,
    y: 20,
    scrollTrigger: {
        trigger: ".colon1",
        scroller: "#main",
        start: "top 70%",
        end: "top 50%",
        scrub: 2,
        markers: true
    }
});

gsap.to(".info .colon2", {
    x: -20,
    y: -20,
    duration: 0.2,
    scrollTrigger: {
        trigger: ".colon1",
        scroller: "#main",
        start: "top 70%",
        end: "top 30%",
        markers: true,
        scrub: 3

    }
})

