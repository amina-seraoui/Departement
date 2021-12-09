import gsap from 'gsap'

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.01
}

let callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let classNames = Array.from(entry.target.classList)
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

let observer = new IntersectionObserver(callback, options)

Array.from(document.getElementsByClassName('js-display')).forEach(e => {
    observer.observe(e)
})

