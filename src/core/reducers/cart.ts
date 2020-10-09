import { ICartState, ICartActions } from '../types/cart'
import {
  SET_TOTAL_PRICE,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_CART_ITEM,
  DECREMENT_CART_ITEM,
} from '../constants/cart'
import { ICartItem } from '@/types/models/cart'

export const defaultState: ICartState = {
  totalPrice: 0,
  items: [],
}

export function reducer(state: ICartState = defaultState, action: ICartActions): ICartState {
  switch (action.type) {
    default:
      return state
    case SET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: state.items.reduce((acc, cur) => acc + cur.price * cur.quantity, 0),
      }
    case ADD_TO_CART:
      const newItems = [{ ...action.payload, quantity: 1 }, ...state.items]
      return {
        ...state,
        items: newItems,
        totalPrice: newItems.reduce((acc, cur) => acc + cur.price, 0),
      }
    case REMOVE_FROM_CART:
      const items = state.items.filter((i) => i.id !== action.payload)
      return {
        ...state,
        items: items,
        totalPrice: items.reduce((acc, cur) => acc + cur.price, 0),
      }
    case INCREMENT_CART_ITEM:
      return {
        ...state,
        items: state.items.map((item: ICartItem) => {
          if (item.id === action.payload) {
            return {
              quantity: item.quantity++,
              ...item,
            }
          }

          return item
        }),
      }
    case DECREMENT_CART_ITEM:
      return {
        ...state,
        items: state.items.map((item: ICartItem) => {
          if (item.id === action.payload) {
            return {
              quantity: item.quantity--,
              ...item,
            }
          }

          return item
        }),
      }
  }
}
