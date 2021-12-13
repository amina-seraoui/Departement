import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

const Item = ({ item }) => {
    const figure = useRef()

    useEffect(() => {
        gsap.from(figure.current, {
            opacity: 0,
            duration: 2
        })
        gsap.to(figure.current, {
            x: 0,
            duration: 3
        })
    }, [])

    return <figure className="market react-display" ref={figure}>
        <img src={item.picture} alt={item.name} />
        <figcaption className="text">
            <h3 className="market-name">{item.name}</h3>
            <p className="market-address">{item.address}</p>
            <p className="market-schedule">{item.schedule}</p>
        </figcaption>
    </figure>
}

export default Item
