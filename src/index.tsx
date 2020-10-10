import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import 'core-js/es6/map'
import 'core-js/es6/set'
import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { Routes } from '@/routes'
import '@/components/typography/font.css'
import '@/components/layout/body.css'
import store from '@/core/store'
import { Navigation } from './modules/navigation'
import { ErrorNotification } from './modules/error-notifications'
import 'normalize.css'

// HashRouter только потому, что это уходит на github pages
export const Root: React.FC = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <HashRouter>
          <Navigation />
          <ErrorNotification />
          <Routes />
        </HashRouter>
      </Provider>
    </React.StrictMode>
  )
}

render(<Root />, document.getElementById('root'))
