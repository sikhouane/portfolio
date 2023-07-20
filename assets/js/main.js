/*==================== MENU SHOW Y HIDDEN ====================*/

// fix
const navMenu = document.getElementById('nav-menu'), navToggle = document.getElementById('nav-toggle'), navClose = document.getElementById('nav-close')

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-meny')
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-me')
    })
}


const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


//SKILLS
/*
const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
  const parentContent = this.parentNode;
  const isOpen = parentContent.classList.contains('skills__open');

  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].classList.remove('skills__open');
  }

  if (!isOpen) {
    parentContent.classList.add('skills__open');
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills);
});
*/

const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
  const parentContent = this.parentNode;
  parentContent.classList.toggle('skills__open');
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills);
});


// FORMATION

const tabs = document.querySelectorAll('[data-target]'), tabContents= document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('pro__active')
        })
        target.classList.add('pro__active')

        tabs.forEach(tab => {
            tab.classList.remove('pro__active')
        })

        tab.classList.add('pro__active')
    })
})

// MODAL STAGE

const modalViews = document.querySelectorAll('.stage__modal');
const modalBtns = document.querySelectorAll('.stage__button');
const modalCloses = document.querySelectorAll('.stage__modal-close');

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal');
};

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    });
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        });
    });
});

//MODAL PROJET

const modalViews2 = document.querySelectorAll('.projet__modal');
const modalBtns2 = document.querySelectorAll('.projet__button');
const modalCloses2 = document.querySelectorAll('.projet__modal-close');

let modal2 = function (modalClick2) {
    modalViews2[modalClick2].classList.add('active-modal');
};

modalBtns2.forEach((modalBtn2, i) => {
    modalBtn2.addEventListener('click', () => {
        modal2(i);
    });
});

modalCloses2.forEach((modalClose2) => {
    modalClose2.addEventListener('click', () => {
        modalViews2.forEach((modalView2) => {
            modalView2.classList.remove('active-modal2');
        });
    });
});

// PORTFOLIO 

let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
});


// dark light theme

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})