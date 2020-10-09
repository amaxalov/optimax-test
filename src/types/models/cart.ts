import { IProduct } from './catalog'

export interface ICartItem extends IProduct {
  quantity: number
}
