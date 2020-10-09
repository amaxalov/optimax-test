import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import { fetchCatalog, addToCatalog, fetchCatalogSuccess, thunkFetchCatalog } from './catalog'
import { FETCH_CATALOG, ADD_TO_CATALOG, FETCH_CATALOG_SUCCESS } from '../constants/catalog'
import expect from 'expect'

const mock = new MockAdapter(axios)

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('catalog actions', () => {
  it('fetchCatalog', () => {
    expect(fetchCatalog()).toEqual({
      type: FETCH_CATALOG,
    })
  })

  it('addToCatalog', () => {
    const expectAction = {
      type: ADD_TO_CATALOG,
      payload: {
        id: 0,
        title: 'title',
        price: 10,
      },
    }
    expect(addToCatalog(expectAction.payload)).toEqual(expectAction)
  })

  it('fetchCatalogSuccess', () => {
    const expectAction = {
      type: FETCH_CATALOG_SUCCESS,
      payload: [
        {
          id: 0,
          title: 'title',
          price: 10,
        },
      ],
    }
    expect(fetchCatalogSuccess(expectAction.payload)).toEqual(expectAction)
  })
})

describe('async fetch catalog', () => {
  afterEach(() => {
    mock.restore()
  })

  it('create fetch catalog action', () => {
    const expectedActions = [
      { type: FETCH_CATALOG },
      {
        type: FETCH_CATALOG_SUCCESS,
        payload: [
          {
            id: 0,
            title: 'title',
            price: 10,
          },
        ],
      },
    ]

    mock.onGet('https://run.mocky.io/v3/4756e740-90a0-4e80-9fe1-f916deef5ded').reply(200, [
      {
        id: 0,
        title: 'title',
        price: 10,
      },
    ])

    const store = mockStore({ items: [] })

    // redux thunk types issue
    /* eslint-disable @typescript-eslint/no-explicit-any */
    return store.dispatch<any>(thunkFetchCatalog()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
