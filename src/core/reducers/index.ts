import { combineReducers } from 'redux'
import { reducer as catalog } from './catalog'
import { reducer as cart } from './Cart'

const rootReducer = combineReducers({ catalog, cart })

export default rootReducer
