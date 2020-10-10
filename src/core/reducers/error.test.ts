import { IErrorActions } from '../types/error'
import { reducer, defaultState } from './error'
import { HIDE_ERROR, SET_ERROR } from '../constants/error'

describe('error reducer test', () => {
  it('set error', () => {
    const action: IErrorActions = {
      type: SET_ERROR,
      error: 'error',
    }
    expect(reducer(defaultState, action)).toEqual({
      ...defaultState,
      error: 'error',
      isOpen: true,
    })
  })

  it('hide error', () => {
    const initialState = {
      error: 'error',
      isOpen: true,
    }
    const action: IErrorActions = {
      type: HIDE_ERROR,
    }
    expect(reducer(defaultState, action)).toEqual({
      ...initialState,
      error: null,
      isOpen: false,
    })
  })
})
