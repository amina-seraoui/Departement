import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Item = ({ item }) => {
    const figure = useRef()

    useEffect(() => {
        gsap.from(figure.current, {
            scrollTrigger: {
                trigger: figure.current
            },
            opacity: 0,
            duration: 2
        })
        gsap.to(figure.current, {
            scrollTrigger: {
                trigger: figure.current
            },
            x: 0,
            duration: 3
        })
    }, [])

    return <figure className="place react-display" ref={figure}>
        <a href="#"><img src={item.picture} alt={item.name} /></a>
        <figcaption>{item.name}</figcaption>
    </figure>
}

export default Item