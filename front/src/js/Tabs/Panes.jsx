import React, { useState, useEffect } from 'react'

const Panes = ({ children }) => {
    const [fade, setFade] = useState(false)

    useEffect(() => {
        setFade(false)
        setTimeout(() => setFade(true), 100)
    }, [children]);

    return <div className={'pane' + (fade ? ' visible' : '') }>
        { children }
    </div>
}

export default Panes