import { ICatalogActions } from '../types/catalog'
import { reducer, defaultState } from './catalog'
import { FETCH_CATALOG, FETCH_CATALOG_SUCCESS, ADD_TO_CATALOG } from '../constants/catalog'
import { IProduct } from '@/types/models/catalog'

describe('cart reducer test', () => {
  it('fetch catalog', () => {
    const action: ICatalogActions = {
      type: FETCH_CATALOG,
    }
    expect(reducer(defaultState, action)).toEqual({
      ...defaultState,
      isFetched: true,
    })
  })

  it('fetch catalog success', () => {
    const initialState = {
      isFetched: true,
      items: <IProduct[]>[],
    }
    const action: ICatalogActions = {
      type: FETCH_CATALOG_SUCCESS,
      payload: [
        {
          id: 0,
          title: 'title',
          price: 10,
        },
      ],
    }
    expect(reducer(defaultState, action)).toEqual({
      ...initialState,
      items: action.payload,
      isFetched: false,
    })
  })

  it('add item to catalog', () => {
    const initialState = {
      isFetched: false,
      items: [
        {
          id: 0,
          title: 'title',
          price: 10,
        },
      ],
    }
    const action: ICatalogActions = {
      type: ADD_TO_CATALOG,
      payload: {
        id: 1,
        title: 'title 2',
        price: 20,
      },
    }
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      items: [action.payload, ...initialState.items],
    })
  })
})
