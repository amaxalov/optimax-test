import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

/* eslint-disable @typescript-eslint/no-explicit-any */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose
/* eslint-enable */

const enhancer = applyMiddleware(...[thunk])
const store = createStore(rootReducer, composeEnhancers(enhancer))

export default store
