console.log('I was imported')

/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global variables
 *    
 */


let list = document.querySelector('#navbar__list');
let sect4 = document.createElement("section");
sect4.setAttribute("id", "section4");
sect4.setAttribute("data-nav", "Section 4");
document.querySelector("main").appendChild(sect4);

sect4 = document.createElement("div");
sect4.setAttribute("class", "landing__container");
document.querySelector("#section4").appendChild(sect4);

sect4 = document.createElement("h2")
sect4.innerText = "Section 4";
document.querySelector("#section4").querySelector("div").appendChild(sect4);

sect4 = document.createElement("p");
sect4.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.";
document.querySelector("#section4").querySelector("div").appendChild(sect4);

sect4 = document.createElement("p");
sect4.innerText = "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.";
document.querySelector("#section4").querySelector("div").appendChild(sect4);

let section = [];


for (let i of document.getElementsByTagName("section")) {
    section.push(i.getAttribute("data-nav"));
}

/*i did the loop so the user or other devs can add other sections without breaking the feature */

/**
 * End Global variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
for (let i of section) {
    li = document.createElement("li");
    li.appendChild(document.createTextNode(i));
    list.appendChild(li);
}
document.querySelector(".navbar__menu").style.cssText = 'transition: all 0.4s ease;  font-size : 3 vw ; padding: 20px ';

document.querySelector("#navbar__list").style.cssText = 'display: flex ;  justify-content : space-evenly';
document.addEventListener("scroll", function() {

    // Add class 'active' to section when near top of viewport
    if (scrollY > 50) {
        document.querySelector(".navbar__menu").classList.add("active");


    } else {
        document.querySelector(".navbar__menu").classList.remove("active");

    }
});

// Scroll to anchor ID using scrollTO event
const sectionssList = document.querySelectorAll("li");
for (let i of sectionssList) {
    i.addEventListener("pointerover", function() {
        i.style.cssText = 'color: green;cursor: pointer;'
        i.addEventListener("pointerleave", function() {
            i.style.cssText = 'color:none';
        })
        /*i made a nested event listner so the nested one will cancel it's parent only if it happens and it will not trigger if the parent did not did not occur in the first place*/

    });
}
/* here i made the scroll to function */
sectionssList[0].addEventListener("click", function() {
    document.querySelector("#section1").scrollIntoView({
        behavior: "smooth"
    });

})

sectionssList[1].addEventListener("click", function() {
    document.querySelector("#section2").scrollIntoView({
        behavior: "smooth"
    });

})

sectionssList[2].addEventListener("click", function() {
    document.querySelector("#section3").scrollIntoView({
        behavior: "smooth"
    });

})
sectionssList[3].addEventListener("click", function() {
    document.querySelector("#section4").scrollIntoView({
        behavior: "smooth"
    })
})

let sections = document.getElementsByTagName("section")
document.addEventListener("scroll", function() {
    let S = 0;
    for (let i of sections) {
        if (i.getBoundingClientRect().top < 120 && 120 < i.getBoundingClientRect().bottom) {
            sectionssList[Array.from(sections).indexOf(i)].classList.add('activesection');
            i.classList.add("your-active-class");
        } else {
            sectionssList[Array.from(sections).indexOf(i)].classList.remove('activesection');
            i.classList.remove("your-active-class");
        }
        S += 1
    }
});

/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active
