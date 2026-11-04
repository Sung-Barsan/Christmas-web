/*=============== MOBILE MENU ===============*/
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')
const navLinks = document.querySelectorAll('.nav__link')

const setMenuOpen = (open) => {
    navMenu.classList.toggle('show-menu', open)
    navToggle.setAttribute('aria-expanded', String(open))
}

navToggle.addEventListener('click', () => {
    setMenuOpen(true)
    navLinks[0].focus()
})

const closeMenu = () => {
    setMenuOpen(false)
    navToggle.focus()
}

navClose.addEventListener('click', closeMenu)
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navMenu.classList.contains('show-menu') &&
        navToggle.offsetWidth > 0) {
        closeMenu()
    }
})

navLinks.forEach(link => link.addEventListener('click', () => {
    if (navMenu.classList.contains('show-menu') && navToggle.offsetWidth > 0) {
        closeMenu()
    }
}))

/*=============== UPDATE SCROLL STATE ===============*/
const header = document.getElementById('header')
const scrollUp = document.getElementById('scroll-up')
const sections = Array.from(document.querySelectorAll('section[id]'))

const updateScrollState = () => {
    const scrollY = window.scrollY
    header.classList.toggle('bg-header', scrollY >= 50)
    scrollUp.classList.toggle('show-scroll', scrollY >= 350)

    const atBottom = Math.ceil(scrollY + window.innerHeight) >=
        document.documentElement.scrollHeight
    const sectionPosition = atBottom && scrollY > 0
        ? document.documentElement.scrollHeight
        : scrollY + header.offsetHeight
    let currentSection = sections[0]
    for (const section of sections) {
        if (section.offsetTop > sectionPosition) break
        currentSection = section
    }

    navLinks.forEach(link => {
        const active = link.hash === '#' + currentSection.id
        link.classList.toggle('active-link', active)
        if (active) {
            link.setAttribute('aria-current', 'location')
        } else {
            link.removeAttribute('aria-current')
        }
    })
}

window.addEventListener('scroll', updateScrollState)
window.addEventListener('resize', updateScrollState)
window.addEventListener('pageshow', updateScrollState)
updateScrollState()

/*=============== PARALLAX ===============*/
let parallax = new Rellax('.parallax');

/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__village', 1.2, {opacity: 0, y: 100, delay: .1})
gsap.from('.home__pine', 1.2, {opacity: 0, y: 150, delay: .3})
gsap.from('.home__mountain-2', 1.2, {opacity: 0, x: 150, delay: .5})
gsap.from('.home__mountain-3', 1.2, {opacity: 0, x: -150, delay: .6})
gsap.from('.home__mountain-1', 1.2, {opacity: 0, y: 250, delay: .7})
gsap.from('.home__moon', 1.2, {opacity: 0, y: 200, delay: .8})
gsap.from('.home__trineo', 1.2, {opacity: 0, x: -200, delay: .8})
gsap.from('.home__title', 1.2, {opacity: 0, y: -60, delay: 1})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal(`.about__data, .celebrate__img`, {origin: 'right'})
sr.reveal(`.about__img, .celebrate__data`, {origin: 'left'})
sr.reveal(`.send__card`, {interval: 100})
sr.reveal(`.footer`)