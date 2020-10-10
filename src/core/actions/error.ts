import { IErrorActions } from '../types/error'
import { SET_ERROR, HIDE_ERROR } from '../constants/error'

export const setError = (error: string): IErrorActions => ({
  type: SET_ERROR,
  error,
})

export const hideError = (): IErrorActions => ({
  type: HIDE_ERROR,
})
