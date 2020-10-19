/* eslint-disable no-console */
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { IProduct } from '@/types/models/catalog'
import axios from 'axios'
import { ICatalogState, ICatalogActions } from '../types/catalog'
import { FETCH_CATALOG, FETCH_CATALOG_SUCCESS, ADD_TO_CATALOG } from '../constants/catalog'
import { setError } from './error'

export const fetchCatalog = (): ICatalogActions => ({
  type: FETCH_CATALOG,
})

export const addToCatalog = (payload: IProduct): ICatalogActions => ({
  type: ADD_TO_CATALOG,
  payload,
})

export const fetchCatalogSuccess = (res: IProduct[]): ICatalogActions => ({
  type: FETCH_CATALOG_SUCCESS,
  payload: res,
})

export const thunkFetchCatalog = (): ThunkAction<void, ICatalogState, unknown, Action> => (dispatch) => {
  dispatch(fetchCatalog())
  return axios
    .get<IProduct[]>('https://run.mocky.io/v3/4756e740-90a0-4e80-9fe1-f916deef5ded')
    .then((res) => {
      dispatch(fetchCatalogSuccess(res.data))
    })
    .catch((error) => {
      dispatch(setError(error.messages || 'something get wrong :('))
    })
}
