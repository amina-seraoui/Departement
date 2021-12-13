import React from 'react'

const Tabs = ({ active, setActive, tabs }) => {
    return <ul className="tabs">
        {
            tabs.map((tab) => {
                return <li
                    key={tab.id}
                    className={active === tab.id ? 'active' : ''}
                    onClick={e => setActive(tab.id)}
                >
                    {tab.name}
                </li>
            })
        }
    </ul>
}

export default Tabs
