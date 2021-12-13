import gsap from 'gsap'

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.01
}

const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const classNames = Array.from(entry.target.classList)
            if (classNames.indexOf('animated') === -1) {
                gsap.from(entry.target, {
                    opacity: 0,
                    duration: 2
                })
                gsap.to(entry.target, {
                    x: 0,
                    duration: 3
                })
                entry.target.classList.add('animated')
            }
        }
    })
}

// eslint-disable-next-line
const observer = new IntersectionObserver(callback, options)

Array.from(document.getElementsByClassName('js-display')).forEach(e => {
    observer.observe(e)
})
