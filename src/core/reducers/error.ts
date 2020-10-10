import { HIDE_ERROR, SET_ERROR } from '../constants/error'
import { IErrorState, IErrorActions } from '../types/error'

export const defaultState: IErrorState = {
  error: null,
  isOpen: false,
}

export function reducer(state: IErrorState = defaultState, action: IErrorActions): IErrorState {
  switch (action.type) {
    default:
      return state
    case HIDE_ERROR:
      return {
        ...state,
        error: null,
        isOpen: false,
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
        isOpen: true,
      }
  }
}
