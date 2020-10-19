import { Action } from 'redux'
import { IProduct } from '@/types/models/catalog'
import { FETCH_CATALOG, FETCH_CATALOG_SUCCESS, ADD_TO_CATALOG } from '../constants/catalog'

export type IFetchCatalogAction = Action<typeof FETCH_CATALOG>

export interface IFetchCatalogSuccessAction extends Action<typeof FETCH_CATALOG_SUCCESS> {
  readonly payload: IProduct[]
}

export interface IAddToCatalogAction extends Action<typeof ADD_TO_CATALOG> {
  readonly payload: IProduct
}

export interface ICatalogState {
  readonly isFetched: boolean
  readonly items: IProduct[]
}

export type ICatalogActions = IFetchCatalogAction | IFetchCatalogSuccessAction | IAddToCatalogAction
