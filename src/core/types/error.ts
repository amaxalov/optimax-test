import { Action } from 'redux'
import { SET_ERROR, HIDE_ERROR } from '../constants/error'

export type IHideError = Action<typeof HIDE_ERROR>

export interface ISetError extends Action<typeof SET_ERROR> {
  readonly error: string
}

export interface IErrorState {
  readonly error: string | null
  readonly isOpen: boolean
}

export type IErrorActions = ISetError | IHideError
