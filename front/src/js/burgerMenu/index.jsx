const btn = document.getElementById('open-menu')
const close = document.getElementById('close-menu')
const navbar = document.querySelector('header .navbar')

if (close && btn && navbar) {
    btn.addEventListener('click', e => {
        navbar.classList.toggle('opened')
    })

    close.addEventListener('click', e => {
        navbar.classList.remove('opened')
    })

    navbar.addEventListener('click', e => {
        navbar.classList.remove('opened')
    })
}
