import { Action } from 'redux'
import { ICartItem } from '@/types/models/cart'
import { IProduct } from '@/types/models/catalog'
import {
  SET_TOTAL_PRICE,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_CART_ITEM,
  DECREMENT_CART_ITEM,
} from '../constants/cart'

export type ISetTotalPrice = Action<typeof SET_TOTAL_PRICE>

export interface IAddToCart extends Action<typeof ADD_TO_CART> {
  payload: IProduct
}

export interface IRemoveFromCart extends Action<typeof REMOVE_FROM_CART> {
  payload: number
}

export interface IIncrementCartItem extends Action<typeof INCREMENT_CART_ITEM> {
  payload: number
}

export interface IDecrementCartItem extends Action<typeof DECREMENT_CART_ITEM> {
  payload: number
}

export interface ICartState {
  totalPrice: number
  items: Array<ICartItem>
}

export type ICartActions = IAddToCart | IRemoveFromCart | IIncrementCartItem | IDecrementCartItem | ISetTotalPrice
