const iconToggle = document.querySelector('.toggle_icon');
const navbarMenu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu-link');
const iconClose = document.querySelector('.close_icon');

iconToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

iconClose.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
});

menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
    });
});

function scrollHeader(){
    const header = document.getElementById('header');
    this.scrollY >= 20 ? header.classList.add('active') : header.classList.remove('active');
}

window.addEventListener('scroll', scrollHeader);

const typed = document.querySelector('.typed');

if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.resume_tabs ul li a');
    const contents = document.querySelectorAll('.resume_content .page');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', (event) => {
            event.preventDefault();
            tabs.forEach(t => t.classList.remove('current'));
            tab.classList.add('current');
            contents.forEach(c => c.style.display = 'none');
            contents[index].style.display = 'block';
        });
    });

    // Initially show the first tab content
    contents[0].style.display = 'block';
});

const sections = document.querySelectorAll('section [id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;

        let sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);

const pages = document.querySelectorAll('.page');
const resume = document.querySelector('.resume');

function resumeActive() {
    const scrollY = window.pageYOffset;

    pages.forEach(page => {
        const sectionHeight = page.offsetHeight;
        const sectionTop = page.offsetTop - 120;

        let sectionId = page.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.resume_tabs a[href*=' + sectionId + ']').classList.add('current');
        } else {
            document.querySelector('.resume_tabs a[href*=' + sectionId + ']').classList.remove('current');
        }
    })
}

window.addEventListener('scroll', resumeActive);

// portfolio
let filterItems = document.querySelectorAll('.portfolio_filters li');

function activePortfolio() {
    filterItems.forEach(e1 => {
        e1.classList.remove('filter-active');
        this.classList.add('filter-active');
    })
}

filterItems.forEach(e1 => {
    e1.addEventListener('click', activePortfolio);
})

// mixitup filter portfolio
let mixerPortfolio = mixitup('.portfolio_wrap-container', {
    selectors: {
        target: '.portfolio_item'
    },
    animation: {
        duration: 300
    }
});

let swiper = new Swiper(".testimonial_container", {
    effect: 'slide',
    loop: true,
    slidesPerView: 1,
    grabCursor: true,
    spaceBetween: 100,
    breakpoints: {
        768: {
            slidesPerView: 2,
        }
    }
});

// services modal
let modalBtns = document.querySelectorAll('.services_button'),
    modalViews = document.querySelectorAll(".services_modal"),
    modalClose = document.querySelectorAll('.modal_close-icon');

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    });
})

modalClose.forEach(closeIcon => {
    closeIcon.addEventListener('click', () => {
        modalViews.forEach(modalView => {
            modalView.classList.remove('active-modal');
        });
    });
});
