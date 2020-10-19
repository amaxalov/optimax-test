import { ICartActions } from '../types/cart'
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_CART_ITEM,
  DECREMENT_CART_ITEM,
  SET_TOTAL_PRICE,
} from '../constants/cart'
import { IProduct } from '@/types/models/catalog'

export const setTotalPrice = (): ICartActions => ({
  type: SET_TOTAL_PRICE,
})

export const addToCart = (res: IProduct): ICartActions => ({
  type: ADD_TO_CART,
  payload: res,
})

export const removeFromCart = (id: number): ICartActions => ({
  type: REMOVE_FROM_CART,
  payload: id,
})

export const incrementCartItem = (id: number): ICartActions => ({
  type: INCREMENT_CART_ITEM,
  payload: id,
})

export const decrementCartItem = (id: number): ICartActions => ({
  type: DECREMENT_CART_ITEM,
  payload: id,
})
