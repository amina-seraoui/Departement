import React, { useState } from 'react'
import Tabs from '../Tabs'
import Item from './Item'
import Panes from '../Panes'

const Markets = ({ data }) => {
    const [activeTab, setActiveTab] = useState('all')
    const tabs = [
        {
            'id': 'all',
            'name': 'Tout'
        },
        {
            'id': 'market',
            'name': 'Marchés'
        },
        {
            'id': 'fair',
            'name': 'Foires'
        }
    ]

    return <>
        <Tabs active={activeTab} setActive={setActiveTab} tabs={tabs}></Tabs>
        <Panes>
            {
                data.map((item, id) => {
                    if (activeTab === 'all') {
                        return <Item item={item} key={id}/>
                    }
                    else if (item.tabs.indexOf(activeTab) !== -1) {
                        return <Item item={item} key={id}/>
                    }
                })
            }
         </Panes>
    </>
}

export default Markets