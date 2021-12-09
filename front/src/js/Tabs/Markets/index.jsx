import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Markets from './Markets'

const container = document.getElementById('js-markets')
const data = require('./data.json')

if (container) {
    ReactDOM.render(
        <AppContainer>
            <Markets data={data} />
        </AppContainer>,
        container
    )
}