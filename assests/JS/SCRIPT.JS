// show hidden menu

// id's of nav attributes
const navMenu = document.getElementById('nav-menu'),  // 1st div -nav-menu id   (div consists of icons)
    navToggle = document.getElementById('nav-toggle'),   //  2nd div nav-toggle id   (icon apps)
    navClose = document.getElementById('nav-close');    // 1st div i tag close button id     (X)


    // menu show
    // variable if constant exists
if (navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}
    
// menu hidden
// validate if constant exists

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

// remove menu ,mobile
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


// open skills bar on click along with arrow
const skillsOpen = document.getElementById('skills-open');

const skillList = document.getElementById('skills-list');

const skillArrow = document.getElementById('skills-arrow');

// console.log(skillList, " ", skillsOpen);
    
skillsOpen.addEventListener('click', function (e) {
    
    if (skillList.clientHeight == 0) {
        skillList.style.height = "auto";
        // console.log("opened");
        skillArrow.style.transform = 'rotate(-180deg)';
        // skillList.style.transition = 'all 2s';
        
    }
    else {
        skillList.style.height = '0px';
        skillList.style.overflow = 'hidden';
        skillArrow.style.transform = 'rotate(0deg)';
        skillList.style.transition = 'all 2s';
    }

});



// qualification Tabs

const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

// console.log("tabs",tabs);
// console.log("tabContents", tabContents);

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)
        // console.log("target",target);
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active');
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })

        tab.classList.add('qualification__active')
    })
})

// services Modal

const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalViews) => {
            modalViews.classList.remove('active-modal')
        })
    })
})

// portfolio swiper
    // added script code in html file


// scroll sections active links

const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        // console.log(sectionId);

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive);

// change background header

function scrollHeader() {
    const nav = document.getElementById('header');
    // wwhen scroll is greater than 200 viewport height add the scrollbar clas to header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

// SHOW SCROLL TOP

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll
    if (this.scrollY >= 560) {
        scrollUp.classList.add('show-scroll');
    }
    else {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp);

//============================ dark light theme

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// previously seclected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// we obtain the current theme the interface has by validatng the dark theme

const getCurrentTheme = function getCurrentTheme() {
    return document.body.classList.contains(darkTheme) ? 'dark' : 'light';
}
const getCurrentIcon = function getCurrentIcon() {
    return document.body.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';
}


// we vlidate if the user previously choose a topic

if (selectedTheme) {
    // if the validation is fulfilled we ask he issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate /deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // add or remove the dark/icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // we save the theme and the current icon that the user choose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
