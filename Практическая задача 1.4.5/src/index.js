import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './components/App'

const section = document.getElementById('root')
const root = createRoot(section)
root.render(<App />)
