import { ICartActions } from '../types/cart'
import { reducer, defaultState } from './cart'
import {
  SET_TOTAL_PRICE,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_CART_ITEM,
  DECREMENT_CART_ITEM,
} from '../constants/cart'

describe('cart reducer test', () => {
  it('set total price', () => {
    const initialState = {
      totalPrice: 0,
      items: [
        {
          id: 0,
          title: 'title',
          price: 10,
          quantity: 2,
        },
      ],
    }
    const action: ICartActions = {
      type: SET_TOTAL_PRICE,
    }
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      totalPrice: 20,
    })
  })

  it('add to cart', () => {
    const expectState = {
      totalPrice: 10,
      items: [
        {
          id: 0,
          title: 'title',
          price: 10,
          quantity: 1,
        },
      ],
    }
    const action: ICartActions = {
      type: ADD_TO_CART,
      payload: {
        id: 0,
        title: 'title',
        price: 10,
      },
    }
    expect(reducer(defaultState, action)).toEqual(expectState)
  })

  it('remove from cart', () => {
    const initialState = {
      totalPrice: 10,
      items: [
        {
          id: 0,
          title: 'title',
          price: 10,
          quantity: 1,
        },
      ],
    }
    const expectState = defaultState
    const action: ICartActions = {
      type: REMOVE_FROM_CART,
      payload: 0,
    }
    expect(reducer(initialState, action)).toEqual(expectState)
  })

  it('increment cart item', () => {
    const initialState = {
      totalPrice: 10,
      items: [
        {
          id: 0,
          title: 'title',
          price: 10,
          quantity: 1,
        },
      ],
    }
    const expectState = {
      totalPrice: 10,
      items: [
        {
          id: 0,
          title: 'title',
          price: 10,
          quantity: 2,
        },
      ],
    }
    const action: ICartActions = {
      type: INCREMENT_CART_ITEM,
      payload: 0,
    }
    expect(reducer(initialState, action)).toEqual(expectState)
  })

  it('decrement cart item', () => {
    const initialState = {
      totalPrice: 10,
      items: [
        {
          id: 0,
          title: 'title',
          price: 10,
          quantity: 2,
        },
      ],
    }
    const expectState = {
      totalPrice: 10,
      items: [
        {
          id: 0,
          title: 'title',
          price: 10,
          quantity: 1,
        },
      ],
    }
    const action: ICartActions = {
      type: DECREMENT_CART_ITEM,
      payload: 0,
    }
    expect(reducer(initialState, action)).toEqual(expectState)
  })
})
