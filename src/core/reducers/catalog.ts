import { ICatalogState, ICatalogActions } from '../types/catalog'
import { ADD_TO_CATALOG, FETCH_CATALOG, FETCH_CATALOG_REJECTED, FETCH_CATALOG_SUCCESS } from '../constants/catalog'

export const defaultState: ICatalogState = {
  isFetched: false,
  items: [],
  error: null,
}

export function reducer(state: ICatalogState = defaultState, action: ICatalogActions): ICatalogState {
  switch (action.type) {
    default:
      return state
    case FETCH_CATALOG:
      return {
        ...state,
        isFetched: true,
        error: null,
      }
    case ADD_TO_CATALOG:
      return {
        ...state,
        items: [action.payload, ...state.items],
      }
    case FETCH_CATALOG_SUCCESS:
      return {
        ...state,
        items: action.payload,
        isFetched: false,
      }
    case FETCH_CATALOG_REJECTED:
      return {
        ...state,
        isFetched: false,
        error: action.payload,
      }
  }
}
