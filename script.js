// ==========================
// Mobile Menu
// ==========================

const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector("nav");

menu.onclick = () => {
    navbar.classList.toggle("active");

    if(menu.classList.contains("fa-bars")){
        menu.classList.remove("fa-bars");
        menu.classList.add("fa-xmark");
    }else{
        menu.classList.remove("fa-xmark");
        menu.classList.add("fa-bars");
    }
};

// ==========================
// Close Menu on Link Click
// ==========================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click",()=>{

        navbar.classList.remove("active");

        menu.classList.remove("fa-xmark");
        menu.classList.add("fa-bars");

    });

});

// ==========================
// Sticky Header
// ==========================

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    header.classList.toggle("sticky",window.scrollY>100);

});

// ==========================
// Active Navigation
// ==========================

let sections=document.querySelectorAll("section");
let navLinks=document.querySelectorAll("header nav a");

window.onscroll=()=>{

    sections.forEach(sec=>{

        let top=window.scrollY;

        let offset=sec.offsetTop-150;

        let height=sec.offsetHeight;

        let id=sec.getAttribute("id");

        if(top>=offset && top<offset+height){

            navLinks.forEach(links=>{

                links.classList.remove("active");

                document.querySelector("header nav a[href*="+id+"]").classList.add("active");

            });

        }

    });

};

// ==========================
// Scroll Reveal Animation
// ==========================

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

const hiddenElements=document.querySelectorAll(
".project-card,.skill-card,.education-card,.timeline-item,.about-container,.contact-container"
);

hiddenElements.forEach(el=>observer.observe(el));

// ==========================
// Scroll To Top Button
// ==========================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.classList.add("show-btn");

    }else{

        topBtn.classList.remove("show-btn");

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// ==========================
// Simple Typing Effect
// ==========================

const text=[
"Frontend Developer",
"Python Developer",
"Web Developer"
];

let count=0;
let index=0;
let currentText="";
let letter="";

(function type(){

    if(count===text.length){

        count=0;

    }

    currentText=text[count];

    letter=currentText.slice(0,++index);

    const typing=document.querySelector(".home-content h2");

    if(typing){

        typing.textContent=letter;

    }

    if(letter.length===currentText.length){

        count++;

        index=0;

        setTimeout(type,1200);

    }else{

        setTimeout(type,120);

    }

})();