import { combineReducers } from 'redux'
import { reducer as catalog } from './catalog'
import { reducer as cart } from './cart'
import { reducer as errorReducer } from './error'

const rootReducer = combineReducers({ catalog, cart, errorReducer })

export default rootReducer
