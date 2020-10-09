import { setTotalPrice, addToCart, removeFromCart, incrementCartItem, decrementCartItem } from './cart'
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_CART_ITEM,
  DECREMENT_CART_ITEM,
  SET_TOTAL_PRICE,
} from '../constants/cart'
import expect from 'expect'

describe('catalog actions', () => {
  it('fetchCatalog', () => {
    expect(setTotalPrice()).toEqual({
      type: SET_TOTAL_PRICE,
    })
  })

  it('addToCart', () => {
    const expectAction = {
      type: ADD_TO_CART,
      payload: {
        id: 0,
        title: 'title',
        price: 10,
      },
    }
    expect(addToCart(expectAction.payload)).toEqual(expectAction)
  })

  it('removeFromCart', () => {
    const expectAction = {
      type: REMOVE_FROM_CART,
      payload: 0,
    }
    expect(removeFromCart(0)).toEqual(expectAction)
  })

  it('incrementCartItem', () => {
    const expectAction = {
      type: INCREMENT_CART_ITEM,
      payload: 0,
    }
    expect(incrementCartItem(0)).toEqual(expectAction)
  })

  it('decrementCartItem', () => {
    const expectAction = {
      type: DECREMENT_CART_ITEM,
      payload: 0,
    }
    expect(decrementCartItem(0)).toEqual(expectAction)
  })
})
