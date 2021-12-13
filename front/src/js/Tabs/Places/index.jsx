import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Places from './Places'

const container = document.getElementById('js-places')
const data = require('./data.json')

if (container) {
    ReactDOM.render(
        <AppContainer>
            <Places data={data} />
        </AppContainer>,
        container
    )
}
